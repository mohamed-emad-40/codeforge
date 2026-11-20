import { useEffect, useState } from 'react';

const LINES = [
  [['kw', 'const'], ['', ' forge = {']],
  [['', '  idea:   '], ['str', '"yours"'], ['', ',']],
  [['', '  stack:  ['], ['str', '"React"'], ['', ', '], ['str', '"Node"'], ['', '],']],
  [['', '  status: '], ['str', '"shipping"'], ['', ',']],
  [['', '};']],
];
const TOTAL = LINES.flat().reduce((n, [, t]) => n + t.length, 0);

export default function CodeWindow() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setCount(TOTAL); return; }
    if (count >= TOTAL) return;
    const t = setTimeout(() => setCount((c) => c + 1), 38);
    return () => clearTimeout(t);
  }, [count]);

  let left = count;
  return (
    <div className="codewin" aria-hidden="true">
      <div className="codewin__bar"><i /><i /><i className="hot" /></div>
      <pre>
        {LINES.map((line, i) => (
          <div key={i}>
            {line.map(([cls, text], j) => {
              const shown = text.slice(0, Math.max(0, left));
              left -= text.length;
              return <span key={j} className={cls}>{shown}</span>;
            })}
          </div>
        ))}
        <span className="caret" />
      </pre>
    </div>
  );
}
