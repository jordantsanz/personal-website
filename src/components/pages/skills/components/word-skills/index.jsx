import SkillsTitle from '../skillsTitle';
import WordSkill from './word-skill';

function WordSkills() {
  return (
    <div className="word-skills">
      <div className='word-skills-section'>
        <SkillsTitle title="Skills" subtitle="Non-tool tools of the trade"/>
        <div className="word-skills_main">
          <WordSkill title="Full-stack Web Development" subtitle="Component & Server Architecture, Jest/Jasmine Testing" size="big" />
          <WordSkill title="Web Components" subtitle="Shadow DOM, Stencil.js" size="big" />
          <WordSkill title="Artificial Intelligence" subtitle="LangChain, Prompt Engineering" size="big" />
          <WordSkill title="Machine Learning" subtitle="TensorFlow, PyTorch" size="big" />
          <WordSkill title="Agile Framework" subtitle="Scrum Master" size="big" />
          <WordSkill title="AR/VR/MR Development" subtitle="Unity" size="big" />
          <WordSkill title="Mobile App Development" subtitle="React Native, Android Studio" size="big" />
        </div>
      </div>
    </div>
  );
}

export default WordSkills;
