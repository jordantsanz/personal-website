import MainTitle from './components/titles/MainTitle';
import SubTitle from './components/titles/SubTitle';
import ResumePopup from './components/resumePopup';

import './welcome.scss';

function Welcome() {
  return (
    <>
      <div className="welcome-middle">
        <MainTitle />
        <SubTitle />
      </div>
      <div className="welcome-bottom">
        <ResumePopup />
      </div>
    </>
  );
}

export default Welcome;
