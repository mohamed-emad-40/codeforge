import { Link } from 'react-router-dom';
import PageHead from '../components/PageHead.jsx';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { VALUES, STACK } from '../data.js';

export default function About() {
  return (
    <>
      <PageHead tag="About" eyebrow="about" title="A small studio with" accent="big standards."
        text="Code Forge is a web development studio focused on building fast, secure and well-crafted digital products." />
      <Section num="01" label="values" title="How we work">
        <div className="grid grid--3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <article className="card"><h3 className="h3">{v.title}</h3><p className="muted">{v.text}</p></article>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section num="02" label="stack" title="Tools we trust" alt>
        <Reveal>
          <div className="chips">{STACK.map((t) => <span key={t} className="chip chip--static mono">{t}</span>)}</div>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 36 }}>Work with us</Link>
        </Reveal>
      </Section>
    </>
  );
}
