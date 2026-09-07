export default function Home() {
  return (
    <div className="animate-fade-in mt-4 md:mt-8 mb-32 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-center">
      
      {/* Left Column: Text */}
      <div className="md:col-span-7 flex flex-col gap-10">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.85] font-sans">
          Engineering <br />
          <span className="text-gray-500">Ideas.</span>
        </h2>

        <div className="flex flex-col gap-6 text-gray-400 leading-relaxed text-sm max-w-xl">
          <p>
            computer science student at purdue university building robust software and understanding the systems underneath. give me a hard problem, and i'll own it end to end.
          </p>
          <p>
            i believe the best solutions live just outside the boundaries of conventional architecture. currently exploring low-level execution, systems design, and scalable cloud infrastructure.
          </p>
        </div>
      </div>

      {/* Right Column: CSS Orbit Animation */}
      <div className="md:col-span-5 flex justify-center md:justify-end">
        
        {/* Main interactive container */}
        <div className="relative flex items-center justify-center w-64 h-64 md:w-100 md:h-100 group mt-8 md:mt-0">
          
          {/* The "Box" (Center Square) */}
          <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-gray-600 rounded-3xl z-10 transition-colors duration-700 group-hover:border-gray-200"></div>
          
          {/* The Orbiting Wrapper - Spins continuously */}
          <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
            
            {/* The "Outside Idea" (Orbiting Circle) 
                Positioned at the very top center of the spinning wrapper */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 border-4 border-gray-600 rounded-full bg-black transition-colors duration-700 group-hover:border-gray-200"></div>
            
          </div>

          {/* Subtle terminal-style caption that appears on hover */}
          <div className="absolute -bottom-8 right-4 text-xs text-green-500/60 font-mono tracking-widest text-right opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            Think Outside the Box
          </div>
        </div>
        
      </div>

    </div>
  );
}