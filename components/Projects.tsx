"use client";

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Finch",
    description: "A powerful e-commerce platform integrated with a robust Point of Sale (POS) system, enabling seamless online and in-store sales management.",
    tech: ["Tailwind CSS", "Vue JS", "Python", "Django"],
    image: "/finch.png",
    url: "https://finchstore.co.uk/",
  },
  {
    title: "NixaGlobal",
    description: "A business-to-business (B2B) platform designed for student visa agencies, streamlining application processing and client management.",
    tech: ["Django"],
    image: "/nixaglobal.png",
    url: "https://b2b.nixaglobal.com/",
  },
  {
    title: "Tripadvisor",
    description: "A smart travel recommendation system for Bangladesh, utilizing NLP to suggest top tourist destinations and accommodations based on user preferences.",
    tech: ["NLP", "Django"],
    image: "/placeholder.svg",
    url: "https://github.com/Rifat977/tripadvisor",
  },
  {
    title: "Cparobust",
    description: "A Adnetwork platform for content creators, providing a comprehensive suite of tools for content creation, management, and distribution.",
    tech: ["Django"],
    image: "/cparobust.png",
    url: "https://cparobust.com/dashboard/",
  },
  {
    title: "London Seru",
    description: "A dynamic and user-friendly quiz system supporting multiple question types, designed to enhance interactive learning experiences.",
    tech: ["Javascript", "Python", "Django"],
    image: "/placeholder.svg",
    url: "https://londonseru.com",
  },
  {
    title: "Document Analyzer",
    description: "An intelligent document processing tool leveraging Java and Spring Boot for content analysis, extraction, and summarization.",
    tech: ["Java", "Spring Boot"],
    image: "/placeholder.svg",
    url: "https://github.com/Rifat977/java-spring-app",
  },
  {
    title: "Email Automation",
    description: "An advanced email marketing automation system that integrates with the Gmail API to enhance email deliverability and optimize outreach campaigns.",
    tech: ["Python", "Gmail API", "Automation"],
    image: "/placeholder.svg",
    url: "",
  },
  {
    title: "Object Detection & Face Recognition",
    description: "A real-time object detection and facial recognition system utilizing YOLO and OpenCV, optimized for speed and accuracy.",
    tech: ["Python", "YOLO", "OpenCV"],
    image: "/placeholder.svg",
    url: "https://github.com/Rifat977/object_detection",
  },
];


export default function Projects() {
  return (
    <section className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted rounded-lg shadow-lg overflow-hidden hover-lift"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{project.title}</h3>
                </a>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

