import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle.jsx';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import CodeWindow from '../components/CodeWindow.jsx';
import Icon from '../components/Icon.jsx';
import { ServiceCard, ProjectCard } from '../components/Cards.jsx';
import { SERVICES, PROCESS, PROJECTS, STACK } from '../data.js';

export default function Home() {
  return (
    <>
      <PageTitle />
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <div className="eyebrow">// web development studio</div>
            <h1 className="display display--xl">We forge websites that <span className="ember">perform.</span></h1>
            <p className="lead">Fast, secure, custom-built web applications — from the first sketch to the final deploy.</p>
            <div className="row">
              <Link to="/contact" className="btn btn-primary">Get a free quote <Icon name="arrow" size={18} /></Link>
              <Link to="/work" className="btn btn-ghost">See our work</Link>
            </div>
          </div>
          <CodeWindow />
        </div>
      </section>

      <div className="marquee" aria-label="Technologies we use">
        <div className="marquee__track">
          {[...STACK, ...STACK].map((t, i) => <span key={i} className="mono">{t}</span>)}
        </div>
      </div>

      <Section id="services" num="01" label="services" title="What we build">
        <div className="grid grid--3">
          {SERVICES.map((s, i) => <Reveal key={s.id} delay={i * 90}><ServiceCard s={s} /></Reveal>)}
        </div>
      </Section>

      <Section id="process" num="02" label="process" title="From raw idea to finished product" alt>
        <div className="grid grid--4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <div className="step">
                <div className="mono amber">{p.n}</div>
                <h3 className="h3">{p.title}</h3>
                <p className="muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="work" num="03" label="work" title="Recent projects">
        <div className="grid grid--2">
          {PROJECTS.slice(0, 2).map((p, i) => <Reveal key={p.id} delay={i * 90}><ProjectCard p={p} /></Reveal>)}
        </div>
        <Reveal><Link to="/work" className="more more--lg">View all work <Icon name="arrow" size={18} /></Link></Reveal>
      </Section>

      <section className="container cta-wrap">
        <Reveal>
          <div className="cta">
            <div>
              <h2 className="h2">Ready to forge yours?</h2>
              <p>Tell us about your project and we’ll get back to you with next steps.</p>
            </div>
            <Link to="/contact" className="btn btn-dark">Start a project</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
