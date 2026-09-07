import { useState, useEffect } from 'react';

export default function BootSequence({ onComplete }) {
  // We can define the facts outside the useEffect now
  const facts = [
    "I love playing rugby!\n I won the State Championship twice in high school!",
    "I love watching anime.\nMy favorite one is either 86 or Your Name \n(You can see this in my chatbot project..)",
    "The only game I play? League of Legends\n(you probably noticed it when you saw this)",
    "Something about Quantum Physics is really intruiging to me..."
  ];

  // This immediately picks a random fact the exact moment the component loads
  const [fact] = useState(() => facts[Math.floor(Math.random() * facts.length)]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex h-[80vh] items-center justify-center animate-fade-in px-6">
      {/* Added leading-relaxed for better line spacing when it drops to a new line */}
      <p className="text-lg md:text-xl text-gray-400 font-mono text-center leading-relaxed max-w-2xl">
        <span className="text-green-500 mr-2">&gt;</span>
        
        <span className="text-gray-200 mr-2">Did you know?</span> 
        <br />
        
        {/* whitespace-pre-line tells the browser to convert \n into actual line breaks */}
        <span className="whitespace-pre-line">{fact}</span>
      </p>
    </div>
  );
}