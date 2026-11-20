import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

export function ServiceCard({ s, detailed = false }) {
  return (
    <article className="card service">
      <span className="ember"><Icon name={s.icon} size={30} /></span>
      <h3 className="h3">{s.title}</h3>
      <p className="muted">{detailed ? s.long : s.short}</p>
      {detailed && (
        <ul className="ticks">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
      )}
      {!detailed && (
        <Link to="/services" className="more">Learn more <Icon name="arrow" size={16} /></Link>
      )}
    </article>
  );
}

export function ProjectCard({ p }) {
  return (
    <article className="card project">
      <div className="project__shot" aria-hidden="true">
        <div className="project__frame"><i /><i /><i /></div>
      </div>
      <div className="project__body">
        <div className="mono amber">{p.type} · {p.stack}</div>
        <h3 className="h3">{p.name}</h3>
        <p className="muted">{p.text}</p>
      </div>
    </article>
  );
}
