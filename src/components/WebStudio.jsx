import Reveal from './Reveal';

export default function WebStudio({ deliverables }) {
  return (
    <>
      <Reveal as="section" className="section web-studio-section">
        <div className="wrap">
          <div className="web-studio-intro">
            <div>
              <span className="eyebrow">Design + development</span>
              <h2>Designed and built for the browser.</h2>
            </div>
            <div>
              <p>We design in the browser, test on real screen sizes and build reusable components that keep the finished site fast, consistent and easy to maintain.</p>
              <div className="tech-tags" aria-label="Web capabilities">
                <span>Responsive UI</span><span>React</span><span>Performance</span><span>SEO</span>
              </div>
            </div>
          </div>

          <div className="web-workbench">
            <div className="code-window" aria-label="Website code editor preview">
              <div className="window-bar">
                <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
                <span>joki-studio / home.jsx</span>
              </div>
              <div className="editor-body">
                <div className="editor-rail" aria-hidden="true"><span>⌘</span><span>◇</span><span>⑂</span><span>⚙</span></div>
                <div className="editor-code" aria-hidden="true">
                  <div><b>01</b><code><em>const</em> experience = {'{'}</code></div>
                  <div><b>02</b><code>&nbsp;&nbsp;clear: <strong>true</strong>,</code></div>
                  <div><b>03</b><code>&nbsp;&nbsp;responsive: <strong>true</strong>,</code></div>
                  <div><b>04</b><code>&nbsp;&nbsp;fast: <strong>true</strong>,</code></div>
                  <div><b>05</b><code>&nbsp;&nbsp;accessible: <strong>true</strong></code></div>
                  <div><b>06</b><code>{'}'};</code></div>
                  <div className="code-space"><b>07</b><code /></div>
                  <div><b>08</b><code><em>export default</em> experience;</code></div>
                </div>
              </div>
              <div className="editor-status"><span>main*</span><span>UTF-8 &nbsp; JSX &nbsp; ✓ Ready</span></div>
            </div>

            <div className="browser-mockup">
              <div className="window-bar browser-bar">
                <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
                <div className="address-bar">nyumbadynamics.com</div>
              </div>
              <div className="browser-screen">
                <img src="/images/nyumba-dynamics-website.png" alt="Nyumba Dynamics website shown in a desktop browser" loading="lazy" />
              </div>
              <div className="mobile-mockup">
                <span aria-hidden="true" />
                <img src="/images/nyumba-dynamics-website.png" alt="Nyumba Dynamics responsive mobile preview" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section web-services-section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What we build</span>
            <div><h2>Websites people can use.</h2><p>We organise each page around the information visitors need and make it easy to contact the business.</p></div>
          </div>
          <div className="web-service-list">
            {deliverables.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}
