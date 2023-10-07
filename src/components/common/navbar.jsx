import './navbar.scss';

function NavBar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView();
  }
  return (
    <nav id="navbar">
      <h1 role="button" onClick={() => { scrollTo("navbar") }}>Jordan Sanz</h1>
      <h2 role="button" onClick={() => { scrollTo("about-page-title")}}>At a glance</h2>
      <h2 role="button" onClick={() => { scrollTo("skills-page-title")}}>Skills</h2>
      <h2 role="button" onClick={() => { scrollTo("projects-page-title")}}>Projects & Publications</h2>
      <h2 role="button" onClick={() => { scrollTo("extra-page-title")}}>A bit extra</h2>
      <h2 role="button" onClick={() => { scrollTo("contact-page-title")}}>Contact</h2>
    </nav>
  );
}

export default NavBar;
