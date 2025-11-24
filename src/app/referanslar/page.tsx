"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import PageHeader from "../components/PageHeader";

export default function ReferanslarPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Referanslar"
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-8 text-center">
            Markalar
          </h2>

          <div className="w-full">
            <img
              src="/referanslar.jpg"
              alt="Referanslarımız"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-[#D62027] to-[#B81D23] rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Bizimle Çalışmak İster misiniz?</h2>
          <p className="text-lg text-gray-300 mb-6">
            Profesyonel taşımacılık hizmetlerimizden yararlanmak için hemen iletişime geçin.
          </p>
          <a
            href="/iletisim"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            İletişime Geç
          </a>
        </motion.div>
      </div>
    </div>
  );
}



