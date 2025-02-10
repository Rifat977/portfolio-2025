"use client";

import { motion } from "framer-motion";
import { FaPython, FaJava, FaPhp, FaAws, FaDocker, FaReact, FaLaravel, FaNodeJs, FaVuejs } from "react-icons/fa";
import { TbBrandDjango, TbApi, TbCloud } from "react-icons/tb";
import { SiTailwindcss, SiBootstrap, SiJquery, SiNuxtdotjs, SiGo, SiTensorflow, SiNginx, SiLinux} from "react-icons/si";

const skills = {
  "Frontend Development": [
    { name: "JavaScript", icon: <FaReact /> },
    { name: "jQuery", icon: <SiJquery /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Vue Js", icon: <FaVuejs /> },
    { name: "Nuxt.js", icon: <SiNuxtdotjs /> },
  ],
  "Backend Development": [
    { name: "Python", icon: <FaPython /> },
    { name: "Django", icon: <TbBrandDjango /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Golang", icon: <SiGo /> },
    { name: "REST API", icon: <TbApi /> },
  ],
  "DevOps & Cloud": [
    { name: "AWS", icon: <FaAws /> },
    { name: "Cloud Deployment", icon: <TbCloud /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "CI/CD", icon: '' },
  ],
  "Soft Skills": [
    { name: "English Speaking", icon: "🗣️" },
    { name: "Problem-Solving", icon: "🧠" },
    { name: "Research & Innovation", icon: "🔬" },
  ],
  "Other": [
    { name: "Automation", icon: <SiNginx /> },
    { name: "Security Testing", icon: <SiLinux /> },
    { name: "NLP", icon: <SiTensorflow /> },
    { name: "AI & Machine Learning", icon: <SiTensorflow /> },
  ],
};

export default function Skills() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted p-6 rounded-lg shadow-lg hover-lift"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-secondary text-background border-2 hover:border-2 hover:bg-black/20 border-secondary hover:text-secondary transition-colors duration-300"
                  >
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
