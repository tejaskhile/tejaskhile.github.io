import "../styles/Skills.css";

const skillset = [
  "React",
    "Next.js",
    "JavaScript",
    "React Native",
    "Expo",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "C++",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Git",
    "GitHub",
    "Postman",
];

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills That Define Me</h2>
      <div className="skill-card">
        {skillset.map((skill, index) => (
          <h3 key={index} className="skill">
            {skill}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Skills;
