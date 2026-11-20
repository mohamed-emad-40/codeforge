import { useEffect } from 'react';

export default function PageHead({ eyebrow, title, accent, text, tag }) {
  useEffect(() => { document.title = tag ? `${tag} — Code Forge` : 'Code Forge'; }, [tag]);
  return (
    <section className="page-head">
      <div className="container">
        <div className="eyebrow">// {eyebrow}</div>
        <h1 className="display">{title} {accent && <span className="ember">{accent}</span>}</h1>
        {text && <p className="lead">{text}</p>}
      </div>
    </section>
  );
}
