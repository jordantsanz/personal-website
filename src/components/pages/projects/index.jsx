import './projects.scss';
import PageTitle from '../../common/pageTitle';
import Project from './components/Project';
import { EcotechProject, GiftnProject, PublicationProject, QuizProject, SmartvoteProject, WarblerProject } from '../../../lib/strings';
import { useRef } from 'react';

function Projects() {
  const publicationProjRef = useRef();
  const warblerProjRef = useRef();
  const smartvoteProjRef = useRef();  
  const ecotechProjRef = useRef();
  const giftnProjRef = useRef();
  const quizProjRef = useRef();
  const refs = [ publicationProjRef, warblerProjRef, smartvoteProjRef, ecotechProjRef, giftnProjRef, quizProjRef, quizProjRef ];

  return (
    <div className='projects-page'>
    <PageTitle id="projects" title="Publications & projects" />
      <div className="projects-middle">
        <div className='projects-featured'>
          <Project 
          featured 
          {...PublicationProject}
          refCallback={publicationProjRef}
          refs={refs}
          />
        </div>
        <div className='projects-other'>
          <Project 
          {...WarblerProject}
          refCallback={warblerProjRef}
          refs={refs}
          />
          <Project 
          refCallback={smartvoteProjRef}
          refs={refs}
          {...SmartvoteProject} />
          <Project
          refCallback={ecotechProjRef}
          refs={refs}
          {...EcotechProject} />
          <Project 
          refCallback={giftnProjRef}
          refs={refs}
          {...GiftnProject} />
          <Project 
          refCallback={quizProjRef}
          refs={refs}
          {...QuizProject} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
