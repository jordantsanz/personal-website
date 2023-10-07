import './projects.scss';
import PageTitle from '../../common/pageTitle';
import Project from './components/Project';
import { EcotechProject, GiftnProject, PublicationProject, QuizProject, SmartvoteProject, WarblerProject } from '../../../lib/strings';

function Projects() {
  return (
    <div className='projects-page'>
    <PageTitle title="Projects & publications" />
      <div className="projects-middle">
        <div className='projects-featured'>
          <Project 
          featured 
          {...PublicationProject}
          />
        </div>
        <div className='projects-other'>
          <Project 
          {...WarblerProject}
          />
          <Project 
          {...SmartvoteProject} />
          <Project
          {...EcotechProject} />
          <Project 
          {...GiftnProject} />
          <Project 
          {...QuizProject} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
