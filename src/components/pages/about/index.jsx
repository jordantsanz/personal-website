import Card from './components';
import { aboutEducationCard, aboutCurrentJobCard, aboutPastExperiencesCard,
} from '../../../lib/strings';
import './about.scss';
import PageTitle from '../../common/pageTitle';

function About() {
  return (
    <>
    <PageTitle id="about" title="At a glance" caption="Mouse over a card to see more!"/>
      <div className="about-cards">
        <Card cardInfo={aboutEducationCard} />
        <Card cardInfo={aboutCurrentJobCard} />
        <Card cardInfo={aboutPastExperiencesCard} />
      </div>
    </>
  );
}

export default About;
