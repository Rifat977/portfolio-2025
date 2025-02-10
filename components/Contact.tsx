"use client";

import { motion } from "framer-motion"
import { Github, Code, Linkedin, Mail } from "lucide-react"

const profiles = [
  { name: "GitHub", username: "rifat977", icon: Github, url: "https://github.com/rifat977" },
  { name: "LeetCode", username: "ri_fat", icon: Code, url: "https://leetcode.com/ri_fat/" },
  { name: "Kaggle", username: "rifat936", icon: Linkedin, url: "https://www.kaggle.com/rifat936" },
  { name: "Codeforces", username: "rifat977", icon: Code, url: "https://codeforces.com/profile/rifat977" },
  { name: "Dev.to", username: "rifat977", icon: Code, url: "https://dev.to/rifat977" },
]

export default function Contact() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Online Profiles
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center p-4 bg-muted rounded-lg shadow-lg hover:bg-primary hover:text-background transition duration-300 hover-lift"
            >
              <profile.icon className="w-6 h-6 mr-3 text-primary group-hover:text-background" />
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-background">{profile.name}</h3>
                <p className="text-foreground/70 group-hover:text-background/90">{profile.username}</p>
              </div>
            </motion.a>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:dev.abdullah.mamun@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-primary text-background rounded-full hover:bg-secondary transition duration-300 hover-glow"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}

