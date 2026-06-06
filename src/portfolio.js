/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vishal Nishad",
  title: "Hi, I'm Vishal",
  subTitle: emoji(
    "A passionate Backend Engineer 🚀 currently working at Quicket Solutions, contributing to the digitization of US government ecosystems including law enforcement, judiciary systems, court workflows, and citation payment platforms by building scalable cloud-native solutions using Python, JavaScript, AWS serverless technologies, and distributed event-driven microservices architectures."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/",
  medium: "https://medium.com/",
  stackoverflow: "https://stackoverflow.com/users/10422806/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technologies I Work With",
  subTitle:
  "Backend Engineer focused on scalable cloud-native platforms, distributed systems, and event-driven microservices.",

  skills: [
  emoji(
  "Programming Languages: Python, SQL, JavaScript, Java, HTML, CSS"
  ),

  emoji(
    "Frameworks: FastAPI, Web2Py (MVC), Django, React.js, Pytest, Unittest, Pandas, NumPy"
  ),

  emoji(
    "Databases: MySQL, PostgreSQL, MongoDB"
  ),

  emoji(
    "Tools & Technologies: AWS (EC2, ECS, Lambda, S3, SNS, SQS, CloudWatch), Git, Docker"
  ),

  emoji(
    "Core Skills: REST APIs, OOP, SOLID Principles, Design Patterns, Agile Development"
  )

  ],

  softwareSkills: [],

  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
  {
  schoolName: "Gurugram University",
  logo: require("./assets/images/gurugram_university.jpg"),
  subHeader:
  "B.Tech in Computer Science and Engineering (Specialization: Artificial Intelligence)",
  duration: "July 2020 - June 2024",
  desc: "CGPA: 7.8"
  },

  {
    schoolName: "Jiwan Jyoti Public School",
    logo: require("./assets/images/jiwan_jyoti.jpg"),
    subHeader: "Senior Secondary Education",
    // duration: "2019",
    desc: "CGPA: 8.6"
  }

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Quicket Solutions",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "May 2025 – Present",
      desc: "Working as a Backend Engineer, contributing to the digitization of U.S. government ecosystems-including law enforcement, judiciary systems, court workflows, and citation payment platforms-by building scalable cloud-native solutions using Python, JavaScript, AWS serverless technologies, and distributed event-driven microservices architectures.",
      descBulletsTitle: "Some impactful work I have done:",
      descBullets: [
        "Resolved critical 502 gateway failures and Web2Py throughput bottlenecks in the Crash Reporting module by offloading crash image processing, XML/PDF generation, and JSON schema validation to AWS Lambda, and migrating file workflows to AWS S3 using signed and pre-signed POST URLs - improving response reliability and reducing processing errors by ~99.9%. ",
        "Built a centralized composite-based JSON validation framework inspired by Pydantic, replacing large if-else validation chains and cutting validation-related bugs while improving scalability and long-term maintainability.",
        "Architected and developed a new range-batch based ticket leasing system, eliminating duplicate ticket allocation, resolving race conditions, and fully automating yearly ticket rollover workflows with zero manual operational effort.",
        "Stabilized the legacy ticket leasing platform by implementing idempotency for ticket reconciliation in offline/mobile sync scenarios to prevent stale ticket reuse and duplicate allocations across distributed devices; introduced retry mechanisms, MySQL GET_LOCK concurrency controls, and proactive monitoring via CloudWatch and Slack integrations to detect ticket pool exhaustion.",
        "Designed and implemented a configurable rule-engine platform using contract-driven JSON schemas to standardize citation and court-hearing workflows across .NET and Android applications for multi-county clients; also built TDD-based rule validation, automated test suites, and internal QA/dev tools for managing rules, metadata, and testing new builds safely and efficiently.",
        "Worked on a FastAPI-based US courts ticket payment platform and external service integrations including LEADER Tracker and Spillman, using event-driven AWS microservices built with SNS, SQS, DLQ, and Lambda.",
        "Automated population of 350+ crash-report fields across 15+ real-world accident scenarios for Crash client IDOT certification, cutting manual data entry time by ~95% and significantly reducing manual effort for support and onboarding teams."
      ]
    },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Project One",
      projectDesc:
        "Built scalable backend systems and workflows for high-volume platform operations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Project Two",
      projectDesc:
        "Worked on distributed services, APIs, and cloud-native platform integrations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
