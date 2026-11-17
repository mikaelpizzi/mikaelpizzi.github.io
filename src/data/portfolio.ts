export interface ArchitecturalDecision {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  stack: string[];
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  diagramSvg?: string;
  videoUrl?: string;
  decisions?: ArchitecturalDecision[];
  scalingBoundary?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  skills: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    headline: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
    bio: string;
  };
  projects: Project[];
  experience: Experience[];
  education: Education;
  skills: SkillCategory[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Mikael Pizzi',
    role: 'Full Stack & Backend Software Engineer',
    headline: 'Engineering Scalable Systems',
    location: 'Remote · LATAM (GMT-4)',
    email: 'mikaelangelopizzi@gmail.com',
    github: 'https://github.com/mikaelpizzi',
    linkedin: 'https://linkedin.com/in/mikaelpizzi',
    resumeUrl: '/resume.pdf',
    bio: 'Software Engineer with 5+ years of remote experience designing and maintaining distributed backends, microservices, and web applications. Focused on TypeScript, NestJS, React, and PostgreSQL query optimization for high-traffic production environments.',
  },
  projects: [
    {
      id: 'sicm',
      title: 'Integrated Medication Control System (SICM)',
      subtitle: 'Zero-ORM Relational Architecture & Municipal Inventory Engine',
      stack: [
        'SQL (MariaDB)',
        'PHP 8 (PDO)',
        'Vanilla JavaScript',
        'Docker Compose',
        'Bootstrap',
      ],
      description:
        'Municipal chronic-medication distribution system engineered to enforce strict inventory traceability, patient allocation rules, and auditability directly inside the database engine. Deliberately built without ORMs or external runtime extensions to eliminate abstraction overhead, prevent N+1 query patterns, and maintain deterministic control over SQL execution plans and ACID transaction boundaries.',
      githubUrl: 'https://github.com/mikaelpizzi/sistema-distribucion',
      diagramSvg: '/DB_proyecto.svg',
      decisions: [
        {
          title: 'Database-Level Invariant Enforcement (23 Normalized Tables)',
          description:
            'Enforced domain integrity via strict foreign-key cascades, CHECK constraints, and automated BEFORE/AFTER SQL triggers rather than relying solely on application-layer validation. Guarantees zero negative stock states and immutable audit/system notification logs even under direct SQL batch operations.',
        },
        {
          title: 'Explicit ACID Transactions & Concurrency Control',
          description:
            'Replaced heavy Active Record/ORM abstractions with raw parameterized PDO prepared statements and explicit BEGIN / COMMIT / ROLLBACK blocks. Prevented race conditions during concurrent medication dispatches while keeping memory footprint minimal.',
        },
        {
          title: 'Zero-Bloat Security, Reporting & Containerization',
          description:
            'Implemented stateful token security (tokens_seguridad) with strict expiration/revocation rules, streaming CSV reporting for administrative audits without memory spikes, and a single-command reproducible runtime via lightweight Docker Compose orchestration.',
        },
      ],
      scalingBoundary:
        'Designed for deterministic single-node relational throughput at municipal scale; horizontal read-scaling beyond ~10k concurrent dispatches/min would introduce read-replicas and partition historical audit tables by quarter.',
    },
  ],
  experience: [
    {
      role: 'Software Engineer',
      company: 'Mercader (Chile-based Startup)',
      location: 'Remote',
      period: '2021 – 2026',
      highlights: [
        'Developed and maintained microservices using Node.js and NestJS within a Dockerized environment, contributing to a 40% reduction in new feature implementation time.',
        'Co-engineered the zero-downtime migration of legacy data into a split persistence model, isolating ACID transactional records in PostgreSQL while offloading flexible catalog schemas to MongoDB, cutting complex query latency by 25%.',
        'Designed and integrated RESTful endpoints with an API Gateway to centralize authentication and logging across services.',
        'Refactored React UI components and implemented Redux Toolkit for state management, resolving over 50 reported bugs and improving code readability.',
        'Designed and delivered multiple end-to-end features such as the "User Profile" module, handling both the API logic and frontend integration ahead of schedule.',
        'Defined service architecture and Docker containerization standards across the engineering team while leading peer code reviews to enforce TypeScript strictness, modularity, and long-term maintainability.',
        'Optimized automated CI/CD build and testing pipelines, eliminating manual deployment bottlenecks and ensuring reproducible, zero-regression releases across staging and production environments.',
        'Managed critical production incidents and engineered fault-tolerant payment workflows and third-party API integrations, implementing idempotency checks, webhook verification, and structured observability to protect transaction integrity.',
      ],
    },
    {
      role: 'Independent Developer & Consultant',
      company: 'Freelance',
      location: 'Remote',
      period: '2020 – Present',
      highlights: [
        'Architected and deployed custom e-commerce solutions, leading the end-to-end development of interactive UIs with React/TypeScript and secure payment infrastructures using Node.js, Express, AWS, and Stripe.',
        'Diagnosed execution-plan bottlenecks on a high-traffic platform, restructuring unindexed PostgreSQL joins and introducing a targeted Redis cache-aside layer with strict TTL invalidation to reduce main page load times by 40%.',
      ],
    },
  ],
  education: {
    degree: 'B.S. in Systems Engineering, Major in Computer Systems',
    institution: 'Universidad de Los Andes, Venezuela',
    details: 'Successfully balanced a rigorous academic curriculum while working full-time as a Software Engineer.',
  },
  skills: [
    {
      category: 'Languages',
      skills: 'TypeScript, JavaScript (ES6+), Python, SQL',
    },
    {
      category: 'Backend',
      skills: 'Node.js, NestJS, Express.js, Prisma ORM, Microservices Architecture, API Gateway',
    },
    {
      category: 'Frontend',
      skills: 'React, Next.js, Redux Toolkit, Tailwind CSS, SASS/SCSS, HTML5',
    },
    {
      category: 'Databases',
      skills: 'PostgreSQL, MongoDB, Redis, MySQL, MariaDB',
    },
    {
      category: 'Cloud & DevOps',
      skills: 'AWS (EC2, S3, RDS), Docker, CI/CD Pipelines, Git',
    },
  ],
};
