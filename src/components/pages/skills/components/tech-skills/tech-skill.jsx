import react from '../../../../../assets/react.svg';

function TechSkill({ href, title, image, size }) {
  const getUnderlineColor = () => {
    return {
      "React": "#61DAFB",
      "TypeScript": "#007ACC",
      "JavaScript": "#F7DF1E",
      "Node.js": "#339933",
      "Python": "#FFD43B",
      "CSS": "#1572B6",
      "HTML": "#E34F26",
      "Express.js": "#000000",
      "MongoDB": "#47A248",
      "Java": "#007396",
      "C#": "#A179DC",
      "Amazon Web Services": "#FF9900",
      "Microsoft Azure": "#0089D6",
    }[title] || "#A595AE";
  }

  const openLink = () => {
    window.open(href);
  }
  return (
      <div role="button" onClick={openLink} className="tech-skill">
        <img className={`tech-skill_image tech-skill-${size}`} src={image || react} />
        <h3 style={{"--underlineColor": getUnderlineColor()}} className={`tech-skill_title tech-skill-title-${size}`}>{title}</h3>
      </div>

  );
}

export default TechSkill;
