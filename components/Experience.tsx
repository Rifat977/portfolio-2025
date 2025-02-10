"use client";
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Backend Developer",
    company: "Visionary Tech Solution",
    period: "07/2023 - Present",
    responsibilities: [
      "Developing scalable web applications using Python and Django",
      "Building custom tools and software solutions for clients",
    ],
  },
  {
    title: "Junior Django Developer",
    company: "Xemiron",
    period: "04/2023 - 06/2023",
    responsibilities: [
      "Successfully completed many projects, including GPT-based resume analysis and web automation tools",
    ],
  },
]

export default function Experience() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted p-6 rounded-lg shadow-lg hover-lift"
            >
              <h3 className="text-2xl font-semibold mb-2 text-primary">{exp.title}</h3>
              <p className="text-foreground/70 mb-4">
                {exp.company} | {exp.period}
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

