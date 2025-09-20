import '../Styles/Projects.css';

const projectData = [
  {
    title: "Wandurlust (A travel Website)",
    description:
      "A full-stack MERN application that allows users to book and host rental properties. Features user authentication, booking management, search filters, and image upload.",
    tech: ["MongoDB", "Express", "JavaScript", "Node.js", "Vanila CSS"],
    link: "https://wandurlust-demo.netlify.app",
    code: "https://github.com/AbhilashMundepi/travelwebsite"
  },
  {
    title: "Tool Wear Prediction System",
    description:
      "An AI/ML-based system developed using Python and Streamlit to predict tool wear in machining processes using simulation  datasets and  regression model.",
    tech: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
    link: "https://tool-wear-prediction-6hsgmccqumgwmc5bmqtesr.streamlit.app/",
    code: "https://github.com/AbhilashMundepi/tool-wear-prediction"
  },
  {
    title: "Gear Beam Strength Calculator",
    description:
      "A mechanical-engineering-based web tool to calculate gear beam strength and module, built using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://getgear.vercel.app/",
    code: "https://github.com/yourusername/gear-strength-calc"
  },
  {
    title: "Weather Forecast App",
    description:
      "A responsive React application that fetches real-time weather data from the OpenWeatherMap API. Users can search for current weather conditions by city name, with error handling and smooth UI design.",
    tech: ["React", "Vite", "MUI", "OpenWeatherMap API", "CSS"],
    link: "https://weatherapp-ten-silk.vercel.app/", 
    code: "https://github.com/AbhilashMundepi/weatherapp" 
  },
  {
  title: "Garhwali AI Agent",
  description:
    "An AI-powered RAG system that translates Hindi and English into Garhwali. Built using LangChain, Pinecone, and Gemini API for context-aware translations, with a React frontend for real-time interaction. Aimed at preserving regional language and improving accessibility.",
  tech: ["React", "JavaScript", "LangChain", "Pinecone", "Gemini API", "Vercel"],
  link: "https://garhwali-ai-agent-frontend.vercel.app/", 
  code: "https://github.com/AbhilashMundepi/Garhwali-AI-Agent-frontend" 
},
{
  title: "MechAI – AI Agent for Mechanical Engineers",
  description:
    "A domain-specific AI assistant designed for mechanical engineers. Uses RAG with LangChain, Pinecone, and Gemini API to deliver accurate, subject-focused answers and project guidance. Features a React-based frontend and deployed on Vercel for seamless web access.",
  tech: ["React", "JavaScript", "LangChain", "Pinecone", "Gemini API", "Vercel"],
  link: "https://mech-ai-frontend.vercel.app/", 
  code: "https://github.com/AbhilashMundepi/MechAI" 
}

];

export default function Projects() {
    
      

  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="description">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">🌐 Live</a>}
              {project.code && <a href={project.code} target="_blank" rel="noopener noreferrer">💻 Code</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
