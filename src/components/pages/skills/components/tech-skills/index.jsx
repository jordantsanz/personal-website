import SkillsTitle from '../skillsTitle';
import TechSkill from './tech-skill';

import react from '../../../../../assets/react.svg';
import typeScript from '../../../../../assets/typescript.svg';
import javaScript from '../../../../../assets/javascript.svg';
import node from '../../../../../assets/nodejs-icon.svg';
import python from '../../../../../assets/python.svg';
import css from '../../../../../assets/css.svg';
import html from '../../../../../assets/html.svg';
import express from '../../../../../assets/expressjs-icon.svg';
import mongodb from '../../../../../assets/mongodb.svg';
import java from '../../../../../assets/java.svg';
import csharp from '../../../../../assets/csharp.svg';
import awsElastic from '../../../../../assets/awsElastic.svg';
import azure from '../../../../../assets/azure.svg';

function TechSkills() {
  return (
    <div className="tech-skills">
      <SkillsTitle title="Technologies" subtitle="Languages, programs, and tools" />
      <div className="tech-skills_main">
        <TechSkill size="big" title="React" image={react} />
        <TechSkill size="big" title="TypeScript" image={typeScript} />
        <TechSkill size="big" title="JavaScript" image={javaScript} />
        <TechSkill size="big" title="Node.js" image={node} />
        <TechSkill size="big" title="Python" image={python} />
        <TechSkill size="big" title="CSS" image={css} />
        <TechSkill size="big" title="HTML" image={html} />
        <TechSkill size="big" title="Express.js" image={express} />
      </div>
      <div className="tech-skills_other">
        <TechSkill size="small" title="MongoDB" image={mongodb} />
        <TechSkill size="small" title="Java" image={java} />
        <TechSkill size="small" title="C#" image={csharp} />
        <TechSkill size="small" title="Amazon Web Services" image={awsElastic} />
        <TechSkill size="small" title="Microsoft Azure" image={azure} />
      </div>
    </div>
  );
}

export default TechSkills;
