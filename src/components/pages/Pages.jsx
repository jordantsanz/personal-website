import './pages.scss';

function Page({ ComponentName }) {
  return (
    <div className="page">
      <div className='page-container'>
        {ComponentName}
      </div>
    </div>
  );
}

export default Page;
