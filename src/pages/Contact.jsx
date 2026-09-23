import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import { SITE } from '../data/site';

const SERVICE_BY_TYPE = {
  'Print design': 'PRINT',
  'Web design': 'WEB',
  'Brand identity': 'DESIGN',
};

const INITIAL_ERRORS = {};

export default function Contact() {
  const location = useLocation();
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [notice, setNotice] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const type = data.get('projectType');
    const payload = {
      service: SERVICE_BY_TYPE[type] || 'GENERAL',
      source: location.pathname,
      name: data.get('name'),
      email: data.get('email'),
      company: data.get('company'),
      message: data.get('message'),
      projectDetails: { projectType: type, budget: data.get('budget') },
      consent: data.get('consent') === 'on',
      website: data.get('website') || '',
    };

    setErrors(INITIAL_ERRORS);
    setStatus('sending');
    setNotice('Sending your enquiry…');
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        form.reset();
        setStatus('success');
        setNotice('Thank you. Your project enquiry has been received.');
        return;
      }
      if (response.status === 422) {
        const body = await response.json();
        setErrors(body.fields || {});
        setStatus('error');
        setNotice('Please check the highlighted fields and try again.');
        return;
      }
      setStatus('error');
      setNotice(`We could not send this right now. Please email ${SITE.email}.`);
    } catch {
      setStatus('error');
      setNotice(`We could not send this right now. Please email ${SITE.email}.`);
    }
  }

  const error = (key) => (errors[key] ? <span className="field-error">{errors[key]}</span> : null);

  return (
    <>
      <Seo
        title="Start a Project | Joki Holdings"
        description="Contact Joki Holdings in Kampala about a print, web or brand identity project."
        path="/contact"
        image="/images/signage.jpeg"
      />
      <PageHero
        eyebrow="Start a project"
        title="Tell us what needs to work better."
        copy="A useful brief can be short. Share the goal, the deliverables you know about and any timing or budget constraints."
      />
      <section className="section">
        <div className="wrap contact-layout">
          <div className="contact-copy">
            <span className="eyebrow">Contact</span>
            <h2>Let’s make the next step clear.</h2>
            <p>We review each enquiry and respond with questions, a recommended scope or a clear explanation if another specialist would be a better fit.</p>
            <div className="contact-links">
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <a href={SITE.phoneHref}>{SITE.phone}</a>
              <span>{SITE.location}</span>
            </div>
          </div>
          <form className="contact-form" id="project-form" onSubmit={onSubmit} noValidate={false}>
            <div className="honeypot" aria-hidden="true">
              <label>Website<input name="website" autoComplete="off" tabIndex={-1} /></label>
            </div>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required autoComplete="name" />
              {error('name')}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" />
              {error('email')}
            </div>
            <div className="field full">
              <label htmlFor="company">Company / organisation</label>
              <input id="company" name="company" autoComplete="organization" />
              {error('company')}
            </div>
            <div className="field">
              <label htmlFor="projectType">Project type</label>
              <select id="projectType" name="projectType" required defaultValue="">
                <option value="">Choose one</option>
                <option>Print design</option>
                <option>Web design</option>
                <option>Brand identity</option>
                <option>Combined project</option>
                <option>Not sure yet</option>
              </select>
              {error('service')}
            </div>
            <div className="field">
              <label htmlFor="budget">Budget range</label>
              <select id="budget" name="budget" required defaultValue="">
                <option value="">Choose a range</option>
                <option>Under UGX 2 million</option>
                <option>UGX 2–5 million</option>
                <option>UGX 5–15 million</option>
                <option>UGX 15 million+</option>
                <option>Need guidance</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor="message">Project details</label>
              <textarea id="message" name="message" required placeholder="What are you making, who is it for, and when do you need it?" />
              {error('message')}
            </div>
            <label className="consent">
              <input type="checkbox" name="consent" required />
              <span>I agree that {SITE.name} may use these details to respond to my enquiry.</span>
            </label>
            {error('consent')}
            <button className="btn btn-dark" type="submit" disabled={status === 'sending'}>Send enquiry →</button>
            <p className="form-status" role="status" aria-live="polite">{notice}</p>
          </form>
        </div>
      </section>
    </>
  );
}
