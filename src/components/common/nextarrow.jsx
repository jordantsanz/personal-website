import './nextarrow.scss';

function NextArrow(props) {
  const { back = false } = props;

  const handleBackToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div className="next-arrow-container">
      <button onClick={handleBackToTop} className={`next-arrow-button ${back ? 'back' : ''}`} type='button'>{back ? "Back to top" : "Next"}</button>
    </div>
  );
}

export default NextArrow;
