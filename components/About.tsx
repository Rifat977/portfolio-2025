"use client";
import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center gradient-text"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-foreground/80  mx-auto text-center leading-relaxed"
        >
          I am a Backend Developer skilled in Python, Django, JavaScript, Go (Golang), and Cloud technologies, with a focus on building scalable web applications and cloud-based architectures. Experienced in AWS, DevOps, microservices, RESTful APIs, and AI integration, I leverage Go for high-performance systems. Passionate about solving complex problems, I deliver efficient, innovative solutions through continuous learning and cutting-edge practices.
        </motion.p>
      </div>
    </section>
  )
}

