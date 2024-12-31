'use client';

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Ankesh Pandey",
    role: "Team Lead",
    image: "/team1.jpg",
    email: "ankeshpandey.com",
    contact: "+91 1234567890",
  },
  {
    name: "Saideep Verma",
    role: "Team Vice Lead",
    image: "/team2.jpg",
    email: "sv.com",
    contact: "+91 9870129349",
  },

];

export default function TeamPage() {
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
          Meet Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-2 text-lg text-gray-300"
        >
          The brilliant minds behind ThriveForce Robotics.
        </motion.p>
      </section>

      {/* Team Section */}
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
          {teamMembers.map((member, index) => (
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
              className="relative group p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-20 transition"></div>
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-700 group-hover:border-primary transition"
              />
              <h3 className="text-xl font-bold text-primary group-hover:text-white transition mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-500 group-hover:text-gray-300 transition">
                <a
                  href={`mailto:${member.email}`}
                  className="text-primary group-hover:text-white hover:underline"
                >
                  {member.email}
                </a>
              </p>
              <p className="text-sm text-gray-500 group-hover:text-gray-300 transition">
                <a
                  href={`tel:${member.contact.replace(/\s+/g, "")}`}
                  className="text-primary group-hover:text-white hover:underline"
                >
                  {member.contact}
                </a>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
