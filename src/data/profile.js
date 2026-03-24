export const profile = {
  name: "Naveen Kumar Maloth",
  title: "Full Stack Software Engineer",
  tagline: "Building scalable fintech systems with Java, Spring Boot & React",
  location: "Pune, Maharashtra, India",
  email: "naveenmaloth09@gmail.com",
  phone: "9014619133",
  linkedin: "https://www.linkedin.com/in/naveen-maloth-b12040181/",
  github: "https://github.com/m-naveen",
  instagram: "https://www.instagram.com/maloth_nk/",
  summary:
    "Full Stack Software Engineer with 3.6+ years of experience building secure fintech and wealth management solutions using Java, Spring Boot, Kafka, React, SQL, PostgreSQL, AWS and Azure. Strong experience in Financial Services systems, including Account Aggregator (AA) data ingestion, microservices architecture, and high-availability backend services.",
  yearsOfExp: "3.6+",
  problemsSolved: "400+",
  hackathonRank: "1st / 100",
};

export const skills = {
  backend: [
    "Java", "Spring Boot", "Hibernate", "JPA", "RESTful APIs",
    "Kafka", "Node.js", "Microservices", "J2EE",
  ],
  frontend: [
    "React.js", "Redux", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",
  ],
  databases: [
    "PostgreSQL", "MySQL", "MongoDB", "Cassandra", "Couchbase", "Redis",
  ],
  cloud: [
    "AWS (EC2, S3, RDS, Lambda)", "Microsoft Azure", "Docker", "Kubernetes",
    "Jenkins", "CI/CD", "Git", "Terraform", "OpenShift",
  ],
  monitoring: [
    "Elasticsearch", "Datadog", "Prometheus", "Logging & Health Checks",
  ],
  testing: [
    "JUnit", "Mockito", "Cucumber (BDD)", "Postman", "Automated Regression Testing",
  ],
};

export const experience = [
  {
    company: "Finfactor Technologies Pvt Ltd",
    role: "Software Engineer",
    period: "Feb 2025 – Present",
    location: "Pune, India",
    type: "Full-time · On-site",
    color: "#00ff87",
    points: [
      "Built and maintained scalable fintech and wealth management platforms using Java, Spring Boot, Kafka, SQL, PostgreSQL, AWS and Azure.",
      "Designed Account Aggregator (AA) data ingestion services and high-availability microservices for secure financial data processing.",
      "Prepared and reviewed HLD and LLD for core system components, ensuring alignment with SLA-driven delivery.",
      "Contributed to code reviews, design reviews, quality assurance, and PoC initiatives with global teams.",
      "Participated across full SDLC — design, development, integration testing and system testing.",
    ],
    tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "Kubernetes", "Azure", "React"],
  },
  {
    company: "Turing (Google Services Contract)",
    role: "Software Engineer",
    period: "Oct 2024 – Dec 2024",
    location: "United States (Remote)",
    type: "Full-time · Remote",
    color: "#60a5fa",
    points: [
      "Developed cloud-native services using Java, Python and Node.js, building scalable REST APIs.",
      "Integrated Google Services with LLM APIs, improving data accuracy by 25%.",
      "Reduced pipeline latency by 25% through API optimization and monitoring.",
      "Ensured high code quality through best practices, unit testing, and static analysis tools.",
    ],
    tech: ["Node.js", "Python", "React.js", "REST APIs", "LLM APIs", "CI/CD"],
  },
  {
    company: "Amdocs Development Center Pvt Ltd",
    role: "Software Engineer (2 yrs 4 mos)",
    period: "Jun 2022 – Sep 2024",
    location: "Pune, India",
    type: "Full-time · On-site",
    color: "#f59e0b",
    points: [
      "Designed enterprise microservices using Java, Spring Boot, Kafka and Hibernate for mission-critical systems.",
      "Optimized PostgreSQL, MongoDB and Cassandra databases, improving performance by up to 40%.",
      "Deployed containerized services using Docker and Kubernetes on AWS with CI/CD pipelines.",
      "Migrated frontend components from JavaScript to TypeScript; built features with React & Redux.",
      "Mentored junior developers through technical training and knowledge transfer.",
    ],
    tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "MongoDB", "Docker", "AWS", "React", "Redux", "TypeScript"],
  },
];

export const projects = [
  {
    title: "Budget Management System",
    period: "Dec 2025 – Present",
    tech: ["Java", "Spring Boot", "Kafka", "SQL", "React.js"],
    description:
      "Implemented monthly budget and utilization tracking using customer transactions across accounts and categories. Generated category-wise spending insights and dashboards with scalable Kafka-backed processing.",
    icon: "💰",
  },
  {
    title: "Multi-Consent Journey (Multiple AA)",
    period: "Jun 2025 – Aug 2025",
    tech: ["Java", "Spring Boot", "React", "TypeScript"],
    description:
      "Built a multi-consent platform supporting multiple Account Aggregators (AA) and FI types in a single user journey. Implemented secure consent management workflows with React frontend and Spring Boot backend.",
    icon: "🔐",
  },
  {
    title: "Personal Finance Management (PFM)",
    period: "Feb 2025 – Present",
    tech: ["Java", "Spring Boot", "Kafka", "SQL", "Docker", "Redis"],
    description:
      "Developed a PFM platform ingesting financial data from Account Aggregators across all FI types using scalable microservices and Kafka pipelines to generate financial insights and analytics.",
    icon: "📊",
  },
];

export const achievements = [
  {
    icon: "🏆",
    title: "Hackathon Winner",
    desc: "1st place out of 100 teams at Finfactor Hackathon for implementing a BBPS feature",
  },
  {
    icon: "⭐",
    title: "HackerRank 6-Star",
    desc: "Solved 400+ coding challenges in Java, showcasing advanced problem-solving skills",
  },
  {
    icon: "🎓",
    title: "IIT ISM Dhanbad",
    desc: "B.Tech in Electronics & Communication Engineering, 2018–2022",
  },
];
