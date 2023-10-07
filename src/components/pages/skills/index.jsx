import WordSkills from './components/word-skills';
import TechSkills from './components/tech-skills';

import './skills.scss';
import PageTitle from '../../common/pageTitle';

function Skills() {
  return (
    <>
    <PageTitle title="Skills and technologies" />
    <div className="skills-page">
      <div className="skills-middle">
        <TechSkills />
        <WordSkills />
      </div>
    </div>
    </>
  );
}

export default Skills;
