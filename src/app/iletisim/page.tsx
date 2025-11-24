"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">
            İletişim
          </h1>
          <p className="text-lg text-gray-600">
            Bize ulaşın, sorularınızı yanıtlayalım.
          </p>
        </motion.div>

        {/* İletişim Bilgileri ve Harita */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sol Taraf - İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg"
          >
            <h2 className="text-2xl font-bold text-[#1a2332] mb-6">İletişim Bilgilerimiz</h2>
            <div className="space-y-4">
              {/* Adres */}
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#D62027] mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Eypsultan Mahallesi Ötüken Sokak No: 2/2 Sancaktepe / İstanbul</span>
              </div>

              {/* Telefon 1 */}
              <div className="flex items-center space-x-3">
                <Phone className="text-[#D62027] flex-shrink-0" size={20} />
                <a href="tel:4449761" className="text-gray-700 hover:text-[#D62027] transition-colors">
                  444 9 761
                </a>
              </div>

              {/* Telefon 2 */}
              <div className="flex items-center space-x-3">
                <Phone className="text-[#D62027] flex-shrink-0" size={20} />
                <a href="tel:905321540995" className="text-gray-700 hover:text-[#D62027] transition-colors">
                  0532 154 09 95
                </a>
              </div>

              {/* Website */}
              <div className="flex items-center space-x-3">
                <Globe className="text-[#D62027] flex-shrink-0" size={20} />
                <a href="https://truvanakliyat.com.tr" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#D62027] transition-colors">
                  truvanakliyat.com.tr
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="text-[#D62027] flex-shrink-0" size={20} />
                <a href="mailto:info@truvanakliyat.com" className="text-gray-700 hover:text-[#D62027] transition-colors">
                  info@truvanakliyat.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Sağ Taraf - Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps?q=Eypsultan+Mahallesi+Ötüken+Sokak+No:+2/2+Sancaktepe+İstanbul&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 rounded-lg"
              title="Truva Nakliyat Konum"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
