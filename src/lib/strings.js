import dartmouth from '../assets/dartmouth.svg';
import beli from '../assets/beliapp-logo.webp';
import esri from '../assets/esri.svg';
import quiz from '../assets/quiz.gif';
import matrix from '../assets/matrix.jpg';
import lasagna from '../assets/lasagnaLove.png';
import gmcw from '../assets/gmcw.png';
import volleyball from '../assets/vball.png';

import react from '../assets/react.svg';
import typescript from '../assets/typescript.svg';
import javascript from '../assets/javascript.svg';
import node from '../assets/nodejs-icon.svg';
import python from '../assets/python.svg';
import css from '../assets/css.svg';
import html from  '../assets/html.svg';
import angular from '../assets/angular.png';
import mongo from '../assets/mongodb.svg';
import java from '../assets/java.svg';
import gcp from '../assets/gcp.png';
import aws from '../assets/awsElastic.svg';
import azure from '../assets/azure.svg';

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
    headline: 'Undergraduate of Dartmouth College, 2022.',
    details: [
      { label: 'Majors', value: 'Computer Science and Quantitative Social Science' },
      { label: 'Awards', value: 'Cum Laude, High Honors in Quantitative Social Science' },
    ],
  },
  backBody: {
    title: 'Other experiences',
    bullets: [
      {
        bolded: "Thesis: ",
        text: "Improving music education with biofeedback-based cognitive tutoring. 2022",
      },
      {
        bolded: "Sigma Nu Fraternity: ",
        text: "President, Head of Honor Board, Recruitment Chair. 2019-2022",
      },
      {
        bolded: "Dartmouth Dodecs A Capella: ",
        text: "Business Manager, Beatboxer. 2018-2022"
      },
      {
        bolded: "Undergraduate Advisor",
        text: " for first-year students. 2019-2020"
      },
      {
        bolded: "Teaching Assistant ",
        text: "for multiple computer science undergraduate (and one computer science graduate) courses. 2019-2022"
      },
      {
        bolded: "RWIT Writing Assistant ",
        text: "for undergraduates, Head of Education and Outreach. 2019-2022"
      }
  ]
  },
  img: 'sdf',
};

export const aboutCurrentJobCard = {
  title: 'Most recently',
  cardType: 'job',
  frontBody: {
    year: '2025-2026',
    title: 'Beli',
    img: beli,
    headline: 'Software Engineer at Beli (3rd Employee/Engineer)',
    details: [
      { label: 'Role', value: 'Full Stack + Machine Learning' },
      { label: 'Press', value: 'Featured in NYT, WSJ, Forbes' },
    ],
  },
  backBody: {
    title: 'Accomplishments',
    bullets: [
      {
        bolded: "Architected a real-time recommendation engine ",
        text: "scoring 100k+ businesses per request with <1.5s latency using PySpark, Django, and Cloud Run"
      },
      {
        bolded: "Built a photo-quality scoring pipeline ",
        text: "processing 30k images/day using CLIP, EasyOCR, and computer vision heuristics"
      },
      {
        bolded: "Implemented push notification system ",
        text: "delivering millions of messages per week on optimized schedules via Cloud Tasks"
      }
    ]
  },
  img: 'sdf',
};

export const aboutPastExperiencesCard = {
  title: 'Past work experiences',
  cardType: 'experiences',
  frontBody: {
    year: '2020-2025',
    title: 'Esri and Visa',
    img: esri,
    headline: 'Software Engineer at Esri & Visa',
    details: [
      { label: 'Esri', value: 'Software Engineer, Scrum Master (2022-2024)' },
      { label: 'Visa', value: 'Software Engineer Intern (2021)' },
    ],
  },
  backBody: {
    title: 'Achievements',
    bullets: [
      {
        bolded: "Esri (2022-2025): ",
        text: "Scrum Master, DevSummit 2023 presenter, worked with CTO on AI prototypes"
      },
      {
        bolded: "Visa (2021): ",
        text: "Developed notification system for case management platform with 17 use cases"
      },
      {
        bolded: "UBDI (2020): ",
        text: "Built React.js web application with GraphQL to help users monetize their data"
      }
    ]
  },
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
  link: "https://warblermusic.com/",
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

export const LasagnaLove = {
  id: "LasagnaLove",
  url: lasagna,
  caption: "Lasagna Love",
  bolded: "Volunteer as a Software Engineer",
  description: "for Lasagna Love, an international organization delivering food to families in need",
  href: "https://lasagnalove.org/",
}

export const Singing = {
  id: "Sing",
  url: gmcw,
  caption: "GMCW",
  bolded: "Sing often and love it:",
  description: "I formerly participated in the Gay Men's Chorus of Washington, DC and was the beatboxer for Dartmouth Dodecaphonics A Cappella",
  href: "https://www.gmcw.org/",
}

export const BeachVolleyball = {
  id: "BeachVolleyball",
  url: volleyball,
  caption: "Having fun!",
  bolded: "Play beach volleyball",
  description: "with my friends on the National Mall -- I'm brushing up on my tennis skills, too!",
  href: "https://www.recreation.gov/",
}

export const reactSkill = {
  title: "React",
  image: react,
  href: "https://react.dev/"
}

export const typescriptSkill = {
  title: "TypeScript",
  image: typescript,
  href: "https://www.typescriptlang.org/"
}

export const javascriptSkill = {
  title: "JavaScript",
  image: javascript,
  href: "https://www.javascript.com/"
}

export const nodeSkill = {
  title: "Node.js",
  image: node,
  href: "https://nodejs.org/en"
}

export const pythonSkill = {
  title: "Python",
  image: python,
  href: "https://www.python.org/"
}

export const cssSkill = {
  title: "CSS",
  image: css,
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS"
}

export const htmlSkill = {
  title: "HTML",
  image: html,
  href: "https://developer.mozilla.org/en-US/docs/Web/HTML"
}

export const angularSkill = {
  title: "Angular",
  image: angular,
  href: "https://angular.io/"
}

export const mongoSkill = {
  title: "MongoDB",
  image: mongo,
  href: "https://www.mongodb.com/"
}

 export const javaSkill = {
    title: "Java",
    image: java,
    href: "https://www.java.com/en/"
 }

 export const gcpSkill = {
    title: "GCP",
    image: gcp,
    href: "https://cloud.google.com/"
 }

 export const awsSkill = {
    title: "AWS",
    image: aws,
    href: "https://aws.amazon.com/"
 }

 export const azureSkill = {
    title: "Microsoft Azure",
    image: azure,
    href: "https://azure.microsoft.com/"
 }