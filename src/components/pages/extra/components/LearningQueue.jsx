import SkillsTitle from '../../skills/components/skillsTitle';
import WordSkill from '../../skills/components/word-skills/word-skill';
import '../../skills/skills.scss';

const LearningQueue = () => {
    return (
        <div className='word-skills-section'>
        <SkillsTitle title="Learning queue" subtitle="What I'm hoping to learn and improve on soon"/>
        <div className="word-skills_other">
            <WordSkill title="UI/UX Design" subtitle="I built this site in Figma first!" size="small" />
            <WordSkill title="Hardware" subtitle="Building side projects with a Rasperry Pi" size="small" />
            <WordSkill title="American Sign Language (ASL)" subtitle="Class every Monday!" size="small" />
        </div>
    </div>
    )
}

export default LearningQueue;