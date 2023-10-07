import Page from './components/pages/Pages';
import pageNames from './lib/components';
import NavBar from './components/common/NavBar';
import './App.css';

function App() {
  return (
    <div className='app'>
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
