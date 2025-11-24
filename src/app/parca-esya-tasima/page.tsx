"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function ParcaEsyaTasimaPage() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Parça eşya taşıma nedir?",
            answer: "Parça eşya taşıma, tam bir ev taşınması gerektirmeyen, sadece birkaç eşyanın taşınması durumunda ekonomik bir çözümdür. Az miktarda eşyanızı güvenli ve uygun fiyatla taşıyoruz."
        },
        {
            question: "Parça eşya taşıma fiyatları nasıl?",
            answer: "Parça eşya taşıma, tam ev taşınmasına göre çok daha ekonomiktir. Eşya miktarına ve mesafeye göre fiyatlandırma yapılır. Ücretsiz keşif hizmetimizle size özel fiyat teklifi sunuyoruz."
        },
        {
            question: "Hangi eşyaları taşıyabilirsiniz?",
            answer: "Mobilya, beyaz eşya, elektronik cihazlar, kutu ve koliler gibi tüm eşyalarınızı taşıyabiliriz. Özel ambalajlama ile eşyalarınızı güvenli bir şekilde yeni adresinize ulaştırıyoruz."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Page Header */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <img
                    src="/blog1.jpg"
                    alt="Parça Eşya Taşıma"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                    >
                        Parça Eşya Taşıma
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/90 text-sm md:text-base"
                    >
                        <Link href="/" className="hover:text-white transition-colors">Anasayfa</Link>
                        <span className="mx-2">/</span>
                        <span>Parça Eşya Taşıma</span>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content - Left Side */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="prose prose-lg max-w-none"
                        >
                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <p>
                                    Parça eşya taşıma, tam bir ev taşınması gerektirmeyen durumlar için ideal bir çözümdür. <strong>Truva Nakliyat</strong> olarak, az miktarda eşyanızı ekonomik ve güvenli bir şekilde taşıyoruz. Sadece birkaç eşyanızın taşınması gerektiğinde, tam ev taşınmasına göre çok daha ekonomik olan bu hizmetten faydalanabilirsiniz.
                                </p>

                                <p>
                                    Parça eşya taşımacılığı, ihtiyacınıza göre özelleştirilebilir bir hizmettir. Eşyalarınız özenle paketlenir ve güvenli bir şekilde yeni adresinize ulaştırılır. Parça eşya taşımacılığında da tam sigorta kapsamı ve profesyonel hizmet garantisi sunuyoruz.
                                </p>

                                <h2 className="text-3xl font-bold text-[#1a2332] mt-12 mb-6">
                                    Parça Eşya Taşıma Hizmetlerimiz
                                </h2>

                                <p>
                                    Parça eşya taşıma hizmetimiz, mobilya, beyaz eşya, elektronik cihazlar, kutu ve koliler gibi tüm eşyalarınızı kapsamaktadır. Özel ambalajlama ile eşyalarınızı güvenli bir şekilde yeni adresinize ulaştırıyoruz. Şehir içi ve şehirler arası parça eşya taşımacılığı hizmeti sunuyoruz.
                                </p>

                                <p>
                                    Taşıma öncesinde eşyalarınızın durumu kontrol edilir ve gerekli paketleme işlemleri yapılır. Küçük miktarda eşya taşımacılığında bile profesyonel hizmet standartlarımızdan ödün vermiyoruz. Eşyalarınızın güvenliği için gerekli tüm önlemleri alıyoruz.
                                </p>

                                <div className="my-8">
                                    <img
                                        src="/blog2.jpg"
                                        alt="Parça Eşya Taşıma"
                                        className="w-full h-auto rounded-xl shadow-lg"
                                    />
                                </div>

                                <h2 className="text-3xl font-bold text-[#1a2332] mt-12 mb-6">
                                    Parça Eşya Taşıma Avantajları
                                </h2>

                                <p>
                                    Parça eşya taşımacılığı, tam ev taşınmasına göre çok daha ekonomik bir çözümdür. Sadece ihtiyacınız olan eşyaları taşıyarak maliyet tasarrufu sağlayabilirsiniz. Hızlı ve esnek taşıma çözümleri ile ihtiyacınıza göre özelleştirilmiş hizmet sunuyoruz.
                                </p>

                                <ul className="space-y-4 my-6">
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                                        <span>Ekonomik fiyat avantajı - Tam ev taşınmasına göre çok daha uygun fiyatlar</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                                        <span>Hızlı ve esnek taşıma çözümleri - İhtiyacınıza göre özelleştirilmiş hizmet</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                                        <span>Profesyonel paketleme hizmeti - Eşyalarınızın boyutuna göre özel ambalajlama</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                                        <span>Tam sigorta kapsamı - Eşyalarınız taşıma süreci boyunca sigortalıdır</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                                        <span>Şehir içi ve şehirler arası seçenekler - Türkiye genelinde hizmet</span>
                                    </li>
                                </ul>

                                <h2 className="text-3xl font-bold text-[#1a2332] mt-12 mb-6">
                                    Parça Eşya Taşıma Fiyatları
                                </h2>

                                <p>
                                    Parça eşya taşıma fiyatları, eşya miktarına ve mesafeye göre belirlenir. Tam ev taşınmasına göre çok daha ekonomiktir. Ücretsiz keşif hizmetimizle size özel fiyat teklifi sunuyoruz. Şeffaf fiyat politikamız sayesinde taşıma sürecinde sürpriz maliyetlerle karşılaşmazsınız.
                                </p>

                                <h2 className="text-3xl font-bold text-[#1a2332] mt-12 mb-6">
                                    Parça Eşya Taşıma Sıkça Sorulan Sorular
                                </h2>

                                <div className="space-y-4 mt-8">
                                    {faqs.map((faq, index) => (
                                        <div
                                            key={index}
                                            className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                                        >
                                            <button
                                                onClick={() => toggleFAQ(index)}
                                                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openFaqIndex === index
                                                    ? "bg-[#D62027] text-white"
                                                    : "bg-white text-[#1a2332] hover:bg-gray-50"
                                                    }`}
                                            >
                                                <span className="font-bold text-lg pr-4">{faq.question}</span>
                                                {openFaqIndex === index ? (
                                                    <ChevronUp size={20} className="flex-shrink-0" />
                                                ) : (
                                                    <ChevronDown size={20} className="flex-shrink-0" />
                                                )}
                                            </button>

                                            {openFaqIndex === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="p-6 text-gray-700 leading-relaxed bg-white">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar - Right Side */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-lg shadow-md p-6 sticky top-24"
                        >
                            <h3 className="text-xl font-bold text-[#1a2332] mb-4 pb-3 border-b border-gray-200">
                                Tüm Hizmetlerimiz
                            </h3>
                            <div className="space-y-0">
                                <Link
                                    href="/evden-eve-nakliyat"
                                    className="block bg-gray-100 hover:bg-gray-200 text-[#1a2332] font-bold py-3 px-4 rounded transition-colors border-b border-white"
                                >
                                    Evden Eve Nakliyat
                                </Link>
                                <Link
                                    href="/sehirler-arasi-nakliyat"
                                    className="block bg-gray-100 hover:bg-gray-200 text-[#1a2332] font-bold py-3 px-4 rounded transition-colors border-b border-white"
                                >
                                    Şehirler Arası Nakliyat
                                </Link>
                                <Link
                                    href="/sehir-ici-nakliyat"
                                    className="block bg-gray-100 hover:bg-gray-200 text-[#1a2332] font-bold py-3 px-4 rounded transition-colors border-b border-white"
                                >
                                    Şehir İçi Nakliyat
                                </Link>
                                <Link
                                    href="/parca-esya-tasima"
                                    className="block bg-gray-100 hover:bg-gray-200 text-[#1a2332] font-bold py-3 px-4 rounded transition-colors border-b border-white"
                                >
                                    Parça Eşya Taşıma
                                </Link>
                                <Link
                                    href="/asansorlu-nakliyat"
                                    className="block bg-gray-100 hover:bg-gray-200 text-[#1a2332] font-bold py-3 px-4 rounded transition-colors border-b border-white"
                                >
                                    Asansörlü Nakliyat
                                </Link>
                                <Link
                                    href="/ofis-tasima"
                                    className="block bg-gray-100 hover:bg-gray-200 text-[#1a2332] font-bold py-3 px-4 rounded transition-colors"
                                >
                                    Ofis Taşıma
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-16 bg-[#D62027] rounded-xl p-8 md:p-12 text-center text-white"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Şimdi Hızlı Nakliyat Fiyat Teklifi Almak İster Misiniz?
                        </h2>
                        <Link
                            href="/iletisim"
                            className="inline-flex items-center space-x-2 bg-white text-[#D62027] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors mt-6"
                        >
                            <span>Nakliyat Fiyat Teklifi Al</span>
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

