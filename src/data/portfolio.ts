export const profile = {
  name: 'Anmol Chandrayan',
  role: 'Computer Science Engineering Student | Aspiring Software Developer',
  tagline: 'Building thoughtful software, one line at a time.',
  email: 'anmolchandrayan18@gmail.com',
  phone: '+91 7999571471',
  linkedin: 'https://linkedin.com/in/anmol-chandrayan-a92352383',
  github: 'https://github.com/anmolchandrayan18',
  about:
    "I'm a third-year B.Tech Computer Science Engineering student at Indore Institute of Science and Technology, passionate about building reliable, well-structured software. My focus is on backend development with Java and Spring Boot, designing REST APIs, and creating clean frontends with Next.js. I enjoy turning ideas into working systems and learning the craft of software engineering along the way.",
  stats: [
    { label: 'CGPA', value: '8.18' },
    { label: 'Projects', value: '2' },
    { label: 'Certifications', value: '10' },
    { label: 'Year of Study', value: '3rd' },
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'Code2',
    skills: ['Java', 'C', 'C++', 'Python'],
  },
  {
    title: 'Backend & APIs',
    icon: 'Server',
    skills: ['Spring Boot', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: ['MySQL', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: ['HTML', 'CSS', 'Next.js'],
  },
  {
    title: 'Tools & Version Control',
    icon: 'GitBranch',
    skills: ['Git', 'GitHub'],
  },
  {
    title: 'Fundamentals',
    icon: 'Brain',
    skills: ['OOP', 'Basic Data Structures'],
  },
];

export type Project = {
  title: string;
  status: 'Completed' | 'In Progress';
  description: string;
  features: string[];
  technologies: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    title: 'QueueWise – Smart Queue & Appointment Management System',
    status: 'Completed',
    description:
      'A queue and appointment management system designed to reduce waiting times and streamline patient flow. Patients can register, book appointments, and track their live queue position, while staff can call the next appointment and mark appointments as completed.',
    features: [
      'Patient registration and profile management',
      'Appointment booking with date and time selection',
      'Real-time queue position tracking for each patient',
      'Call-the-next-appointment workflow for staff',
      'Mark appointments as completed and update queue state',
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Next.js'],
    accent: 'electric',
  },
  {
    title:
      'AI-Powered Smart Logistics & Accessibility Intelligence Platform for the North Eastern Region (NER)',
    status: 'In Progress',
    description:
      'A proposed platform to support safer and more efficient logistics across the North Eastern Region by combining geographic data, weather conditions, and field updates. The system is intended to identify potentially risky routes and assist with route and timing decisions.',
    features: [
      'GIS-based mapping of routes and regional accessibility (proposed)',
      'Integration of weather information to flag risky conditions (proposed)',
      'Field updates to reflect real-time ground situations (proposed)',
      'Route and timing decision support for logistics planning (proposed)',
    ],
    technologies: ['GIS Mapping', 'Weather Data', 'Field Updates', 'AI', 'Route Planning'],
    accent: 'amber',
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  detail: string;
  score?: string;
};

export const education: EducationItem[] = [
  {
    degree: 'B.Tech, Computer Science Engineering',
    institution: 'Indore Institute of Science and Technology',
    period: '2024 – 2028',
    detail: 'Currently in the third year of study.',
    score: 'Current CGPA: 8.18',
  },
  {
    degree: 'Class XII (Higher Secondary)',
    institution: 'Pre-University Education',
    period: 'Completed',
    detail: 'Senior secondary education.',
    score: '72%',
  },
  {
    degree: 'Class X (Secondary)',
    institution: 'Secondary Education',
    period: 'Completed',
    detail: 'Secondary school education.',
    score: '82%',
  },
];

export const certifications = [
  { name: 'Java Certificate', issuer: 'Certificate Program' },
  { name: 'Python Essentials 1 & 2', issuer: 'Cisco Networking Academy' },
  { name: 'Introduction to Generative AI', issuer: 'Google Cloud' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy' },
  { name: 'Introduction to Data Science', issuer: 'Online Program' },
  { name: 'Deloitte Data Analytics Job Simulation', issuer: 'Deloitte (Forage)' },
  { name: 'Deloitte Cyber Job Simulation', issuer: 'Deloitte (Forage)' },
  { name: 'TATA GenAI Powered Data Analytics Job Simulation', issuer: 'TATA (Forage)' },
  { name: 'Microsoft MS Excel', issuer: 'Microsoft' },
  {
    name: 'NPTEL Design and Analysis of Algorithms',
    issuer: 'NPTEL',
    badge: 'Completed',
  },
];
