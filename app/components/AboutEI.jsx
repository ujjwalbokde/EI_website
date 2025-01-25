"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  const clubInfo = {
    name: "Engineering India",
    description:
      "Engineering India is an innovative initiative that ignites creativity and unlocks the full potential of students, shaping them into future leaders and innovators. By offering a rich array of activities, it fosters self-confidence, teamwork, and collaborative problem-solving in an engaging and nurturing environment. Embracing Swami Vivekananda's wisdom ''Arise, Awake and stop not till the goal is reached''. Engineering India inspires students to work together, build meaningful connections, and strive for extraordinary achievements.",
    mission:
      "To empower students to drive social change through knowledge, skills, and collaboration. We foster a network of passionate individuals, raise awareness, and support community projects, leveraging technical expertise to make alasting impact",
    values: [
      "Unite students from various backgrounds",
      "Social change, Share ideas, and foster social responsibility.",
      "Inclusivity and diversity in our community",
      "Continuous learning and skill development",
      "To grow and shape a brighter future",
    ],
  };

  const photos = [
    { src: "/placeholder.svg?height=300&width=400", alt: "Add Photos" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Add Photos" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Add Photos" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Add Photos" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Add Photos" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Add Photos" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold text-blue-800 text-center mb-8"
          variants={itemVariants}
        >
          About {clubInfo.name}
        </motion.h1>

        <motion.div
          className=" shadow-lg rounded-lg overflow-hidden mb-12"
          variants={itemVariants}
        >
          <div className="px-6 py-8">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              {clubInfo.description}
            </p>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-6">{clubInfo.mission}</p>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {clubInfo.values.map((value, index) => (
                <li key={index} className="mb-2">
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.h2
          className="text-3xl text-center font-bold text-blue-800 mb-6"
          variants={itemVariants}
        >
          Our Adventures
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className=" shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <p className="text-center py-2 text-sm text-gray-600">
                {photo.alt}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
