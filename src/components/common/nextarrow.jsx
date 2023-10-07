import './nextarrow.scss';

function NextArrow(props) {
  const { back = false } = props;
  return (
    <div className="next-arrow-container">
      <button className={`next-arrow-button ${back ? 'back' : ''}`} type='button'>{back ? "Back to top" : "Next"}</button>
    </div>
  );
}

export default NextArrow;
