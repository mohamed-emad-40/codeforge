import { Link } from 'react-router-dom';
import PageHead from '../components/PageHead.jsx';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { ServiceCard } from '../components/Cards.jsx';
import { SERVICES, FAQ } from '../data.js';

export default function Services() {
  return (
    <>
      <PageHead tag="Services" eyebrow="services" title="Everything your product needs," accent="end to end."
        text="Design, frontend, backend and deployment handled by one focused team." />
      <section className="section">
        <div className="container grid grid--3">
          {SERVICES.map((s, i) => <Reveal key={s.id} delay={i * 90}><ServiceCard s={s} detailed /></Reveal>)}
        </div>
      </section>
      <Section num="01" label="faq" title="Common questions" alt>
        <div className="faq">
          {FAQ.map((f) => (
            <details key={f.q} className="faq__item">
              <summary>{f.q}</summary>
              <p className="muted">{f.a}</p>
            </details>
          ))}
        </div>
        <Link to="/contact" className="btn btn-primary" style={{ marginTop: 32 }}>Ask us anything</Link>
      </Section>
    </>
  );
}
