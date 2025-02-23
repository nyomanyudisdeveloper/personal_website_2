"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const menuItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "teaching", label: "Teaching" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [activeSection, setActiveSection] = useState("hero");
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md  border-b">
      <div className="container">
        <nav className="flex items-center justify-between h-16 px-4">
          {/* Logo  */}
          <a href="#" className="text-xl font-bold text-primary">
            Yudis Aditya
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => {
              return (
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-1"
                  )}
                  key={item.id}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          {/* Mobile Menu Toggle */}
          <Button
            variant={"ghost"}
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </nav>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden"
            >
              <div className="px-4 py-4 space-y-4">
                {menuItems.map((item) => {
                  return (
                    <button
                      className={cn(
                        "block w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-colors"
                        // activeSection === item.id
                        //   ? "bg-primary/10 text-primary"
                        //   : "text-muted-foreground hover:bg-accent"
                      )}
                      key={item.id}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
