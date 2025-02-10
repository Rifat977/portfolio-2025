"use client";

import { motion } from "framer-motion"
import Image from "next/image"
import { FaDownload } from 'react-icons/fa';


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center animated-bg py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">Abdullah Al Mamun</h1>
          <h2 className="text-3xl mb-6 text-primary">Software Engineer</h2>
          <p className="text-xl text-foreground/80 max-w-lg mx-auto md:mx-0">
            Specializing in Backend, AI and Cloud Technologies
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-primary text-background rounded-full hover:bg-secondary transition duration-300 hover-glow flex justify-center items-center"
            onClick={() => window.location.href = '/path-to-your-cv.pdf'} // Replace with your CV path
          >

            <FaDownload className="mr-2" /> {/* Add an icon to the button */}
            <p>Download CV</p>
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-12 md:mt-0"
        >
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="/rifat.png"
              alt="Abdullah Al Mamun"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-primary shadow-lg hover-lift"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

