"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  TestTube2,
  BarChart3,
  GraduationCap,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({
  icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300"
  >
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </motion.div>
);

const services = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    description:
      "Build high-performance mobile apps for iOS and Android using modern technologies. Whether for startups or businesses, I create scalable, user-friendly apps with an optimized experience.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Website Development",
    description:
      "Create modern, responsive, and SEO-friendly websites tailored to your needs. Whether it's a portfolio, e-commerce, or company site, I build engaging web solutions with high speed and great UI/UX.",
  },
  {
    icon: <TestTube2 className="w-8 h-8" />,
    title: "Automation Testing",
    description:
      "Ensure bug-free and optimized performance with automated testing. Using WebdriverIO, Cypress, and Selenium, I help detect issues early, improve security, and enhance reliability.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Data Analysis & Machine Learning",
    description:
      "Transform raw data into meaningful insights with data analysis and AI-driven predictions. From business intelligence to predictive modeling, I help unlock the power of data-driven decision-making.",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Teaching Technology & Coding",
    description:
      "Passionate about learning? I teach Scratch, Phaser, Web Development, React Native, Python, and more. Whether you're a beginner or leveling up, I offer structured lessons tailored to your needs.",
  },
];

export const ServiceSection = () => {
  return (
    <section id="service" className="py-20 px-4">
      <div className="container ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I Can Do to Help?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a range of services to help you achieve your technology
            goals, from development to education.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
