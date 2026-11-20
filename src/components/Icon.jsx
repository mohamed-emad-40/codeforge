const PATHS = {
  monitor: (<><rect x="3" y="5" width="24" height="17" rx="2" /><path d="M10 27h10M15 22v5" /></>),
  code: <path d="M9 9 3 15l6 6M21 9l6 6-6 6M17 6l-4 18" />,
  database: (<><ellipse cx="15" cy="7" rx="10" ry="4" /><path d="M5 7v8c0 2.2 4.5 4 10 4s10-1.8 10-4V7M5 15v8c0 2.2 4.5 4 10 4s10-1.8 10-4v-8" /></>),
  arrow: <path d="M5 15h20M17 7l8 8-8 8" />,
  menu: <path d="M4 9h22M4 15h22M4 21h22" />,
  close: <path d="M7 7l16 16M23 7 7 23" />,
};

export default function Icon({ name, size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
