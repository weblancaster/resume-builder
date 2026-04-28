export type Resume = {
  name: string;
  title: string;
  phone: string;
  email: string;
  website: string;
  location: string;
  experiences: {
    title: string;
    company: string;
    companyUrl: string;
    period: string;
    description: string;
  }[];
  education: {
    degree: string;
    school: string;
    period: string;
    description: string;
  }[];
  skills: {
    proficient: string[];
    familiar: string[];
  };
  oss: string[];
  talks: string[];
  hobbies: string[];
};

export const defaultResume: Resume = {
  name: "Michael Lancaster",
  title: "Lead & Architect Frontend Software Engineer",
  phone: "872 237 7265",
  email: "michaell.llancaster@gmail.com",
  website: "https://bymichaellancaster.com",
  location: "",
  experiences: [
    {
      title: "Staff Software Engineer",
      company: "Mission Lane",
      companyUrl: "https://www.missionlane.com",
      period: "12/2022 - present",
      description:
        "Started by optimizing the credit card application implementing SSR/ISR, Above-the-Fold, Lazy Loading, and Fonts & Images Optimization. Currently working on the Card Dashboard for Web and React-Native. Working on new and old features, improved code quality with simpler patterns, built tools for better testing and dogfooding feats. Part of the Mission Lane AI committee I was able to teach and push the use of AI tools for productivity, added AI automation to CI workflows. Tech: Next.js, React-Query, GraphQL, React-Native/Expo, TypeScript, MSW, Jest, React Testing Lib, Playwright, Cloudflare, GHA, Git, Vertex AI, Github Copilot (automation tools).",
    },
    {
      title: "Senior Software Engineer",
      company: "Endpoint",
      companyUrl: "https://www.endpoint.com",
      period: "02/2021 - 11/2022",
      description:
        "Led a new product development by architecting and implementing 1 micro FE and 3 web apps. Boosted product quality and developer efficiency by introducing a mono repo, linting, unit tests, Cypress, and CI/CD. Managed tasks creation and allocation while mentoring FE devs on complex work. Tech: NX.dev, Next.js, React-Query, TypeScript, Express.js, Jest, React Testing Lib, Cypress, JSON Server, Docker, Git.",
    },
    {
      title: "Founder",
      company: "Padaone, Inc",
      companyUrl: "",
      period: "08/2020 - 02/2021",
      description:
        "Built an online marketplace for personal trainers, featuring payments, recorded classes, and live scheduling with Next.js (web), React-Native (iOS), and Go (REST API). Tech: Go (Gin-Gonic), GCP, Firebase, DigitalOcean, Node.js/Express, Next.js, Redux, Sagas, MUI, React-Native, Git, Twilio Video, Stripe Connect.",
    },
    {
      title:
        "Staff Frontend Engineer > Engineer Manager > Senior Architect, Frontend",
      company: "BlackBerry",
      companyUrl: "https://www.blackberry.com",
      period: "09/2018 - 08/2020",
      description:
        "Managed 13 FE devs and led the migration from a legacy frontend to a React/Redux micro FE architecture with NX.dev. Increased code quality by enforcing TypeScript and rigorous testing with Jest/Cypress. Improved developer productivity by replacing an in-house component library with an open-source alternative, customized with our company theme brand. Tech: React, Redux, Redux-Sagas, React Router, TypeScript, MUI, Storybook, NX.dev, Webpack, Node.js/Express, Jest, Cypress, Jenkins, Docker, AWS.",
    },
  ],
  education: [
    {
      degree: "Associate degree in Information Technology",
      school: "Divino Salvador (Brazil)",
      period: "2008 – 2010",
      description:
        "Web Development (ASP - JS - CSS - HTML), Databases (SQL), Software Development (VB6 - Delphi - Clipper), Computer Graphics (PS - FW - CD - AutoCad), Marketing Strategy, Network, and more.",
    },
  ],
  skills: {
    proficient: [
      "Javascript/Typescript",
      "React",
      "React-Native/Expo",
      "Next.js",
      "Webpack",
      "Jest",
      "Redux/Redux-Saga",
      "React-Router",
      "MUI",
      "Node.js/Express.js",
      "Docker",
      "Git",
      "REST APIs",
      "Cypress",
      "Playwright",
      "Nx.dev",
      "GCP",
    ],
    familiar: [
      "GraphQL",
      "Python/Flask",
      "Jenkins",
      "Github Actions",
      "Postgres",
      "AWS",
      "Digital Ocean",
      "Data Structures & Algorithms",
    ],
  },
  oss: ["Soundnode App (creator)", "Rome tools", "NX.dev"],
  talks: [
    "Intro to Docker at FrontInBH, Brazil 2017",
    "Soundnode App at Hamburg, Germany JS meetup 2017",
    "NW.js (former node-webkit) at ChicagoWebConf 2015",
    "Intro to React at Chicago HTML5 meetup (2015)",
  ],
  hobbies: ["Brazilian Jiu-Jitsu (Black-Belt)"],
};
