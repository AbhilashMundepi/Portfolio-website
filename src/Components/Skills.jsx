import "../Styles/Skills.css";

const technicalSkills = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "React", level: "Intermediate" },
      { name: "Redux", level: "Intermediate" },
      { name: "Bootstrap", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Intermediate" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "Mongoose", level: "Intermediate" },
    ],
  },
  {
    category: "Data Science",
    skills: [
      { name: "Scikit-learn", level: "Intermediate" },
      { name: "Numpy", level: "Intermediate" },
      { name: "Pandas", level: "Intermediate" },
      { name: "Streamlit", level: "Intermediate" },
    ],
  },
  {
    category: "Tools/Software",
    skills: [
      { name: "Vite", level: "Intermediate" },
      { name: "Git", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Postman", level: "Intermediate" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
    ],
  },
];

const Skills = () => {
  

  return (
    <div className="skills-container">
      <h2>Technical Skills</h2>
      {technicalSkills.map((category, index) => (
        <div key={index} className="skill-category">
          
          <h3>{category.category}</h3>
          <ul>
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>
                
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      
    </div>
  );
};

export default Skills;


