import Reveal from './Reveal.jsx';

export default function Section({ id, num, label, title, alt, children }) {
  return (
    <section id={id} className={`section ${alt ? 'section--alt' : ''}`}>
      <div className="container">
        <Reveal>
          <div className="eyebrow">{num} / {label}</div>
          <h2 className="h2">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
