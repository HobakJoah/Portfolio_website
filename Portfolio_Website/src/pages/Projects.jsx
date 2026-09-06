function ProjectItem({ title, description, tech, year, link }) {
  return (
    <a href={link || "#"} className="group block py-3 mb-4 cursor-pointer">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="text-base font-medium text-gray-200 group-hover:text-white group-hover:underline decoration-1 underline-offset-4 transition-colors">
          {title}
        </h3>
        <span className="text-sm text-gray-500 whitespace-nowrap ml-4 font-mono">
          {year}
        </span>
      </div>
      <p className="text-sm text-gray-400 leading-relaxed mb-2">
        {description}
      </p>
      {tech && (
        <p className="text-xs text-gray-600 font-mono">
          &gt; {tech}
        </p>
      )}
    </a>
  );
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "BASF: Purdue Data Mine",
      tech: "Azure DataBricks, R, Python",
      description: "Cleaned and segmented agricultural data across 34 U.S. states. Processed internal databases utilizing Azure Databricks, and applied a Naive Bayes Classifier achieving a 76% accuracy score in predicting market share likelihood.",
      year: "2023 - 2024",
    },
    {
      id: 2,
      title: "Phoenix Business Computing",
      tech: "SQL, Python",
      description: "Analyzed real-world datasets and developed analytical models using SQL to extract meaningful business insights.",
      year: "2021 - 2022",
    },
    {
      id: 3,
      title: "Interactive Chatbot",
      tech: "React.js, AWS, Gemini API",
      description: "Built and deployed an interactive chatbot leveraging the Gemini API for natural language processing and AWS for cloud infrastructure.",
      year: "2021 - 2022",
    }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-800 pb-2">
        Selected Work
      </h2>
      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectItem 
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            year={project.year}
          />
        ))}
      </div>
    </div>
  );
}