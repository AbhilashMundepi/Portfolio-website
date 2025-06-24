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
