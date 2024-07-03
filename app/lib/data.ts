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
    email: process.env.EMAIL,
    phone: process.env.PHONE,
    //    summary:
    //      "Growth-oriented Software Engineer, with over 8 years of experience. Rapidly adapts to new technologies and optimizes team performance. Seeking a position as a Senior Software Engineer, ideally in an AWS environment, with a focus on site reliability and performance. Proficient in JavaScript/TypeScript (Node.js, Express.js, React.js), and Elasticsearch.",
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
    {
      name: "Portfolio",
      url: "https://resume.jozef.syta.dev",
    },
  ];
}

export function fetchSkills(): Skills[] {
  return [
    {
      category: "Languages",
      keywords: ["TypeScript", "Python", "Kotlin", "JavaScript", "SQL"],
    },
    {
      category: "Frameworks & Libraries",
      keywords: [
        "React",
        "React Native",
        "Jetpack Compose",
        "Node.js",
        "Next.js",
        "SST (Serverless Stack Toolkit)",
      ],
    },
    {
      category: "Databases",
      keywords: [
        "PostgreSQL",
        "DynamoDB",
        "Elasticsearch",
        "MySQL",
        "Couchbase",
      ],
    },
    {
      category: "Tools & Process",
      keywords: [
        "Data Structures and Algorithms (DSA)",
        "Amazon Web Services (AWS)",
        "Android Studio",
        "RabbitMQ",
        "Docker",
        "Git",
        "CI/CD",
        "Agile",
        "Scrum",
      ],
    },
  ];
}

export function fetchCertificates(): Certificate[] {
  return [
    {
      name: "Meta Android Developer Certificate",
      date: "2024-07",
      issuer: "Issued by: Coursera | Authorized by: Meta",
      url: "https://www.credly.com/go/2TUz6uD4",
      validation_number: "credly.com/go/2TUz6uD4",
      validation_url: "https://www.credly.com/badges/9c0ab9f0-46dd-40a5-a74b-3979d387cfa9",
    },
    {
      name: "AWS Certified Solutions Architect – Associate",
      date: "2023-12",
      issuer: "Amazon Web Services (AWS)",
      url: "https://www.credly.com/badges/c4c02599-fff2-440f-9f22-3bcc8e0c93d8",
      validation_number: "CFP4RLCB51B1QDGP",
      validation_url: "https://aws.amazon.com/verification",
      //image: "/aws-certified-solutions-architect-associate.webp",
    },
  ];
}

export function fetchExperiences(): Experience[] {
  return [
    {
      organization: "RubensteinTech",
      location: "New York, NY",
      position: "Lead Software Engineer",
      startDate: "2020-11",
      endDate: "2023-03",
      highlights: [
        "Led a team of developers in the design and launch of a globally distributed, scalable client portal web app, supporting over 30,000 monthly users; developed with Node.js and React.js",
        "Designed and implemented an attribute-based access control system creating a performant search experience using Elasticsearch",
        "Optimized data retrieval in a Node.js-based content management system (CMS), cutting database export and API response times by 60%",
        "Conducted code reviews and provided expert guidance in planning novel software solutions; mentored junior engineers assisting them to write simpler, more robust, and maintainable code",
        "Enhanced the processing of content updates, making new data searchable up to five times faster",
        "Skills: JavaScript · Technology Leadership · Software Infrastructure · React.js · Elasticsearch",
      ],
    },
    {
      organization: "RubensteinTech",
      location: "New York, NY",
      position: "Software Engineer",
      startDate: "2015-05",
      endDate: "2020-10",
      highlights: [
        "Full Stack Developer. Built key CMS features, including: Content Moderation, Bulk Updates, Data Validation, Media Transformation, and Content Suggestions",
        "Built REST APIs for internal and external consumption with Node.js, JavaScript",
        "Improved business efficiency by building an intranet search app that enabled employees to search for documents across multiple internal resources simultaneously",
        "Skills: JavaScript · Node.js · React.js · Elasticsearch · Software Infrastructure",
      ],
    },
    {
      organization: "RubensteinTech",
      location: "New York, NY",
      position: "Software Engineer Intern",
      startDate: "2014-01",
      endDate: "2015-04",
      highlights: [
        "Skills: Internet Software · Engineering · JavaScript · HTML",
      ],
    },
  ];
}

export function fetchEducation(): Education[] {
  return [
    {
      organization: "The Cooper Union for the Advancement of Science and Art",
      area_of_study: "MEng, Civil Engineering",
      level: "Master of Engineering",
      startDate: "2013-09",
      endDate: "2015-05",
      gpa: "3.77",
    },
    {
      organization: "The Cooper Union for the Advancement of Science and Art",
      area_of_study: "BE, Civil Engineering",
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
      name: "Little Lemon - Restaurant Ordering App",
      url: "https://github.com/jsytal1/little-lemon",
      highlights: [
        "Capstone project for the Coursera 'Android App Capstone' course by Meta, this app simulates ordering food from the fictional Little Lemon restaurant. Developed using Android Studio, Kotlin, Jetpack Compose, and Material Design. Features an onboarding flow, user profile management, dynamic menu interface, and navigation setup."
      ],
      date: "2024-07"
    },
    {
      name: "Make Me Cross - Crossword Maker",
      url: "https://makemecross.com",
      highlights: [
        "A serverless web app for generating dense crossword puzzles. Built with: IaC via SST, TypeScript, React, Python, Golang, Lambda, API Gateway, Amplify, CloudFront, DynamoDB, S3, Cognito, IAM, Route 53",
      ],
      date: "2024-01",
    },
    {
      name: "Cloud Resume Challenge",
      url: "https://resume.jozef.syta.dev",
      highlights: [
        "Developed and deployed a cloud-native resume, utilizing React, S3, AWS Lambda, DynamoDB, API Gateway, Cloudflare, and GitHub Actions for CI/CD",
      ],
      date: "2023-11",
    },
  ];
}
