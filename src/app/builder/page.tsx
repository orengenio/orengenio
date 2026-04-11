import dynamic from 'next/dynamic';

// GrapesJS requires the window object, so it cannot be SSR rendered.
const GrapesEditor = dynamic(() => import('@/components/GrapesEditor'), {
  ssr: false,
});

export default function BuilderPage() {
  return (
    <main>
      <GrapesEditor />
    </main>
  );
}
