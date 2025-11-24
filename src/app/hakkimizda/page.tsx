"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HakkimizdaPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const aboutImages = [
    '/hakkımızda1.jpg',
    '/hakkımızda2.jpg',
    '/hakkımızda3.jpg'
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="py-20 bg-white"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Animated Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[500px] md:h-[600px]"
            >
              {/* Image 1 - Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: -50 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -50, y: -50 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-0 left-0 w-[60%] h-[45%] z-10 shadow-xl"
              >
                <img
                  src={aboutImages[0]}
                  alt="Truva Nakliyat 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>

              {/* Image 2 - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: 50 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -50, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-0 left-0 w-[60%] h-[50%] z-20 shadow-xl"
              >
                <img
                  src={aboutImages[1]}
                  alt="Truva Nakliyat 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>

              {/* Image 3 - Top Right (Overlapping) */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: -50 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 50, y: -50 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-[10%] right-0 w-[55%] h-[55%] z-30 shadow-xl"
              >
                <img
                  src={aboutImages[2]}
                  alt="Truva Nakliyat 3"
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            </motion.div>

            {/* Right - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Section Title */}
              <h3 className="text-lg font-semibold text-[#1a2332] mb-2 pb-2 border-b-2 border-[#D62027] inline-block">
                HAKKIMIZDA
              </h3>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-6 mt-4">
                İstanbul Evden Eve Nakliyat
              </h2>

              {/* Paragraphs */}
              <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
                <p>
                  İstanbul Evden Eve Nakliyat firması Truva Ev & Ofis Taşımacılığı, Uluslararası Nakliyat ve Eşya Depolama Hizmetleri Ltd. Şti. olarak, doğrudan firmamızla çalışarak en hızlı, en kolay ve en konforlu taşınma deneyimini en uygun fiyata yaşayabilirsiniz. Aracısız, doğrudan firmamızla çalışarak hem zaman hem de maliyet tasarrufu sağlayabilirsiniz.
                </p>
                <p>
                  Taşınma işlemlerinizde kurumsal firmaları tercih etmeniz, sorumluluğun kimde olduğunu bilmeniz açısından önemlidir. Eşyalarınızın kim tarafından taşındığını bilmek, güvenli bir taşınma süreci için kritik öneme sahiptir.
                </p>
                <p>
                  Taşınma süreleri genellikle 1 gün ile 3-4 gün arasında değişmektedir. Detaylı bilgi, fiyat teklifi ve randevu için bizimle iletişime geçebilirsiniz.
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">
                    Güven bizim için her şeyin başında gelir. Tüm eşyalarınız, taşıma öncesinde özenle ambalajlanır, zarar görmemesi için sigorta kapsamında taşınır.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">
                    Zaman, en değerli kaynağımızdır. Bu yüzden verdiğimiz her sözü tutar, taşımalarınızı tam planladığınız saatte başlatır ve zamanında tamamlarız.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">
                    Müşteri memnuniyeti ise işimizin temelidir. Her müşterimizle samimi, dürüst ve şeffaf bir iletişim kurar, her aşamada bilgilendirme yaparak süreci birlikte yönetiriz.
                  </p>
                </div>
              </div>

              {/* Button */}
              <Link
                href="/teklif-al"
                className="inline-flex items-center space-x-2 bg-[#D62027] hover:bg-[#B81D23] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>Teklif Al</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}



