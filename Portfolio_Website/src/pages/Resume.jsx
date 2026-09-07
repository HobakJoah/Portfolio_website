import { FiDownload, FiExternalLink } from 'react-icons/fi';

export default function Resume() {
  const resumePdfUrl = "/resume.pdf";

  return (
    <div className="animate-fade-in text-gray-200 mt-12 flex flex-col min-h-[95vh] w-full max-w-none mx-auto px-4 md:px-10">
      
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6 mt-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Resume
        </h1>

        <div className="flex items-center gap-6 text-sm font-mono text-gray-500">
          <a 
            href={resumePdfUrl} 
            download 
            className="hover:text-white transition-colors flex items-center gap-2 min-w-max"
          >
            <span>Download PDF</span>
            <FiDownload className="text-green-500/80" />
          </a>
          
          <a 
            href={resumePdfUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors flex items-center gap-2 min-w-max"
          >
            <span>Open in new tab</span>
            <FiExternalLink className="text-green-500/80" />
          </a>
        </div>
      </header>

      <div className="border-b border-gray-900 pb-2 mb-10"></div>

      {/* 
        The Paper-Sized Wrapper: 
        1. max-w-5xl prevents the resume from becoming absurdly huge on ultrawide monitors.
        2. aspect-[8.5/11] forces the container to perfectly match standard US Letter paper dimensions.
      */}
      <div className="w-full max-w-5xl mx-auto border border-gray-800 rounded-lg bg-gray-900 p-2 mb-20">
        <div className="w-full aspect-[8.5/11] overflow-hidden rounded-md">
          <iframe 
            /* Added scrollbar=0 to the URL parameters to suppress the native PDF scrollbar */
            src={`${resumePdfUrl}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`} 
            className="w-full h-full"
            title="Resume Document Viewer"
          />
        </div>
      </div>

    </div>
  );
}