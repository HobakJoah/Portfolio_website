import { FiArrowUpRight } from 'react-icons/fi';

// 1. Import your images
import basfPhoto from '../assets/BASF_photo.jpeg';
import chatbotUi from '../assets/Fido.jpg';
// Removed the phoenix import since we are using the coming soon placeholder

function ProjectCard({ title, description, techArray, link, image, comingSoon }) {
  // Dynamically choose the wrapper element. If it's coming soon, it's a static div. 
  // If it's active, the entire card becomes a clickable anchor tag.
  const CardWrapper = comingSoon ? 'div' : 'a';
  const wrapperProps = comingSoon ? {} : { href: link, target: "_blank", rel: "noopener noreferrer" };

  return (
    <CardWrapper 
      {...wrapperProps}
      // Added transform and shadow utilities for the hover animation
      className={`bg-[#0a0a0a] border border-gray-800 rounded-2xl p-4 md:p-5 flex flex-col group transition-all duration-300 ${
        comingSoon 
          ? 'hover:border-gray-700 cursor-default' 
          : 'hover:border-gray-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-900/20 cursor-pointer'
      }`}
    >
      
      {/* Project Image / Coming Soon Placeholder */}
      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800/50 relative">
        {comingSoon ? (
          <div className="absolute inset-0 flex items-center justify-center font-mono text-xs p-4 text-center">
            <span className="text-gray-600 bg-gray-950 px-3 py-1.5 rounded-full border border-gray-800 backdrop-blur-sm">
              <span className="text-green-500 mr-1.5">&gt;</span><span className="text-white">coming soon</span>
            </span>
          </div>
        ) : (
          // Added a slight scale zoom on hover for active projects
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        )}
      </div>

      {/* Title & Description */}
      <h3 className="text-lg md:text-xl font-bold font-mono text-gray-200 mb-3 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-400 font-mono leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      {/* Footer: Tech Stack Badges & Link */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/50">
        
        {/* Overlapping Tech Icons */}
        <div className="flex -space-x-2">
          {techArray.map((tech, i) => (
            <div 
              key={i} 
              className="w-7 h-7 rounded-full bg-black border border-gray-700 flex items-center justify-center text-[9px] font-mono text-gray-300 z-10 hover:z-20 hover:scale-110 transition-transform bg-opacity-80 backdrop-blur-sm"
              title={tech}
            >
              {tech.substring(0, 2).toUpperCase()}
            </div>
          ))}
        </div>
        
        {/* Check Site Link - Changed from <a> to <span> to prevent invalid nested links */}
        {comingSoon ? (
          <span className="flex items-center gap-1.5 text-sm font-mono text-gray-500">
            Coming Soon...
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-sm font-mono text-gray-400 group-hover:text-green-400 transition-colors">
            Check Project <FiArrowUpRight className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        )}
      </div>
      
    </CardWrapper>
  );
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "BASF: Approximating Competitor Market Share",
      techArray: ["Azure", "R", "Python"],
      image: basfPhoto, 
      description: "Cleaned and segmented agricultural data across 34 U.S. states. Processed internal databases utilizing Azure Databricks, and applied a Naive Bayes Classifier achieving a 76% accuracy score in predicting market share likelihood.",
      link: "https://datamine.purdue.edu/posters/TDM_Symposium2024_Poster_BASF_ApproximatingCompetitorMarketShare.pdf" 
    },
    {
      id: 2,
      title: "Interactive Chatbot",
      techArray: ["React", "Gemini API"],
      image: chatbotUi, 
      description: "Built and deployed an interactive chatbot leveraging the Gemini API for natural language processing",
      link: "https://gunhopark.vercel.app/"
    },
    {
      id: 3,
      title: "Phoenix Business Computing",
      techArray: ["SQL", "Python"],
      image: null, 
      comingSoon: true,
      description: "Analyzed real-world datasets and developed analytical models using SQL to extract meaningful business insights.",
      link: "#"
    },
  ];

  return (
    <div className="animate-fade-in text-gray-200 mt-8 mb-24 w-full max-w-none mx-auto px-4 md:px-10">
      
      {/* The Monospace Header */}
      <header className="mb-16">
        <h2 className="text-3xl md:text-5xl font-mono font-bold text-white tracking-tight">
          A small selection of <span className="text-green-500">projects</span>
        </h2>
      </header>

      {/* The 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            techArray={project.techArray}
            image={project.image}
            link={project.link}
            comingSoon={project.comingSoon}
          />
        ))}
      </div>

    </div>
  );
}