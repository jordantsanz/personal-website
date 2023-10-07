import dartmouth from '../assets/dartmouth.svg';
import esri from '../assets/esri.svg';
import visa from '../assets/visa.svg';
import quiz from '../assets/quiz.gif';
import matrix from '../assets/matrix.jpg';

export const navbarTitles = {
  WELCOME: 'Jordan Sanz',
  ABOUT: 'About',
  SKILLS: 'Skills',
  PROJECTS: 'Projects',
  CONTACT: 'Fun & Contact',
};
export const aboutEducationCard = {
  title: 'Education',
  cardType: 'education',
  frontBody: {
    year: '2018-2022',
    title: 'Dartmouth College',
    img: dartmouth,
  },
  backBody: 'Computer Science Majors',
  img: 'sdf',
};

export const aboutCurrentJobCard = {
  title: 'Current employment',
  cardType: 'job',
  frontBody: {
    year: '2022-Present',
    title: 'Esri',
    img: esri,
  },
  backBody: 'Software Developer',
  img: 'sdf',
};

export const aboutPastExperiencesCard = {
  title: 'Past work experiences',
  cardType: 'experiences',
  frontBody: {
    year: '2020-2021',
    title: 'Visa and UBDI',
    img: visa,
  },
  backBody: 'Software Developer',
  img: 'sldkf',
};

export const PublicationProject = {
  id: "Publication",
  title: "From measures to action:",
  subtitle: "can integrating quality measures provide system-wide insights for quality improvement decision making?",
  notes: "Published in BMJ Health and Care Informatics, June 30, 2023.",
  image: matrix,
  link: "https://informatics.bmj.com/content/30/1/e100792",
}

export const WarblerProject = {
  id: "Warbler",
  title: "Warbler (previously Aptitune)",
  subtitle: "Music education web application",
  notes: "Personal nonprofit project to help teachers during COVID-19",
  image: "https://media.giphy.com/media/LT6SBHsF0i8gVzg95A/giphy.gif",
}


export const SmartvoteProject = {
  id: "SmartVote",
  title: "SmartVote",
  subtitle: "Value-based voting tool",
  notes: "Best Overall, IBM API prize @ IvyHacks Ivy League Hackathon",
  image: "https://media.giphy.com/media/aeyc1AXS5IyPhGB8aA/giphy.gif?cid=790b76112a705df330c1e29f3155756ab3820a9e1188ab6f&rid=giphy.gif&ct=g",
  link: "https://github.com/jordantsanz/smartvote",
}

export const EcotechProject = {
  id: "EcoTech",
  title: "EcoConscious Tech",
  subtitle: "Web app tracking green website usage",
  notes: "2nd Best Environmental & Energy Hack, Wolfram Prize @ Duke University Hackathon",
  image: "https://media.giphy.com/media/y7TWJxqEC0kh9hKR5o/giphy.gif",
  link: "https://github.com/jordantsanz/ecoconscious-tech-web",
}

export const GiftnProject = {
  id: "Giftn",
  title: "Giftn",
  subtitle: "Simplifying COVID-19 holiday shopping",
  notes: "Best Overall, Best Financial Hack @ MLH Winter Hacklympics and HackUMass",
  image: "https://media.giphy.com/media/CvPTfXYihmSRJaGQIg/giphy.gif?cid=790b7611ad6f0203df85d1c823c8b22b2d0298f2bd13857e&rid=giphy.gif&ct=g",
  link: "https://github.com/jordantsanz/giftn-webapp",
}

export const QuizProject = {
  id: "Quiz",
  title: "Quiz website",
  subtitle: "Fun buzzfeed-esque quiz website",
  notes: "A personal favorite and early on in my CS journey",
  image: quiz,
  link: "https://dartmouth-cs52-20x.github.io/lab2-quizzical-jordantsanz/index.html",
}