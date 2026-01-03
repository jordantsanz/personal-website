import Page from './components/pages/Pages';
import pageNames from './lib/components';
import NavBar from './components/common/navbar';
import stars from './assets/stars.mp4';

function App() {
  return (
    <div className='app'>
      <video className="global-video-bg" autoPlay muted loop playsInline preload="auto">
        <source src={stars} type="video/mp4" />
      </video>
      <NavBar/>
      <Page ComponentName={pageNames.WELCOME} />
      <Page ComponentName={pageNames.ABOUT} />
      <Page ComponentName={pageNames.SKILLS} />
      <Page ComponentName={pageNames.PROJECTS} />
      <Page ComponentName={pageNames.EXTRA} />
      <Page ComponentName={pageNames.CONTACT} />
    </div>
  );
}

export default App;
