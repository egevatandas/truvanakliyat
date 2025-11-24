"use client";

import { Send, MessageCircle, Instagram, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

// Teklif Al Button Component
function TeklifAlButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed right-0 top-[calc(50%-144px)] z-50">
      <Link
        href="/teklif-al"
        className="group relative bg-[#D62027] text-white rounded-l-lg shadow-lg overflow-hidden transition-all duration-300 flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Teklif Al"
      >
        <div className="flex items-center w-full">
          <div className="p-4 flex-shrink-0">
            <Send size={24} />
          </div>
          <motion.div
            initial={false}
            animate={{
              width: isHovered ? "auto" : "0px",
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="whitespace-nowrap overflow-hidden"
            style={{ minWidth: isHovered ? "120px" : "0px" }}
          >
            <span className="font-semibold pr-4">Teklif Al</span>
          </motion.div>
        </div>
      </Link>
    </div>
  );
}

// WhatsApp Button Component
function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed right-0 top-[calc(50%-48px)] z-50">
      <a
        href="https://wa.me/905321540995"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-[#25D366] text-white rounded-l-lg shadow-lg overflow-hidden transition-all duration-300 flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="WhatsApp"
      >
        <div className="flex items-center w-full">
          <div className="p-4 flex-shrink-0">
            <MessageCircle size={24} />
          </div>
          <motion.div
            initial={false}
            animate={{
              width: isHovered ? "auto" : "0px",
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="whitespace-nowrap overflow-hidden"
            style={{ minWidth: isHovered ? "120px" : "0px" }}
          >
            <span className="font-semibold pr-4">WhatsApp</span>
          </motion.div>
        </div>
      </a>
    </div>
  );
}

// Phone Button Component
function PhoneButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed right-0 top-[calc(50%+48px)] z-50">
      <a
        href="tel:905334279596"
        className="group relative bg-[#D62027] text-white rounded-l-lg shadow-lg overflow-hidden transition-all duration-300 flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Telefon"
      >
        <div className="flex items-center w-full">
          <div className="p-4 flex-shrink-0">
            <Phone size={24} />
          </div>
          <motion.div
            initial={false}
            animate={{
              width: isHovered ? "auto" : "0px",
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="whitespace-nowrap overflow-hidden"
            style={{ minWidth: isHovered ? "120px" : "0px" }}
          >
            <span className="font-semibold pr-4">Ara</span>
          </motion.div>
        </div>
      </a>
    </div>
  );
}

// Instagram Button Component
function InstagramButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed right-0 top-[calc(50%+144px)] z-50">
      <a
        href="https://instagram.com/truvanakliyat"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-gradient-to-b from-purple-600 via-pink-500 to-orange-500 text-white rounded-l-lg shadow-lg overflow-hidden transition-all duration-300 flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Instagram"
      >
        <div className="flex items-center w-full">
          <div className="p-4 flex-shrink-0">
            <Instagram size={24} />
          </div>
          <motion.div
            initial={false}
            animate={{
              width: isHovered ? "auto" : "0px",
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="whitespace-nowrap overflow-hidden"
            style={{ minWidth: isHovered ? "120px" : "0px" }}
          >
            <span className="font-semibold pr-4">Instagram</span>
          </motion.div>
        </div>
      </a>
    </div>
  );
}

// Main Component
export default function FloatingSidebar() {
  return (
    <>
      <TeklifAlButton />
      <WhatsAppButton />
      <PhoneButton />
      <InstagramButton />
    </>
  );
}


