export interface ProjectChallenge {
  title: string;
  problem: string;
  solutionTitle: string;
  solution: string;
  metric: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  stack: string[];
  description: string;
  note?: string;
  infraNote?: string;
  githubUrl?: string;
  liveUrl?: string;
  diagramSvg?: string;
  videoUrl?: string;
  challenges?: ProjectChallenge[];
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
    bio: "Code is easy. System reliability is hard. I don't just build features; I engineer stability. My work focuses on polyglot persistence, defensive programming, and cutting through complexity to deliver value where it matters most.",
  },
  projects: [
    {
      id: 'puente-platform',
      title: 'Puente Platform',
      subtitle: 'A Production-Grade Microservices Ecosystem',
      stack: [
        'TypeScript',
        'NestJS',
        'Docker',
        'React',
        'OpenTelemetry',
        'Redis',
        'PostgreSQL',
        'MongoDB',
      ],
      description:
        'A production-grade ecosystem connecting Sellers, Buyers, and Couriers across LatAm. Built to handle real-world constraints like intermittent connectivity and complex logistics without missing a beat.',
      note: 'Built with NestJS for modular backend architecture, Docker for container orchestration, React as an offline-first PWA, and OpenTelemetry for end-to-end observability.',
      infraNote:
        'Fully containerized architecture. Showcased in a local Docker environment to demonstrate zero-dependency orchestration.',
      githubUrl: 'https://github.com/mikaelpizzi/puente-platform',
      liveUrl: 'https://puente-architecture.vercel.app',
      diagramSvg: '/system-overview-dark.svg',
      // videoUrl: undefined, // omitted to avoid broken players as per specs
      challenges: [
        {
          title: 'Unreliable Networks',
          problem:
            "LatAm couriers work in zones with spotty connectivity. Route calculations can't depend on external APIs.",
          solutionTitle: 'Self-Hosted OSRM + Haversine Fallback',
          solution:
            'Venezuela OSM data running locally. Automatic fallback to Haversine formula.',
          metric: '100% routing uptime.',
        },
        {
          title: 'Real-time at Scale',
          problem:
            'Buyers need live courier positions. Sellers need instant order updates. Thousands of concurrent connections.',
          solutionTitle: 'WebSockets + Redis Pub/Sub',
          solution:
            'Redis GEO commands for geo-spatial queries. Event-driven architecture.',
          metric: 'Sub-second updates.',
        },
        {
          title: 'Data Diversity',
          problem:
            'Financial data needs ACID. Product catalogs need flexibility. Sessions need speed.',
          solutionTitle: 'Polyglot Persistence',
          solution:
            'PostgreSQL for finance, MongoDB for products, Redis for sessions.',
          metric: 'Right tool for each job.',
        },
        {
          title: 'Monolith Hell',
          problem:
            "Single codebase becomes unmaintainable. Teams can't deploy independently. One bug brings everything down.",
          solutionTitle: '6 Independent Microservices',
          solution: 'NestJS with strict DI and clean architecture.',
          metric: 'Deploy any service without touching others.',
        },
        {
          title: 'Delivery Disputes',
          problem:
            '"I never received it" claims destroy trust. No paper trail in informal commerce.',
          solutionTitle: 'Digital Proof of Delivery',
          solution: 'Signature capture + photo upload to Cloudinary.',
          metric: 'Every delivery is verifiable.',
        },
        {
          title: 'Volatile Currency',
          problem:
            'Venezuelan prices change hourly. Users need real USD/crypto equivalents always.',
          solutionTitle: 'Real-time Crypto Rates',
          solution: 'Binance P2P + CoinGecko APIs with smart caching.',
          metric: 'Always accurate, never stale.',
        },
        {
          title: 'Manual Deployments',
          problem:
            'Pushing code manually means human error, inconsistent builds, and no audit trail.',
          solutionTitle: 'GitHub Actions CI/CD',
          solution:
            'Automated lint, test, Docker build → GHCR → Render/Fly.io.',
          metric: 'Branch protection enforces green CI.',
        },
        {
          title: 'Startup Budget Reality',
          problem:
            'Free tiers expire, sleep policies kill demos, and costs explode at scale.',
          solutionTitle: 'Multi-Cloud Franken-Stack',
          solution:
            'Aiven (Postgres/Redis) + MongoDB Atlas + Render.',
          metric: 'Permanent free tiers, zero monthly cost.',
        },
      ],
    },
  ],
  experience: [
    {
      role: 'Software Engineer',
      company: 'Mercader (Chile-based Startup)',
      location: 'Remote',
      period: '2021 — 2026',
      highlights: [
        'Developed and maintained microservices using Node.js and NestJS within a Dockerized environment, contributing to a 40% reduction in new feature implementation time.',
        'Co-engineered the migration of legacy data to a distributed architecture (PostgreSQL and MongoDB), improving complex query speeds by 25%.',
        'Designed and integrated RESTful endpoints with an API Gateway to centralize authentication and logging across services.',
        'Refactored React UI components and implemented Redux Toolkit for state management, resolving over 50 reported bugs and improving code readability.',
        'Designed and delivered multiple end-to-end features such as the "User Profile" module, handling both the API logic and frontend integration ahead of schedule.',
      ],
    },
    {
      role: 'Independent Developer & Consultant',
      company: 'Freelance',
      location: 'Remote',
      period: '2020 — Present',
      highlights: [
        'Architected and deployed custom e-commerce solutions, leading the end-to-end development of interactive UIs with React/TypeScript and secure payment infrastructures using Node.js, Express, AWS, and Stripe.',
        'Optimized a high-traffic application by restructuring PostgreSQL queries and implementing a Redis caching strategy, achieving a 40% reduction in main page load times.',
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
      skills: 'React, Next.js, Redux Toolkit, Tailwind CSS, SASS/CSS3, HTML5, CSS3',
    },
    {
      category: 'Databases',
      skills: 'PostgreSQL, MongoDB, Redis, MySQL',
    },
    {
      category: 'Cloud & DevOps',
      skills: 'AWS (EC2, S3, RDS), Docker, CI/CD Pipelines, Git',
    },
  ],
};
