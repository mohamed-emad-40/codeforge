import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Code Forge home">
      <svg width="32" height="32" viewBox="0 0 34 34" fill="none" stroke="var(--ember)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 9 3 17l7 8" /><path d="M24 9l7 8-7 8" /><path d="M19 6l-4 22" />
      </svg>
      <span>Code<b>Forge</b></span>
    </Link>
  );
}
