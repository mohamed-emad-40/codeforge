import { useEffect } from 'react';

export default function PageTitle({ title }) {
  useEffect(() => { document.title = title ? `${title} — Code Forge` : 'Code Forge — Web Development Studio'; }, [title]);
  return null;
}
