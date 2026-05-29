/**
 * "Ask Assistant" CTA — Windsurf-style topbar button.
 * Currently links to GitHub Discussions; can later be wired to an in-page
 * assistant overlay (Algolia DocSearch, Mendable, etc.).
 */
import { useState } from 'react';

export default function AskAssistant() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://github.com/jakubkozera/vsc-csharp-dev-tools/discussions"
      target="_blank"
      rel="noopener"
      className="ask-assistant"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Ask a question on GitHub Discussions"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{
          transform: hovered ? 'rotate(-10deg)' : 'rotate(0)',
          transition: 'transform 200ms ease',
        }}
      >
        <path d="M12 2l1.6 4.6L18 8.2l-3.7 2.6 1.4 4.7L12 12.9l-3.7 2.6 1.4-4.7L6 8.2l4.4-1.6L12 2z" />
      </svg>
      <span>Ask Assistant</span>
    </a>
  );
}
