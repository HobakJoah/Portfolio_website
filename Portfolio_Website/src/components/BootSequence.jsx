import { useState, useEffect } from 'react';

const bootProcess = [
  { text: "$ init --profile developer", delay: 400 },
  { text: "checking systems ............. [OK]", delay: 900 },
  { text: "loading interfaces ........... [OK]", delay: 1300 },
  { text: "establishing connection ...... [OK]", delay: 1700 },
  { text: "starting session...", delay: 2200 }
];

export default function BootSequence({ onComplete }) {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const timeoutIds = [];

    bootProcess.forEach((line, index) => {
      const id = setTimeout(() => {
        setLines((prev) => [...prev, line.text]);

        if (index === bootProcess.length - 1) {
          timeoutIds.push(setTimeout(onComplete, 600));
        }
      }, line.delay);
      timeoutIds.push(id);
    });

    // Clear any pending timers on unmount so React 19 StrictMode's
    // dev-only mount/unmount/remount cycle doesn't double-fire lines.
    return () => timeoutIds.forEach(clearTimeout);
    // Intentionally run once on mount only — the boot sequence shouldn't
    // restart if the parent re-renders with a new onComplete reference.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-2 text-sm text-green-500 font-mono mt-8">
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <span className="animate-pulse text-green-500">_</span>
    </div>
  );
}