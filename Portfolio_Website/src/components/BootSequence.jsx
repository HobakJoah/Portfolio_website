import { useState, useEffect } from 'react';

export default function BootSequence({ onComplete }) {
  const [lines, setLines] = useState([]);
  
  const bootProcess = [
    { text: "$ init --profile developer", delay: 400 },
    { text: "checking systems ............. [OK]", delay: 900 },
    { text: "loading interfaces ........... [OK]", delay: 1300 },
    { text: "establishing connection ...... [OK]", delay: 1700 },
    { text: "starting session...", delay: 2200 }
  ];

  useEffect(() => {
    bootProcess.forEach((line, index) => {
      setTimeout(() => {
        setLines((prev) => [...prev, line.text]);
        
        if (index === bootProcess.length - 1) {
          setTimeout(() => {
            onComplete();
          }, 600);
        }
      }, line.delay);
    });
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