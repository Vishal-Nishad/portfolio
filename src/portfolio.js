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
  github: "https://github.com/Vishal-Nishad",
  linkedin: "https://www.linkedin.com/in/vishalnishad80/",
  gmail: "vishalnishadnv@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/",
  // stackoverflow: "https://stackoverflow.com/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle:
  "Backend Engineer focused on scalable cloud-native platforms, distributed systems, and event-driven microservices.",

  skills: [
    {
      title: "Programming Languages",
      items: [
        {name: "Python", icon: "logos:python"},
        {name: "SQL", icon: "vscode-icons:file-type-sql"},
        {name: "JavaScript", icon: "logos:javascript"},
        {name: "Java", icon: "logos:java"},
        {name: "HTML", icon: "vscode-icons:file-type-html"},
        {name: "CSS", icon: "vscode-icons:file-type-css"}
      ]
    },
    {
      title: "Frameworks",
      items: [
        {name: "FastAPI", icon: "logos:fastapi-icon"},
        {name: "Web2Py", icon: "simple-icons:web2py"},
        {name: "Django", icon: "logos:django-icon"},
        {name: "React.js", icon: "logos:react"},
        {name: "Pytest", icon: "simple-icons:pytest"},
        {name: "Unittest", icon: "mdi:test-tube"},
        {name: "Pandas", icon: "simple-icons:pandas"},
        {name: "NumPy", icon: "simple-icons:numpy"}
      ]
    },
    {
      title: "Databases",
      items: [
        {name: "MySQL", icon: "logos:mysql"},
        {name: "PostgreSQL", icon: "logos:postgresql"},
        {name: "MongoDB", icon: "logos:mongodb-icon"}
      ]
    },
    {
      title: "Tools & Technologies",
      items: [
        {name: "AWS", icon: "logos:aws"},
        {name: "Git", icon: "logos:git-icon"},
        {name: "Docker", icon: "logos:docker-icon"},
        {name: "CloudWatch", icon: "simple-icons:amazoncloudwatch"},
        {name: "Lambda", icon: "simple-icons:awslambda"},
        {name: "S3", icon: "simple-icons:amazons3"},
        {name: "SNS", icon: "mdi:message-outline"},
        {name: "SQS", icon: "mdi:queue"},
        {name: "EC2", icon: "simple-icons:amazonec2"},
        {name: "ECS", icon: "simple-icons:amazonecs"}
      ]
    },
    {
      title: "Core Skills",
      items: [
        {name: "REST APIs", icon: "mdi:api"},
        {name: "OOP", icon: "mdi:language-java"},
        {name: "SOLID Principles", icon: "mdi:shape-outline"},
        {name: "Design Patterns", icon: "mdi:vector-arrange-above"},
        {name: "Agile Development", icon: "mdi:lightning-bolt-outline"}
      ]
    }
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
      companylogo: require("./assets/images/quicket_solutions.jpg"),
      bannerColor: "#007bff",
      date: "May 2025 – Present",
      desc: "Working as a Backend Engineer, contributing to the digitization of U.S. government ecosystems-including law enforcement, judiciary systems, court workflows, and citation payment platforms-by building scalable cloud-native solutions using Python, JavaScript, AWS serverless technologies, and distributed event-driven microservices architectures.",
      descBulletsTitle: "Below are some contributions I have made:",
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
  // title: "Big Projects",
  // subtitle: "PROJECTS I HAVE WORKED ON",

  title: "Projects",
  projects: [
    {
      image: require("./assets/images/styfinder_logo.png"),
      projectName: "StayFinder",
      projectDesc:
        "StayFinder is a production-oriented Airbnb-like booking platform built with a scalable monolith-first architecture using FastAPI and Docker, designed for future microservice extraction. The project focuses on real-world backend engineering concepts including secure authentication, geospatial search, async processing, caching, and distributed-system-ready architecture.",
      descBulletsTitle: "Key engineering concepts and implementations:",
      descBullets: [
        "Designed a monolith-first booking platform using FastAPI and Docker, applying 6+ LLD design patterns (Observer, Strategy, Factory) across modular services with Pydantic schemas and Alembic migrations, designed for microservice extraction.",
        "Implemented production-grade auth with RS256 JWT rotation, Argon2id hashing, and Redis-backed caching for rate limiting and session management; integrated MinIO-based file storage with pre-signed URLs mirroring AWS S3 behavior.",
        "Built geospatial property search using PostgreSQL + PostGIS with ST_DWithin radius queries via SQLAlchemy, enabling users to discover nearby listings within configurable distances."
      ],
      footerLink: [
        {
          name: "Github Repo",
          url: "https://drive.google.com/file/d/139CGZ842wtGDyWA5P6PSLOdsTwibN2YI/view?usp=drivesdk/"
        },
        {
          name: "Visit Website",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/movie_recommendation.webp"),
      projectName: "Movie Recommendation System",
      projectDesc:
        "Built a hybrid Movie Recommendation System using collaborative and content-based filtering techniques with cosine similarity scoring, trained on 10,000+ movies and 50,000+ user ratings using Scikit-learn, Pandas, and NumPy. Designed an end-to-end recommendation pipeline from data preprocessing and feature engineering to frontend integration, delivering personalized movie suggestions based on user preferences and content similarity.",
      descBulletsTitle: "Key engineering concepts and implementations:",
      descBullets: [
        "Built a hybrid movie recommendation engine using collaborative and content-based filtering with cosine similarity scoring, trained on 10,000 movies and 50,000 user ratings using Scikit-learn, Pandas, and NumPy.",
        "Designed end-to-end pipeline from data preprocessing to an HTML/CSS frontend, delivering personalized movie suggestions based on user viewing patterns and content similarity."
      ],
      footerLink: [
        {
          name: "Report Link",
          url: "https://drive.google.com/file/d/139CGZ842wtGDyWA5P6PSLOdsTwibN2YI/view?usp=drivesdk/"
        }
      ]
    },
    {
      image: require("./assets/images/Expense_tracker.png"),
      projectName: "Expense Management System",
      projectDesc:
        "Built a scalable 3-tier Expense Management System integrating FastAPI, React.js, and MySQL with RESTful APIs, implementing end-to-end full-stack workflows, authentication, CRUD operations, and modular backend architecture following OOP principles. Designed interactive analytics dashboards with graphical monthly and custom date-range expense insights for financial tracking and reporting.",
      descBulletsTitle: "Key engineering concepts and implementations:",
      descBullets: [
        "Built a 3-tier Expense Management System integrating FastAPI, React.js, and MySQL with REST API communication-demonstrating end-to-end full-stack development, CRUD operations  and OOPs Practice.",
        "Designed an analytics dashboard to visualize monthly and custom date-wise trends using graphs and charts."
      ],
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/Vishal-Nishad/Project--Expense_Management_System"
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
      title: "Runner-up at TechRace",
      subtitle:
        "Secured 2nd place in the Tech Race Coding Competition organized by Gurugram University, competing against 24 participating college teams.",
      image: require("./assets/images/gurugram_university.jpg"),
      imageAlt: "gurugram_university",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1GalvwbwnESoKh4gwokYXUwVlu37WEm4Z/view?pli=1"
        },
      ]
    },
    {
      title: "Python: Beginner to Advanced",
      subtitle:
        "Completed the “Python: Beginner to Advanced” course by CodeBasics, covering core Python programming, OOP concepts, data structures, and advanced problem-solving techniques.",
      image: require("./assets/images/code_basics.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://codebasics.io/certificate/CB-48-518044"
        }
      ]
    },

    {
      title: "DBMS & SQL Course ",
      subtitle: "Completed Scaler’s DBMS & SQL course, gaining hands-on experience in advanced SQL, relational database design, query optimization, indexing, and backend database engineering concepts.",
      image: require("./assets/images/scaler.png"),
      imageAlt: "scaler Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://moonshot.scaler.com/s/sl/aFyxPvQUId"
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
    "Discuss an opportunity, collaborate on a project, or just say Hi - my inbox is always open.",
  number: "+91-8076143667",
  email_address: "vishalnishadnv@gmail.com"
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
