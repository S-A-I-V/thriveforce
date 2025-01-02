'use client';

import { motion } from "framer-motion";

const resources = [
  { title: "Team ThriveForce - Notion Page", link: "https://www.notion.so/TeamThriveForce-d04a3f6c4e484570ac83e69570f714d9?pvs=21", description: "ThriveForce team information and updates on Notion." },
  { title: "Workshop PPT", link: "https://docs.google.com/presentation/d/18wIBuR7UvgJ4LjapRMEoRaJwp8yRdH2-IZ8-S0xApQ8/edit#slide=id.g28ea160b811_0_66", description: "Google Slides presentation for workshops." },
  { title: "Combat Robot Spinner Weapon Kinetic Energy Calculator", link: "http://runamok.tech/RunAmok/spincalc.html", description: "Tool to calculate kinetic energy of combat robot spinners." },
  { title: "Bristol Bot Builders Guides - Beetle", link: "https://bristolbotbuilders.com/guides/#beetle_guides", description: "Comprehensive guides for beetleweight robots." },
  { title: "Bristol Bot Builders Guides - Feather", link: "https://bristolbotbuilders.com/guides/#feather_guides", description: "Comprehensive guides for featherweight robots." },
  { title: "Combat Robot Power Switch by Calvin Iba", link: "https://www.thingiverse.com/thing:3081171", description: "Power switch CAD files for combat robots by Calvin Iba." },
  { title: "RPM Calculator", link: "http://mgfic.com/rpm_calc.asp", description: "RPM calculation tool for combat robots." },
  { title: "Timing Belt Calculator", link: "https://www.bbman.com/belt-length-calculator/", description: "Tool for calculating timing belt ratios." },
  { title: "Good Antweight Match Videos", link: "https://www.youtube.com/watch?v=1IJYxJWQH-8", description: "Watch antweight combat robot matches for inspiration." },
];

export default function ResourcePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-black via-gray-900 to-black text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold"
        >
          Resources
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-2 text-lg text-gray-300"
        >
          Discover our curated collection of resources for robotics, calculations, and innovation.
        </motion.p>
      </section>

      {/* Resources Section */}
      <section className="container mx-auto py-16 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="relative group p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-20 transition"></div>
              <h3 className="text-xl font-bold text-primary group-hover:text-white transition mb-2">
                {resource.title}
              </h3>
              <p
                className="text-sm text-gray-300 mb-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition"
              >
                {resource.description}
              </p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary text-black rounded-lg font-semibold hover:bg-secondary hover:text-white transition z-10 relative"
                onClick={(e) => e.stopPropagation()} // Prevent animation div from intercepting
              >
                View Resource
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
