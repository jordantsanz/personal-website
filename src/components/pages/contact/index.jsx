import './contact.scss';
import Copyright from './components/copyright';
import PageTitle from '../../common/pageTitle';
import mail from '../../../assets/mail.png';
import github from '../../../assets/github.png';
import linkedin from '../../../assets/linkedin.png';
import NextArrow from '../../common/nextarrow';

function Contact() {
  return (
    <>
    <PageTitle title="Get in touch"/>
      <div className="contact-middle">
          <div className="contact-container" id="email">
              <a href="mailto:jordan.t.sanz.22@dartmouth.edu" className="contact-link">
                  <img className="social" id="email" src={mail} />
              </a>
          </div>
          <div className="contact-container" id="github">
              <a href="https://github.com/jordantsanz" className="contact-link">
                  <img className="social" id="linkedin-image" src={github} />
              </a>
          </div>
          <div className="contact-container" id="linkedin">
              <a href="https://www.linkedin.com/in/jordansanz/" className="contact-link">
                  <img className="social" id="linkedin-image" src={linkedin} />
              </a>
          </div>
      </div>
      <div className='contact-submiddle'>
      <p>I&apos;m always excited to hear about unique opportunities</p>
      <p>and would love to connect.</p>
        <p>Let&apos;s chat!</p>
      </div>
      <NextArrow back/>
      <Copyright />
    </>
  );
}

export default Contact;
