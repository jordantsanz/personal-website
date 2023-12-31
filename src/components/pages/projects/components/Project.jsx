function Project({ id, featured, title, subtitle, notes, image, link, refCallback, refs = [] }) {

  const getFeaturedText = () => {
    return (
      <div className='project-text-featured'>
        <h2><span>{title}</span> {subtitle}</h2>
        <p>{notes}</p>
      </div>
    )
  }

  const getRegularText = () => {
    return (
      <div className='project-text'>
        <h2>{title}</h2>
        <p className='project-subtitle'>{subtitle}</p>
        <p className='project-notes'>{notes}</p>
      </div>

    )
  }

  const handleMouseOver = () => {
    const colors = {
      'Warbler': { color: 'rgba(44, 21, 5, 0.97)', hover:'rgba(44, 21, 5, 0.85)' },
      'SmartVote': { color: 'rgba(44, 6, 5, 0.97)', hover:'rgba(44, 6, 5, 0.85)' },
      'EcoTech': { color: 'rgba(5, 44, 9, 0.97)', hover:'rgba(5, 44, 9, 0.85)' },
      'Giftn': { color: 'rgba(41, 5, 44, 0.97)', hover:'rgba(41, 5, 44, 0.85)' },
      'Quiz': { color: 'rgba(36, 44, 5, 0.97)', hover:'rgba(36, 44, 5, 0.85)' },
      'Publication': { color: 'rgba(5, 40, 44, 0.97)', hover:'rgba(5, 40, 44, 0.85)' },
    }[id];
    document.documentElement.style.setProperty('--accent-color', colors.color);
    document.documentElement.style.setProperty('--accent-hover-color', colors.hover);
    refs?.forEach((ref) => {
      if (ref?.current?.id && ref?.current?.id !== `project-${id}`) {
        ref.current.style.opacity = 0.25;
      }
    })
  }

  const handleMouseOut = () => {
    document.documentElement.style.setProperty('--accent-color', "rgba(5, 28, 44, 0.97)");
    document.documentElement.style.setProperty('--accent-hover-color', "rgba(5, 28, 44, 0.85)");

    refs?.forEach((ref) => {
      
      if (ref?.current?.id && ref?.current?.id !== `project-${id}`) {
        ref.current.style.opacity = 1;
      }
    })
  }
  
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div id={`project-${id}`} ref={refCallback} className="project-block" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div role="img" className='project-image' style={{backgroundImage: `url(${image})` }}/>
          {featured ? getFeaturedText() :  getRegularText()}
      </div>
    </a>

  );
}

export default Project;
