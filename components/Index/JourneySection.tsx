"use client";

import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { journeyData } from "@/data/index/journey";

export const JourneySection = () => {
  return (
    <section id="journey" className="py-20 px-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my professional experience and educational background
            through this timeline of key milestones
          </p>
        </motion.div>
        <div className="relative">
          {/* Timeline center line - hidden on mobile, shown on desktop */}
          <div className="hidden md:block absolute left-[50%]  h-full w-1 bg-border" />
          {/* Mobile timeline line - shown on mobile, hidden on desktop */}
          <div className="md:hidden absolute left-4 top-0 h-full w-1 bg-border" />

          <div className="space-y-8 md:space-y-12">
            {journeyData.map((entry, index) => {
              return (
                <motion.div
                  key={entry.id}
                  initial={{
                    opacity: 0,
                    x:
                      window.innerWidth >= 768
                        ? index % 2 == 0
                          ? -50
                          : 50
                        : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  className={cn(
                    "flex relative",
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  )}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + 0.2,
                    }}
                    className={cn(
                      `left-[10px] absolute w-4 h-4 bg-primary rounded-full transform -translate-y-1/2 md:left-[49.2%] lg:left-[49.5%] `
                    )}
                  />
                  {/* Content card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className={`glass-card p-6 rounded-xl transition-colors
                    ${
                      index % 2 === 0
                        ? "md:mr-[52%] md:pr-8"
                        : "md:ml-[50%] md:pl-8"
                    }
                    ml-12 w-full md:w-[calc(50%-2rem)]`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                        {entry.type === "work" ? (
                          <BriefcaseIcon className="w-6 h-6" />
                        ) : (
                          <GraduationCapIcon className="w-6 h-6" />
                        )}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{entry.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {entry.yearRange}
                        </p>
                        <p className="text-muted-foreground">
                          {entry.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
