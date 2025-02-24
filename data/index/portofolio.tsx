export type ProjectCategory = "website" | "mobile" | "data" | "qa" | "all";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  category: ProjectCategory;
}

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Node.js", "PostgreSQL"],
    demoUrl: "#",
    category: "website",
  },
  {
    title: "Mobile Fitness App",
    description: "React Native app for tracking workouts and nutrition",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["React Native", "Firebase", "API"],
    demoUrl: "#",
    category: "mobile",
  },
  {
    title: "Data Analytics Dashboard",
    description: "Advanced analytics and visualization platform",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    tags: ["Python", "ML", "Data Analysis"],
    demoUrl: "#",
    category: "data",
  },
  {
    title: "Test Automation Framework",
    description: "End-to-end testing suite for web applications",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Selenium", "Jest", "CI/CD"],
    demoUrl: "#",
    category: "qa",
  },
];

export const filterCategories = [
  { id: "website", label: "Website & API" },
  { id: "mobile", label: "Mobile" },
  { id: "data", label: "Data Scientist" },
  { id: "qa", label: "QA Engineer" },
];
