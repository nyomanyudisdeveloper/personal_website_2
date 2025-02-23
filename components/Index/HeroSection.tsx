"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Instagram, Linkedin, Download, Mail } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const cvUrl = "/cv.pdf";
    window.open(cvUrl, "blank");
  };
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden pt-28 pb-16 px-4 "
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content  */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Greetings Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block border border-gray-200 rounded-lg px-6 py-3 bg-white/50"
            >
              <p className="text-lg">Hi everyone 👋, My name is Yudis Aditya</p>
            </motion.div>
            <h1 className="text-5xl font-bold leading-tight">
              <span className="text-primary">Software Developer</span>, Tech
              Educator, and Tech Enthusiast
            </h1>
            <p className="text-gray-600 text-lg max-w-xl">
              I am a Software Developer that can help you create a website or
              mobile application that not only meets functionality requirements
              but also offers a decent price and great performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="rounded-full px-8 bg-black text-white hover:bg-black/90"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
              <Button
                onClick={downloadCV}
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </div>
            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-gray-600">Find me on:</p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/yudis.adit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-200 hover:border-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yudit-a-9941ab318/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-200 hover:border-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-6"></div>
              <Image
                src="/profile.jpg"
                alt="Yudis Aditya"
                width={200}
                height={500}
                className="relative z-10 w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/20 rounded-full -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
