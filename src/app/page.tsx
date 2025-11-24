"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CountUp from "react-countup";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  ShieldCheck,
  Truck,
  PackageCheck,
  BadgeCheck,
  ArrowRight,
  ChevronRight,
  Star,
  Quote
} from "lucide-react";

// Background Images for Hero Slider
const backgroundImages = [
  '/slide1.jpg',
  '/slide2.jpg',
  '/slide3.jpg'
];

// Services for Text Rotator
const rotatingServices = [
  "Evden Eve Nakliyat",
  "Ofis Taşıma",
  "Asansörlü Taşımacılık",
  "Şehirler Arası Nakliyat",
  "Parça Eşya Taşıma"
];

// Services Data
const services = [
  {
    title: "Evden Eve Nakliyat",
    description: "Eşyalarınızı özenle paketleyip, güvenli bir şekilde yeni adresinize taşıyoruz."
  },
  {
    title: "Ofis Taşıma",
    description: "İş yerinizin taşınmasında minimum kesinti ile profesyonel hizmet sunuyoruz."
  },
  {
    title: "Asansörlü Sistem",
    description: "Büyük eşyalarınızı asansörlü sistemlerle güvenle taşıyoruz."
  },
  {
    title: "Şehirlerarası Taşıma",
    description: "Türkiye genelinde şehirlerarası güvenli ve hızlı taşımacılık hizmeti."
  }
];

// Blog Posts Data
const blogPosts = [
  {
    id: "istanbul-yatagan-nakliyat",
    slug: "istanbul-yatagan-nakliyat",
    title: "İstanbul Yatağan Nakliyat",
    banner: "İSTANBUL YATAĞAN NAKLİYAT",
    date: "19 MAYIS 2024",
    image: "/blog1.jpg",
    slogan: "EVİNİZ KADAR TEMİZ VE GÜVENLİ DEPOLAMA"
  },
  {
    id: "istanbul-didim-nakliyat",
    slug: "istanbul-didim-nakliyat",
    title: "İstanbul Didim Nakliyat",
    banner: "İSTANBUL DİDİM NAKLİYAT",
    date: "15 MAYIS 2024",
    image: "/blog2.jpg",
    phone: "444 9 761",
    website: "www.truvanakliyat.com.tr"
  },
  {
    id: "istanbul-bodrum-nakliyat",
    slug: "istanbul-bodrum-nakliyat",
    title: "İstanbul Bodrum Nakliyat",
    banner: "İSTANBUL BODRUM NAKLİYAT",
    date: "14 MAYIS 2024",
    image: "/blog3.jpg"
  },
  {
    id: "istanbul-kusadasi-nakliyat",
    slug: "istanbul-kusadasi-nakliyat",
    title: "İstanbul Kuşadası Nakliyat",
    banner: "İSTANBUL KUŞADASI NAKLİYAT",
    date: "13 MAYIS 2024",
    image: "/blog4.jpg",
    phone: "444 9 761",
    slogan: "EVİNİZ KADAR TEMİZ VE GÜVENLİ DEPOLAMA"
  },
  {
    id: "istanbul-soke-nakliyat",
    slug: "istanbul-soke-nakliyat",
    title: "İstanbul Söke Nakliyat",
    banner: "İSTANBUL SÖKE NAKLİYAT",
    date: "12 MAYIS 2024",
    image: "/blog5.jpg",
    phone: "444 9 761",
    website: "truvanakliyat.com.tr"
  },
  {
    id: "istanbul-dalaman-nakliyat",
    slug: "istanbul-dalaman-nakliyat",
    title: "İstanbul Dalaman Nakliyat",
    banner: "İSTANBUL DALAMAN NAKLİYAT",
    date: "12 MAYIS 2024",
    image: "/blog6.jpg"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Corporate/About Section */}
      <CorporateSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Request Form Section */}
      <RequestFormSection />

      {/* Blog Section */}
      <BlogSection />
    </div>
  );
}

// Hero Slider Component
function HeroSlider() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Text rotation interval (every 3 seconds) - FIXED: Proper cleanup
  useEffect(() => {
    let textInterval: NodeJS.Timeout | null = null;

    textInterval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % rotatingServices.length;
        return nextIndex;
      });
    }, 3000);

    return () => {
      if (textInterval) {
        clearInterval(textInterval);
        textInterval = null;
      }
    };
  }, []);

  // Background image rotation interval (every 10 seconds) - FIXED: Proper cleanup
  useEffect(() => {
    let imageInterval: NodeJS.Timeout | null = null;

    imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % backgroundImages.length;
        return nextIndex;
      });
    }, 10000);

    return () => {
      if (imageInterval) {
        clearInterval(imageInterval);
        imageInterval = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen h-[800px] overflow-hidden bg-gray-900">
      {/* Background Image Slider with Smooth Cross-Fade Animation */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <motion.img
            key={`hero-image-${index}`}
            src={image}
            alt={`Hero background ${index + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 1.05
            }}
            transition={{
              duration: 1.5,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Red Overlay Transition - Site theme color for smooth transitions */}
      <motion.div
        className="absolute inset-0 bg-[#D62027]/20 z-[1] pointer-events-none"
        key={`overlay-${currentImageIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0.2] }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />

      {/* Black Overlay - Behind text, above images */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Fixed Text Overlay - Always on top, doesn't move */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          {/* Static Main Title - Text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.02em' }}
          >
            TRUVA NAKLİYAT
          </motion.h1>

          {/* Animated Rotating Services - Alternating Directions */}
          <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center mb-4">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentServiceIndex}
                initial={{
                  x: currentServiceIndex % 2 === 0 ? 100 : -100,
                  opacity: 0
                }}
                animate={{
                  x: 0,
                  opacity: 1
                }}
                exit={{
                  x: currentServiceIndex % 2 === 0 ? -100 : 100,
                  opacity: 0
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
                style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.02em' }}
              >
                {rotatingServices[currentServiceIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-white mb-8 font-medium"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            Özenle Paketlenen Eşyalarınızı Yeni Yerinize Zarar Görmeden Ulaştırıyoruz!
          </motion.p>

          {/* Button - Light Grey with Arrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <Link
              href="/teklif-al"
              className="inline-flex items-center space-x-3 bg-gray-200 hover:bg-[#D62027] text-gray-900 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 group"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              <span>Ücretsiz Fiyat Teklifi Al</span>
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Corporate/About Section
function CorporateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const aboutImages = [
    '/hakkımızda1.jpg',
    '/hakkımızda2.jpg',
    '/hakkımızda3.jpg'
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* Body Text */}
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

            {/* Call to Action Button */}
            <Link
              href="/hakkimizda"
              className="inline-flex items-center space-x-2 text-[#D62027] hover:text-[#B81D23] font-semibold text-lg transition-colors group"
            >
              <span>Devamını Gör</span>
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// Stats Section with Parallax
function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 1500, suffix: "+", label: "Taşınan Ev" },
    { value: 5000, suffix: "+", label: "Mutlu Müşteri" },
    { value: 10, suffix: "+", label: "Yıl Deneyim" },
    { value: 100, suffix: "%", label: "Sigortalı Taşımacılık" }
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80)"
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {isInView && (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// Request Form Section
function RequestFormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    email: "",
    telefon: "",
    hizmet: "",
    alinacakAdres: "",
    alinacakIlce: "",
    alinacakSehir: "",
    gidecekAdres: "",
    gidecekIlce: "",
    gidecekSehir: "",
    detaylar: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, formType: "talep" }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          ad: "",
          soyad: "",
          email: "",
          telefon: "",
          hizmet: "",
          alinacakAdres: "",
          alinacakIlce: "",
          alinacakSehir: "",
          gidecekAdres: "",
          gidecekIlce: "",
          gidecekSehir: "",
          detaylar: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">
            Nakliye Talep Formu
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="ad" className="block text-sm font-medium text-gray-700 mb-2">
                Ad <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="ad"
                name="ad"
                required
                value={formData.ad}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D62027] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label htmlFor="soyad" className="block text-sm font-medium text-gray-700 mb-2">
                Soyad <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="soyad"
                name="soyad"
                required
                value={formData.soyad}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D62027] focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-posta Adresiniz <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D62027] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                Telefon Numaranız <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                required
                value={formData.telefon}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D62027] focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Hizmet Seçimi */}
          <div>
            <label htmlFor="hizmet" className="block text-sm font-medium text-gray-700 mb-2">
              Hizmet <span className="text-red-500">*</span>
            </label>
            <select
              id="hizmet"
              name="hizmet"
              required
              value={formData.hizmet}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D62027] focus:border-transparent outline-none"
            >
              <option value="">Hizmet Seçiniz</option>
              <option value="Evden Eve Nakliyat">Evden Eve Nakliyat</option>
              <option value="Şehirler Arası Nakliyat">Şehirler Arası Nakliyat</option>
              <option value="Şehir İçi Nakliyat">Şehir İçi Nakliyat</option>
              <option value="Parça Eşya Taşıma">Parça Eşya Taşıma</option>
              <option value="Asansörlü Nakliyat">Asansörlü Nakliyat</option>
              <option value="Ofis Taşıma">Ofis Taşıma</option>
            </select>
          </div>

          {/* Pickup Location */}
          <div>
            <h3 className="text-lg font-bold text-[#1a2332] mb-4">EŞYANIN ALINACAĞI YER</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="alinacakAdres" className="block text-sm font-medium text-gray-700 mb-2">
                  Adres
                </label>
                <input
                  type="text"
                  id="alinacakAdres"
                  name="alinacakAdres"
                  value={formData.alinacakAdres}
                  onChange={handleChange}
                  placeholder="Adres"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D62027] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="alinacakIlce" className="block text-sm font-medium text-gray-700 mb-2">
                  İlçe
                </label>
                <input
                  type="text"
                  id="alinacakIlce"
                  name="alinacakIlce"
                  value={formData.alinacakIlce}
                  onChange={handleChange}
                  placeholder="İlçe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D62027] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="alinacakSehir" className="block text-sm font-medium text-gray-700 mb-2">
                  Şehir
                </label>
                <input
                  type="text"
                  id="alinacakSehir"
                  name="alinacakSehir"
                  value={formData.alinacakSehir}
                  onChange={handleChange}
                  placeholder="Şehir"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D62027] focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>

          {/* Delivery Location */}
          <div>
            <h3 className="text-lg font-bold text-[#1a2332] mb-4">EŞYANIN GİDECEĞİ YER</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="gidecekAdres" className="block text-sm font-medium text-gray-700 mb-2">
                  Adres
                </label>
                <input
                  type="text"
                  id="gidecekAdres"
                  name="gidecekAdres"
                  value={formData.gidecekAdres}
                  onChange={handleChange}
                  placeholder="Adres"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D62027] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="gidecekIlce" className="block text-sm font-medium text-gray-700 mb-2">
                  İlçe
                </label>
                <input
                  type="text"
                  id="gidecekIlce"
                  name="gidecekIlce"
                  value={formData.gidecekIlce}
                  onChange={handleChange}
                  placeholder="İlçe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D62027] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="gidecekSehir" className="block text-sm font-medium text-gray-700 mb-2">
                  Şehir
                </label>
                <input
                  type="text"
                  id="gidecekSehir"
                  name="gidecekSehir"
                  value={formData.gidecekSehir}
                  onChange={handleChange}
                  placeholder="Şehir"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D62027] focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <h3 className="text-lg font-bold text-[#1a2332] mb-4">DETAYLAR</h3>
            <textarea
              id="detaylar"
              name="detaylar"
              value={formData.detaylar}
              onChange={handleChange}
              placeholder="Taşınmak istediğiniz tarihi ve belirtmek istediğiniz detayları yazabilirsiniz"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D62027] focus:border-transparent outline-none resize-y"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#D62027] hover:bg-[#B81D23] text-white font-bold py-4 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Gönderiliyor..." : "Talebimi Gönder"}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
            >
              Talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
            </motion.div>
          )}
          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg"
            >
              Bir hata oluştu. Lütfen tekrar deneyin.
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}

// Blog Section
function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">
            Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sektörlerimizde ilk tercih edilen nakliyat firması olma hedefiyle tüm gelişimimizi blogumuzda paylaşıyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Red Banner Overlay */}
                    <div className="absolute top-0 left-0 right-0 bg-[#D62027] text-white px-4 py-2 text-sm font-bold">
                      {post.banner}
                    </div>
                    {/* Date Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/90 text-[#1a2332] px-3 py-1 rounded text-xs font-semibold">
                      {post.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white p-6">
                    <h3 className="text-xl font-bold text-[#1a2332] mb-2">
                      {post.title}
                    </h3>
                    {post.slogan && (
                      <p className="text-sm text-gray-600 mb-2">{post.slogan}</p>
                    )}
                    {post.phone && (
                      <p className="text-sm text-gray-600 mb-1">Tel: {post.phone}</p>
                    )}
                    {post.website && (
                      <p className="text-sm text-gray-600">{post.website}</p>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
