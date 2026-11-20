import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { CONTACT } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <Logo />
          <p className="muted footer__tag">We forge websites that perform.</p>
        </div>
        <nav className="footer__links" aria-label="Footer">
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="muted">
          <div>{CONTACT.email}</div>
          <div>{CONTACT.phone}</div>
        </div>
      </div>
      <div className="container footer__bottom muted">© {new Date().getFullYear()} Code Forge. All rights reserved.</div>
    </footer>
  );
}
