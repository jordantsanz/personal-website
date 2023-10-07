const SkillsTitle = ({title, subtitle}) => {
    return (
        <div className="skills_title-container">
            <div className='skills_title'>
                <h2>{title}</h2>
            </div>
            <p className="skills_subtitle">{subtitle}</p>
        </div>
    )
}

export default SkillsTitle;