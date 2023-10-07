import stars from '../../assets/stars.mp4';
import './pages.scss';

function Page({ ComponentName }) {
  return (
    <div className="page">
      <video autoPlay muted loop>
        <source src={stars} type="video/mp4" />
      </video>
      <div className='page-container'>
        {ComponentName}
      </div>
    </div>
  );
}

export default Page;
