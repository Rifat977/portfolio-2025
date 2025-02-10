"use client";
import { motion } from "framer-motion"

const education = [
  {
    degree: "BSc in Software Engineering",
    institution: "Daffodil International University",
    period: "2022 - 2025",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Govt. Shahid Suhrawardy College",
    period: "2019 - 2020",
  },
]

export default function Education() {
  return (
    <section className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted p-6 rounded-lg shadow-lg hover-lift"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">{edu.degree}</h3>
              <p className="text-foreground/80">{edu.institution}</p>
              <p className="text-foreground/60">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

