import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="joki-not-found">
      <div className="joki-container">

        <span className="joki-eyebrow">
          Error 404
        </span>

        <h1>
          Lost?
          <span> Let's go home.</span>
        </h1>

        <p>
          The page you're looking for doesn't exist.
        </p>

        <Link to="/" className="joki-button joki-button-primary">
          Back to Home &rarr;
        </Link>

      </div>
    </section>
  );
}
