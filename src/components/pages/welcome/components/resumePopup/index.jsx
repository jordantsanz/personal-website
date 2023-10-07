import resume from '../../../../../assets/resume.pdf';
function ResumePopup() {
  return (
    <div className="welcome-resume">
      <div>      
        <h4 className="welcome-resume_title">Impatient?</h4>
        <p>Grab the resume here:</p> 
      </div>
      <a href={resume} download="Sanz, Jordan - Resume" target="_blank" rel="noreferrer" >
        <button className="welcome-resume_button">Download</button>
      </a>
    </div>
  );
}

export default ResumePopup;
