import dartmouth from '../assets/dartmouth.svg';
import esri from '../assets/esri.svg';
import visa from '../assets/visa.svg';
import quiz from '../assets/quiz.gif';
import matrix from '../assets/matrix.jpg';
import lasagna from '../assets/lasagnaLove.png';
import gmcw from '../assets/gmcw.png';
import volleyball from '../assets/vball.png';

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
  title: 'Current employment',
  cardType: 'job',
  frontBody: {
    year: '2022-Present',
    title: 'Esri',
    img: esri,
  },
  backBody: {
    title: 'Accomplishments',
    bullets: [
      {
        bolded: "Scrum Master ",
        text: "for my thread, leading an Agile environment and resulting in consecutive passing sprints immediately."
      },
      {
        bolded: "DevSummit 2023: ",
        text: "Presenter of “Deep Customization of Sites” at annual developer-focused conference "
      },
      {
        bolded: "Worked directly with the CTO ",
        text: "on AI prototypes, helping to lead the company in AI"
      }
    ]
  },
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
  backBody: {
    title: 'Achievements',
    bullets: [
      {
        bolded: "Developed notification system ",
        text: "for high-impact case management platform."
      },
      {
        bolded: "Architected, planned, and implemented ",
        text: "the entire project, developing 17 notification use cases and implemented the UI, REST API, and SQL database within an agile environment"
      },
      {
        bolded: "Built React.js web application  ",
        text: "that helps users monetize their own data, constructing queries with GraphQL"
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