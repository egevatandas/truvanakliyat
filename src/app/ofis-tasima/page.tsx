"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function OfisTasimaPage() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Ofis taşımacılığı ne kadar sürer?",
            answer: "Ofis taşımacılığı süresi, ofis büyüklüğüne ve eşya miktarına bağlı olarak değişmektedir. Genellikle 1-2 gün içinde tamamlanmaktadır. Minimum kesinti ile profesyonel hizmet sunuyoruz."
        },
        {
            question: "Bilgisayar ve elektronik cihazlar güvenli taşınır mı?",
            answer: "Evet, bilgisayar ekipmanları ve elektronik cihazlarınız özel ambalajlama ile güvenli bir şekilde taşınır. Deneyimli ekibimiz bu konuda uzmanlaşmıştır."
        },
        {
            question: "Ofis taşımacılığında hangi hizmetler dahil?",
            answer: "Ofis taşımacılığında paketleme, taşıma, yerleştirme ve mobilya montajı hizmetleri dahildir. İhtiyacınıza göre ek hizmetler de sunabiliriz."
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
                    src="/blog5.jpg"
                    alt="Ofis Taşıma"
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
                        Ofis Taşıma
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/90 text-sm md:text-base"
                    >
                        <Link href="/" className="hover:text-white transition-colors">Anasayfa</Link>
                        <span className="mx-2">/</span>
                        <span>Ofis Taşıma</span>
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
                                    Ofis taşımacılığı, özel bir uzmanlık gerektiren bir hizmettir. <strong>Truva Nakliyat</strong> olarak, iş yerinizin taşınmasında minimum kesinti ile profesyonel hizmet sunuyoruz. Bilgisayar ekipmanları, dosyalar, mobilyalar gibi tüm eşyalarınızın güvenli bir şekilde taşınmasını sağlıyoruz.
                                </p>

                                <p>
                                    İş yerinizin taşınması sırasında iş akışınızın minimum kesintiye uğraması için detaylı planlama yapıyoruz. Bilgisayar ekipmanlarınız, dosyalarınız ve mobilyalarınız özenle paketlenir ve güvenli bir şekilde yeni ofisinize taşınır. Yeni ofisinizde mobilyalarınızın kurulumu ve yerleştirme işlemleri de firmamız tarafından yapılmaktadır.
                                </p>

                                <h2 className="text-3xl font-bold text-[#1a2332] mt-12 mb-6">
                                    Ofis Taşımacılığı Süreci
                                </h2>

                                <p>
                                    Ofis taşımacılığı sürecimiz, detaylı planlama ile başlar. Taşıma öncesinde ofisinizin durumu kontrol edilir ve gerekli paketleme işlemleri yapılır. Bilgisayar ekipmanları ve elektronik cihazlarınız için özel ambalajlama yapıyoruz. Dosyalarınız ve belgeleriniz güvenli bir şekilde paketlenir.
                                </p>

                                <p>
                                    Taşıma günü, eşyalarınız özenle paketlenir ve araçlarımıza yüklenir. Yeni ofisinize ulaştığımızda, mobilyalarınızın kurulumu ve yerleştirme işlemleri de firmamız tarafından yapılmaktadır. Minimum kesinti ile hızlı bir şekilde taşıma işlemi tamamlanır.
                                </p>

                                <div className="my-8">
                                    <img
                                        src="/blog6.jpg"
                                        alt="Ofis Taşıma"
                                        className="w-full h-auto rounded-xl shadow-lg"
                                    />
                                </div>

                                <h2 className="text-3xl font-bold text-[#1a2332] mt-12 mb-6">
                                    Ofis Taşımacılığı Avantajları
                                </h2>

                                <p>
                                    Ofis taşımacılığı hizmetimiz, iş yerleriniz için birçok avantaj sunmaktadır. Minimum kesinti ile hızlı taşımacılık sağlıyoruz. Bilgisayar ekipmanları ve elektronik cihazlarınız için özel ambalajlama yapıyoruz. Dosyalarınız ve belgeleriniz güvenli bir şekilde taşınır.
                                </p>

                                <ul className="space-y-4 my-6">
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                                        <span>Minimum kesinti ile hızlı taşımacılık - İş akışınızın minimum kesintiye uğraması için detaylı planlama</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                                        <span>Bilgisayar ve elektronik cihazlar için özel ambalajlama - Deneyimli ekibimiz bu konuda uzmanlaşmıştır</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                                        <span>Dosya ve belgelerin güvenli taşınması - Özel paketleme ile belgeleriniz güvenle taşınır</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                                        <span>Mobilya montaj ve yerleştirme hizmeti - Yeni ofisinizde mobilyalarınızın kurulumu yapılır</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                                        <span>Tam sigorta kapsamında güvenli taşımacılık - Tüm ofis ekipmanlarınız sigortalıdır</span>
                                    </li>
                                </ul>

                                <h2 className="text-3xl font-bold text-[#1a2332] mt-12 mb-6">
                                    Ofis Taşımacılığı Fiyatları
                                </h2>

                                <p>
                                    Ofis taşımacılığı fiyatları, ofis büyüklüğüne, eşya miktarına ve talep ettiğiniz ek hizmetlere göre belirlenir. Ücretsiz keşif hizmetimizle size özel fiyat teklifi sunuyoruz. Şeffaf fiyat politikamız sayesinde taşıma sürecinde sürpriz maliyetlerle karşılaşmazsınız.
                                </p>

                                <h2 className="text-3xl font-bold text-[#1a2332] mt-12 mb-6">
                                    Ofis Taşımacılığı Sıkça Sorulan Sorular
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

