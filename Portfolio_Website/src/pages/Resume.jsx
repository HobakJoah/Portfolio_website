export default function Resume() {
  return (
    <div className="animate-fade-in h-[70vh] w-full mt-4">
      <iframe 
        src="/resume.pdf" 
        className="w-full h-full rounded border border-gray-800 bg-gray-900"
        title="Resume"
      />
    </div>
  );
}