'use client';
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero h-screen flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-r from-secondary via-black to-primary">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold text-white mb-4"
        >
          Welcome to ThriveForce Robotics
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-gray-200 mb-8"
        >
          Innovating the future, one robot at a time.
        </motion.p>
        <motion.a
          href="#about"
          whileHover={{ scale: 1.1 }}
          className="bg-primary text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transition duration-300"
        >
          Learn More
        </motion.a>

        {/* Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
          <motion.div
            className="absolute bg-gradient-to-r from-primary to-transparent w-[300px] h-[300px] rounded-full"
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.div
            className="absolute bg-gradient-to-r from-secondary to-transparent w-[500px] h-[500px] rounded-full"
            animate={{
              x: [100, -100, 100],
              y: [50, -50, 50],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </div>
      </section>
    </div>
  );
}
