/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chandra Sekhar V",
  title: "Hi all, I'm Chandra Sekhar V",
  subTitle: emoji(
    "Software Engineer | Backend + Full Stack based in United States. Experienced in building scalable backend and full stack solutions with Node.js, Django, React.js, PostgreSQL, Docker, Kubernetes, AWS, Terraform, and System Design."
  ),
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/chandu55526",
  linkedin: "https://www.linkedin.com/in/chandrasekhar3/",
  gmail: "chandrasekhar214@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Experienced Backend & Full Stack Engineer skilled in modern cloud and web technologies.",
  skills: [
    emoji("⚡ Build scalable backend systems with Node.js, Django, PostgreSQL"),
    emoji("⚡ Develop full stack apps using React.js, Flask, Django, Node.js"),
    emoji("⚡ Deploy and manage infrastructure with Docker, Kubernetes, AWS, Terraform"),
    emoji("⚡ System design and architecture for high-availability applications")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Django", fontAwesomeClassname: "fab fa-python" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Terraform", fontAwesomeClassname: "fas fa-cogs" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      logo: require("./assets/images/unt-logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 – May 2024",
      desc: "Concentrations: Artificial Intelligence, Machine Learning, Cloud Computing",
      grade: "GPA: 3.54/4.00, Dean's List",
      descBullets: [
        "Relevant Coursework: Distributed Systems, Cloud Computing, Machine Learning Foundations, System Design",
        "Taught Data Structures & Algorithms as a Teaching Assistant",
        "Mentored 100+ students in Python/Java algorithm optimization and debugging workshops"
      ]
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
  display: true,
  experiences: [
    {
      role: "Software Engineer",
      company: "Cortracker Inc",
      companylogo: "",
      date: "June 2022 – Present",
      desc: "Engineered Node.js/TypeScript microservices on AWS (Lambda, SQS, DynamoDB) for 500K+ tx/day driving finance alerts",
      descBullets: [
        "Implemented CloudWatch and IAM-secured JWT flows, cutting security violations and boosting alert responsiveness by 40%",
        "Streamlined IaC pipelines using Terraform and GitHub Actions, reducing downtime and increasing deployment velocity by 70%",
        "Architected MDM pipelines with schema evolution, accelerating audit reporting and enabling cross-team data reuse",
        "Mentored 4 developers on CI/debugging, improving QA pass rates and enhancing sprint reliability across teams"
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "Cortracker Inc",
      companylogo: "",
      date: "May 2022 – August 2022",
      desc: "Designed Django/PostgreSQL dashboards enabling analysts to reduce report time by 60% for executive decision cycles",
      descBullets: [
        "Optimized SQL indexes to reduce dashboard latency from 9s to <2s under live production queries",
        "Stress-tested backend readiness via C++ load simulators and Dockerized CI for quarterly finance report loads",
        "Secured endpoints with JWT and expanded Postman/Pytest test coverage to 85% across finance reporting APIs"
      ]
    }
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
  title: "Projects",
  subtitle: "Some of my featured work.",
  projects: [
    {
      image: "",
      projectName: "ShadowHawk",
      projectDesc: "Browser threat detection using ML + Spring Boot (2023)",
      footerLink: [
        { name: "GitHub", url: "https://github.com/yourusername/shadowhawk" }
      ]
    },
    {
      image: "",
      projectName: "SkyTrace",
      projectDesc: "Real-time flight tracking using Flask, React, AWS (2022)",
      footerLink: [
        { name: "GitHub", url: "https://github.com/yourusername/skytrace" }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements and Certifications",
  subtitle: "Highlights from academia and industry-recognized certifications",

  achievementsCards: [
    {
      title: "Teaching Assistant – University of North Texas",
      subtitle: "Mentored 100+ students in Java, Python, and DSA; led inclusive workshops in debugging and system design (2022-2024).",
      image: require("./assets/images/unt-logo.png"),
      footerLink: [
        {
          name: "University Website",
          url: "https://www.unt.edu"
        }
      ]
    },
    {
      title: "AWS Certified Developer – Associate",
      subtitle: "Earned in-depth certification for designing and deploying secure, scalable applications using AWS services (2023).",
      image: require("./assets/images/aws-logo.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/badges/037b5209-9a9b-48df-bfb9-3c619aa75b1b/public_url"
        }
      ]
    }
  ],
  display: true
};

// Projects Section
const projectsSection = {
  title: "Projects",
  subtitle: "High-level architecture of scalable systems I've built and deployed.",
  projects: [
    {
      image: require("./assets/images/shadowHawk.png"),
      projectName: "ShadowHawk: Real-Time Browser Threat Detection",
      projectDesc: "Modular microservices with Spring Boot, Kafka, and ML classification — optimized for sub-200ms alerts (2023).",
      footerLinks: [
        {
          name: "View Design",
          url: "./assets/images/ShadowHawk Architecture .png"
        },
        {
          name: "View Code",
          url: "https://github.com/chandu55526/ShadowHawk"
        }
      ]
    },
    {
      image: require("./assets/images/skytrace.png"),
      projectName: "SkyTrace: Real-Time Flight Tracking",
      projectDesc: "Cloud-based event pipeline with React, Flask, and AWS — processes 20K+ location events/sec (2022).",
      footerLinks: [
        {
          name: "View Design",
          url: "https://github.com/chandu55526/SkyTrace/blob/main/docs/system-architecture.png"
        },
        {
          name: "View Code",
          url: "https://github.com/chandu55526/SkyTrace"
        }
      ]
    }
  ],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's connect! Email me for opportunities or collaboration.",
  number: "",
  email_address: "chandrasekhar214@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

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
  projectsSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

