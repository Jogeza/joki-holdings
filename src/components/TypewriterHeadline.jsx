import { useEffect, useState } from 'react';

const LEAD = 'Design and production that ';
const ACCENT = 'gets the job done.';
const FULL_HEADLINE = `${LEAD}${ACCENT}`;

export default function TypewriterHeadline() {
  const [characterCount, setCharacterCount] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setCharacterCount(FULL_HEADLINE.length);
      return undefined;
    }

    let current = 0;
    let intervalId;
    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        current += 1;
        setCharacterCount(current);
        if (current >= FULL_HEADLINE.length) window.clearInterval(intervalId);
      }, 42);
    }, 260);

    return () => {
      window.clearTimeout(startId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, []);

  const leadLength = Math.min(characterCount, LEAD.length);
  const accentLength = Math.max(0, characterCount - LEAD.length);
  const isComplete = characterCount >= FULL_HEADLINE.length;

  return (
    <h1>
      <span className="sr-only">{FULL_HEADLINE}</span>
      <span aria-hidden="true">
        {LEAD.slice(0, leadLength)}
        <em>{ACCENT.slice(0, accentLength)}</em>
        <span className={`typewriter-cursor${isComplete ? ' complete' : ''}`} aria-hidden="true" />
      </span>
    </h1>
  );
}
