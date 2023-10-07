import react from '../../../../../assets/react.svg';

function WordSkill({ title, subtitle, size }) {
  return (
    <div className="word-skill">
      <img src={react} className={`word-skill_bullet word-skill_bullet-${size}`} />
      <div className='word-skill-text'>
        <h3 className={`word-skill_title word-skill_title-${size}`}>{title}</h3>
        <p className={`word-skill_subtitle-${size}`}>{subtitle}</p>
      </div>
    </div>
  );
}

export default WordSkill;
