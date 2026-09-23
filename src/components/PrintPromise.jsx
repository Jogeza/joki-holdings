import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function PrintPromise() {
  return (
    <Reveal as="section" className="section print-promise">
      <div className="wrap print-promise-grid">
        <div className="print-promise-images">
          <img src="/media/joki-holdings-print-portfolio-01.jpg" alt="Finished restaurant menu produced by Joki Holdings" loading="lazy" />
          <img src="/media/joki-holdings-print-portfolio-10.jpeg" alt="Commercial printing underway in the workshop" loading="lazy" />
        </div>
        <div className="print-promise-copy">
          <span className="eyebrow">Print with confidence</span>
          <h2>Bring the brief. Leave with finished work.</h2>
          <p>We manage design, material choices, proofing and production as one process. You get practical guidance before money is committed—and finished work ready for use.</p>
          <div className="print-benefits">
            <div><b>01</b><span><strong>Clear specifications</strong><small>Format, quantity, stock and finish agreed upfront.</small></span></div>
            <div><b>02</b><span><strong>Production oversight</strong><small>Artwork and output checked before final delivery.</small></span></div>
            <div><b>03</b><span><strong>One accountable studio</strong><small>No gap between the design file and the printed result.</small></span></div>
          </div>
          <Link className="btn btn-gold" to="/contact">Request a print quote →</Link>
        </div>
      </div>
    </Reveal>
  );
}
