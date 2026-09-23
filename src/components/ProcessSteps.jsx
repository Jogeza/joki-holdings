export default function ProcessSteps({ steps }) {
  return (
    <div className="process">
      {steps.map(([title, copy], index) => (
        <article className="step" key={title}>
          <div className="step-head">
            <b>{String(index + 1).padStart(2, '0')}</b>
            <h3>{title}</h3>
          </div>
          <p>{copy}</p>
        </article>
      ))}
    </div>
  );
}
