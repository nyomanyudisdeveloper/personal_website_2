export type ProjectCategory = "website" | "mobile" | "data" | "qa" | "all";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  sourceUrl?: string ;
  category: ProjectCategory;
}

export const projects: Project[] = [
  {
    title: "Kerja Mudahkan (Job Portal)",
    description: "This project is created because i try to learn how to use lovable.dev to create website with framework React JS. For now all data in this website is dummy, except login is already integrated with API. It is prototype website for job-portal with basic feature like list job, company, etc",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Typescript","React", "Node JS", "Lovable.dev", "tailwind"],
    demoUrl: "https://kerja-mudahkan.vercel.app/",
    sourceUrl: "https://github.com/nyomanyudisdeveloper/kerja-mudahkan",
    category: "website",
  },
  {
    title: "API Transaction Service",
    description: "I created this API for one of my take home test for interview.  In this API I used some methodology like router, authentication, middleware, documentation, file upload, unit test, send email, and scheduler. This API only has 1 role user, it is membership.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["Javascript", "Node JS", "PostgreSQL","Swagger","JWT","Vercel","Superbase","Firebase Storage", "Jest", "Joi", "supertest", "nodemailer", "node-schedule"],
    demoUrl: "https://contract-sims.vercel.app/api-docs/",
    sourceUrl: "https://github.com/nyomanyudisdeveloper/contract_sims",
    category: "website",
  },
];

export const filterCategories = [
  { id: "website", label: "Website & API" },
  { id: "mobile", label: "Mobile" },
  { id: "data", label: "Data Scientist" },
  { id: "qa", label: "QA Engineer" },
];
