import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BootSequence from './components/BootSequence';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="min-h-screen p-6 md:p-16 max-w-7xl mx-auto">
      {!booted ? (
        <BootSequence onComplete={() => setBooted(true)} />
      ) : (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            {/* The Layout component wraps all routes inside it */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="resume" element={<Resume />} />
              <Route path="work" element={<div className="animate-fade-in text-gray-400 text-sm">work experience coming soon...</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;