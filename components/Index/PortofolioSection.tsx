"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import {
  filterCategories,
  ProjectCategory,
  projects,
} from "@/data/index/portofolio";

export const PortofolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );
  return (
    <section id="portfolio" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600">
              A selection of my recent work in web development, mobile
              applications, and API integration.
            </p>
          </div>

          {/* Filter Boxes */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              onClick={() => setActiveFilter("all")}
              variant={activeFilter === "all" ? "default" : "outline"}
              className={cn(
                "rounded-xl transition-all duration-300",
                activeFilter === "all" && "scale-105"
              )}
            >
              All
            </Button>
            {filterCategories.map((category, index) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id as ProjectCategory)}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={cn(
                  "transition-all duration-300",
                  activeFilter === category.id && "scale-105",
                  // First and last items have larger border radius
                  index === 0 && "rounded-l-xl",
                  index === filterCategories.length - 1 && "rounded-r-xl"
                )}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className=" bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6  justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                      {project.sourceUrl ?
                        <div className="flex flex-row justify-evenly">
                          <Button className="w-1/2 mr-2" asChild>
                            <a target="_blank" href={project.demoUrl}>Live Demo</a>
                          </Button>
                          <Button variant={"outline"} className="w-1/2 ml-2" asChild>
                            <a target="_blank" href={project.sourceUrl}>Source Code</a>
                          </Button>
                        </div>
                        : 
                        <div className="space-y-4">
                          <Button className="w-full" asChild>
                            <a target="_blank" href={project.demoUrl}>Live Demo</a>
                          </Button>
                        </div>
                      }
                      
                    
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};
