import {
  Metadata,
  Basics,
  Profile,
  Skills,
  Certificate,
  Experience,
  Education,
  Project,
} from "./definitions";

export function fetchMetadata(): Metadata {
  return {
    title: "Jozef Syta - Resume",
    description:
      "resume of an senior software engineer with 8 years of experience seeking a job in the New York metropolitan area",
  };
}

export function fetchBasics(): Basics {
  return {
    name: "Jozef Syta",
    title: "Senior Software Engineer",
    summary:
      "Adaptable and growth-oriented web development professional with over 8 years of experience. Rapidly adapts to new technologies and optimizes team performance. Seeking a position as a Senior Software Engineer, ideally in an AWS environment, with a focus on site reliability and performance. Proficient in JavaScript/TypeScript (Node.js, Express.js, React.js), and Elasticsearch.",
    location: {
      city: "New York City",
      countryCode: "US",
      state: "NY",
    },
  };
}

export function fetchProfiles(): Profile[] {
  return [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jozef-syta",
    },
    {
      name: "GitHub",
      url: "https://github.com/jsytal1",
    },
  ];
}

export function fetchSkills(): Skills[] {
  return [
    {
      category: "Languages",
      keywords: [
        "JavaScript",
        "TypeScript",
        "Python",
        "SQL",
        "Elasticsearch DSL",
      ],
    },
    {
      category: "Frameworks & Libraries",
      keywords: ["Node.js", "React", "Next.js"],
    },
    {
      category: "SQL Databases",
      keywords: ["Amazon Aurora Serverless", "MySQL", "PostgreSQL"],
    },
    {
      category: "NoSQL Databases",
      keywords: ["Amazon DynamoDB", "Elasticsearch", "Couchbase"],
    },
    {
      category: "Tools",
      keywords: ["Amazon Web Services (AWS)", "Docker", "Git", "CI/CD"],
    },
    {
      category: "Process",
      keywords: ["Agile", "Scrum"],
    },
  ];
}

export function fetchCertificates(): Certificate[] {
  return [
    {
      name: "AWS Certified Solutions Architect – Associate",
      date: "2023-12-08",
      issuer: "Amazon Web Services Training and Certification",
      url: "https://www.credly.com/badges/c4c02599-fff2-440f-9f22-3bcc8e0c93d8/public_url",
      image: "/aws-certified-solutions-architect-associate.webp",
    },
  ];
}

export function fetchExperiences(): Experience[] {
  return [
    {
      organization: "RubensteinTech",
      location: "New York, NY",
      position: "Lead Software Engineer",
      startDate: "2022-01",
      endDate: "2023-03",
      highlights: [
        "Led a team of developers in the design and launch of a distributed, scalable client portal web app, supporting over 30,000 monthly users; developed with Node.js and React.js",
        "Designed and implemented an attribute-based access control system optimized for a performant search experience using Elasticsearch",
        "Optimized data retrieval in a Node.js-based content management system (CMS), cutting database export and API response times by 60%",
        "Conducted code reviews and provided expert guidance in planning novel software solutions; assisted developers in writing simpler, more robust, and maintainable code",
        "Enhanced the processing of content updates, making new data searchable up to five times faster",
      ],
    },
    {
      organization: "RubensteinTech",
      location: "New York, NY",
      position: "Software Engineer",
      startDate: "2015-05",
      endDate: "2022-12",
      highlights: [
        "Served as a Full Stack Developer, building key CMS features for both end-users and developers. Features included: content moderation, bulk updates, data validation, media transformation, and content suggestions",
        "Built REST APIs for internal and external consumption",
        "Executed ETL data migrations for new and existing clients",
      ],
    },
    {
      organization: "RubensteinTech",
      location: "New York, NY",
      position: "Software Engineer Intern",
      startDate: "2014-01",
      endDate: "2015-04",
      highlights: [
        "Developed an intranet search app that enabled employees to search for documents across multiple internal resources simultaneously",
      ],
    },
  ];
}

export function fetchEducation(): Education[] {
  return [
    {
      organization: "The Cooper Union for the Advancement of Science and Art",
      area_of_study: "Civil Engineering",
      level: "Master of Engineering",
      startDate: "2013-09",
      endDate: "2015-05",
      gpa: "3.77",
    },
    {
      organization: "The Cooper Union for the Advancement of Science and Art",
      area_of_study: "Civil Engineering",
      level: "Bachelor of Engineering",
      startDate: "2009-09",
      endDate: "2013-05",
      gpa: "3.78",
    },
  ];
}

export function fetchProjects(): Project[] {
  return [
    {
      name: "Cloud Resume Challenge",
      url: "https://resume.jozef.syta.dev",
      highlights: [
        "Developed and deployed a cloud-native resume, utilizing AWS Lambda, DynamoDB, and API Gateway",
      ],
    },
  ];
}
