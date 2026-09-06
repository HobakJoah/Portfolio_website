import { useState } from 'react';
import BootSequence from './components/BootSequence';
import MainContent from './components/MainContent';

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="min-h-screen p-6 md:p-16 max-w-3xl mx-auto">
      {!booted ? (
        <BootSequence onComplete={() => setBooted(true)} />
      ) : (
        <MainContent />
      )}
    </div>
  );
}

export default App;