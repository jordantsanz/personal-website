import SkillsTitle from '../skillsTitle';
import TechSkill from './tech-skill';

import { awsSkill, azureSkill, gcpSkill, cssSkill, angularSkill, htmlSkill, javaSkill, javascriptSkill, mongoSkill, nodeSkill, pythonSkill, reactSkill, typescriptSkill } from '../../../../../lib/strings';

function TechSkills() {
  return (
    <div className="tech-skills">
      <SkillsTitle title="Technologies" subtitle="Languages, programs, and tools" />
      <div className="tech-skills_main">
        <TechSkill size="big" {...reactSkill} />
        <TechSkill size="big" {...typescriptSkill} />
        <TechSkill size="big" {...javascriptSkill} />
        <TechSkill size="big" {...nodeSkill} />
        <TechSkill size="big" {...pythonSkill} />
        <TechSkill size="big" {...cssSkill} />
        <TechSkill size="big" {...htmlSkill} />
        <TechSkill size="big" {...angularSkill} />
      </div>
      <div className="tech-skills_other">
        <TechSkill size="small" {...mongoSkill} />
        <TechSkill size="small" {...javaSkill} />
        <TechSkill size="small" {...gcpSkill} />
        <TechSkill size="small" {...awsSkill} />
        <TechSkill size="small" {...azureSkill} />
      </div>
    </div>
  );
}

export default TechSkills;
