"use client";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Mail, MessageSquare } from "lucide-react";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      setIsLoading(false);
      const result = await response.json();
      if (result.success) {
        alert("Sending Message Success!");
      } else {
        alert(
          "Sending Message Failed!, Please try alternative way to contact me like Linkedin."
        );
      }
    } catch (error) {
      setIsLoading(false);
      alert(
        "Sending Message Failed!, Please try alternative way to contact me like Linkedin."
      );
    }
  };

  // const FormSchema = z.object({
  //   username: z.string().min(2, {
  //     message: "Username must be at least 2 characters.",
  //   }),
  // });

  // const onSubmit = () => {};

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-center text-lg font-light text-gray-500 py-5">
            Dont shy, Please ask me anything
          </p>
          <div className="glass-card p-8 rounded-2xl  ">
            <form className="space-y-6" onSubmit={handleSubmitForm}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    required={true}
                    name="name"
                    placeholder="Your name"
                    className="rounded-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    required={true}
                    name="email"
                    type="email"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  required={true}
                  name="message"
                  placeholder="Your message"
                  className="min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className={cn(
                  "w-full",
                  isLoading ? "bg-gray-400 cursor-progress" : ""
                )}
              >
                {isLoading ? "Please wait..." : "Sending Message"}
              </Button>
            </form>
            <div className="mt-8 pt-8 border-t flex justify-between flex-wrap  gap-6 ">
              <a
                href="mailto:nyomanyudisdeveloper@gmail.com"
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                tempmailinator95@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/yudit-a-9941ab318/"
                target="_blank"
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors "
              >
                <MessageSquare className="w-5 h-5" />
                Let's chat on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
