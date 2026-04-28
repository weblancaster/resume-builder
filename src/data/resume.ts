export type Resume = {
  name: string;
  title: string;
  phone: string;
  email: string;
  website: string;
  location: string;
  summary: string;
  experiences: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
  education: {
    degree: string;
    school: string;
    period: string;
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
  title: "Senior Software Engineer",
  phone: "(555) 123-4567",
  email: "michael@example.com",
  website: "weblancaster.com",
  location: "San Francisco, CA",
  summary: "Passionate software engineer with 10+ years of experience building scalable web applications and leading engineering teams.",
  experiences: [
    {
      title: "Senior Software Engineer",
      company: "Tech Company Inc.",
      period: "2020 – Present",
      description: "Led development of microservices architecture serving 10M+ users. Mentored junior engineers and established code review practices."
    },
    {
      title: "Software Engineer",
      company: "Startup Co.",
      period: "2017 – 2020",
      description: "Built and maintained React/Node.js applications. Reduced page load times by 40% through performance optimization."
    },
    {
      title: "Frontend Developer",
      company: "Agency XYZ",
      period: "2014 – 2017",
      description: "Developed responsive web applications for diverse clients across e-commerce, media, and fintech sectors."
    }
  ],
  education: [
    {
      degree: "B.S. Computer Science",
      school: "State University",
      period: "2010 – 2014"
    }
  ],
  skills: {
    proficient: ["JavaScript", "TypeScript", "React", "Node.js", "CSS/Sass", "PostgreSQL"],
    familiar: ["Python", "Go", "Docker", "Kubernetes", "AWS", "GraphQL"]
  },
  oss: [
    "resume-builder — open source Astro resume editor",
    "react-hooks-lib — collection of reusable React hooks",
    "css-grid-layout — CSS grid utility library"
  ],
  talks: [
    "\"Modern CSS Techniques\" — JSConf 2023",
    "\"Building Scalable APIs with Node.js\" — NodeSummit 2022",
    "\"The Future of Web Components\" — WebDevConf 2021"
  ],
  hobbies: ["Photography", "Rock climbing", "Open source contributing", "Coffee brewing"]
};
