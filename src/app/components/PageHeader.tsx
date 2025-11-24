"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  backgroundImage?: string;
}

export default function PageHeader({ title, backgroundImage = "/default-header.jpg" }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative h-64 md:h-80 bg-gradient-to-r from-[#D62027] to-[#B81D23] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white text-center">
        {title}
      </h1>
    </motion.div>
  );
}


