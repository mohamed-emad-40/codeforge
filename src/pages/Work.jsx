import { useState } from 'react';
import PageHead from '../components/PageHead.jsx';
import Reveal from '../components/Reveal.jsx';
import { ProjectCard } from '../components/Cards.jsx';
import { PROJECTS } from '../data.js';

const FILTERS = ['All', 'Websites', 'Web Apps'];

export default function Work() {
  const [filter, setFilter] = useState('All');
  const list = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <>
      <PageHead tag="Work" eyebrow="selected work" title="Built to be" accent="noticed." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="chips" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button key={f} className={`chip ${filter === f ? 'chip--on' : ''}`} aria-pressed={filter === f}
                onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="grid grid--2">
            {list.map((p, i) => <Reveal key={`${filter}-${p.id}`} delay={i * 70}><ProjectCard p={p} /></Reveal>)}
          </div>
        </div>
      </section>
    </>
  );
}
