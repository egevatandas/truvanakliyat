"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function SehirlerArasiNakliyatPage() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Şehirler arası taşımacılık ne kadar sürer?",
            answer: "Şehirler arası taşımacılık süresi, mesafeye ve güzergaha bağlı olarak değişmektedir. Genellikle 1-3 gün arasında tamamlanmaktadır. Detaylı bilgi için ücretsiz keşif hizmetimizden faydalanabilirsiniz."
        },
        {
            question: "Şehirler arası taşımacılıkta sigorta var mı?",
            answer: "Evet, tüm şehirler arası taşımacılık hizmetlerimiz tam sigorta kapsamındadır. Eşyalarınızın güvenliği için gerekli tüm önlemleri alıyoruz."
        },
        {
            question: "Hangi şehirlere taşımacılık yapıyorsunuz?",
            answer: "Türkiye genelinde tüm şehirlere şehirler arası taşımacılık hizmeti veriyoruz. İstanbul'dan Ankara, İzmir, Bursa, Antalya, Adana ve diğer tüm şehirlere güvenli taşımacılık yapıyoruz."
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
                    src="/blog3.jpg"
                    alt="Şehirler Arası Nakliyat"
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
                        Şehirler Arası Nakliyat
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/90 text-sm md:text-base"
                    >
                        <Link href="/" className="hover:text-white transition-colors">Anasayfa</Link>
                        <span className="mx-2">/</span>
                        <span>Şehirler Arası Nakliyat</span>
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
                                    Şehirler arası nakliyat, uzun mesafeli taşımacılık gerektiren durumlarda profesyonel çözümler sunmaktadır. <strong>Truva Nakliyat</strong> olarak, Türkiye genelinde şehirler arası taşımacılık hizmeti sunuyoruz. İstanbul'dan tüm şehirlere güvenli, hızlı ve ekonomik taşımacılık çözümleri sağlıyoruz.
                                </p>

                                <p>
                                    Modern araç filomuz ve deneyimli ekibimizle eşyalarınızı güvenli bir şekilde yeni şehrinize ulaştırıyoruz. Taşıma öncesinde eşyalarınız özenle paketlenir ve özel ambalaj malzemeleriyle korunur. Kapalı kasalı araçlarımızla eşyalarınız hava koşullarından etkilenmeden taşınır.
                                </p>

                                <h2 className="text-3xl font-bold text-[#1a2332] mt-12 mb-6">
                                    Şehirler Arası Nakliyat Süreci
                                </h2>

                                <p>
                                    Şehirler arası taşımacılık sürecimiz, detaylı planlama ve profesyonel uygulama ile gerçekleştirilir. İlk olarak eşyalarınızın durumu, miktarı ve taşınacak mesafe göz önünde bulundurularak size özel bir taşıma planı hazırlanır. Bu planlama aşamasında, eşyalarınızın güvenli bir şekilde taşınması için gerekli tüm önlemler alınır.
                                </p>

                                <p>
                                    Taşıma günü, eşyalarınız özenle paketlenir ve kapalı kasalı araçlarımıza yüklenir. GPS takip sistemi sayesinde taşıma sürecini anlık olarak takip edebilir, eşyalarınızın nerede olduğunu öğrenebilirsiniz. Deneyimli şoförlerimiz, uzun yolculuklarda bile eşyalarınızın güvenliğini en üst düzeyde tutar.
                                </p>

                                <div className="my-8">
                                    <img
                                        src="/blog4.jpg"
                                        alt="Şehirler Arası Nakliyat"
                                        className="w-full h-auto rounded-xl shadow-lg"
                                    />
                                </div>

                                <h2 className="text-3xl font-bold text-[#1a2332] mt-12 mb-6">
                                    Şehirler Arası Taşımacılık Avantajları
                                </h2>

                                <p>
                                    Şehirler arası taşımacılıkta <strong>Truva Nakliyat</strong> ile çalışmanın birçok avantajı vardır. Geniş araç filomuz sayesinde her türlü nakliye ihtiyacına cevap veriyoruz. Filomuzda bulunan araçlar, düzenli olarak bakımdan geçirilmekte ve tüm güvenlik önlemleri alınmaktadır.
                                </p>

                                <ul className="space-y-4 my-6">
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                                        <span>Tam sigorta kapsamında güvenli taşımacılık - Eşyalarınızın kırılma, yanma veya diğer maddi hasarlara karşı tam kapsamlı sigorta güvencesi</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                                        <span>GPS takip sistemi ile anlık takip - Tüm araçlarımızda GPS takip sistemi bulunmaktadır, taşıma sürecini anlık olarak takip edebilirsiniz</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                                        <span>Kapalı kasalı araçlarla korumalı taşıma - Eşyalarınızın hava koşullarından etkilenmemesi için kapalı kasalı kamyonlar kullanıyoruz</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                                        <span>Zamanında teslimat garantisi - Verdiğimiz her sözü tutar, taşımalarınızı tam planladığınız saatte başlatır ve zamanında tamamlarız</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="text-[#D62027] flex-shrink-0 mt-1" size={24} />
                                        <span>Uygun fiyat garantisi - Şeffaf fiyat politikası ile başta anlaşılan rakam neyse, ödeyeceğiniz rakam odur</span>
                                    </li>
                                </ul>

                                <h2 className="text-3xl font-bold text-[#1a2332] mt-12 mb-6">
                                    Şehirler Arası Nakliyat Fiyatları
                                </h2>

                                <p>
                                    Şehirler arası nakliyat fiyatları, taşınacak eşyaların hacmi, mesafe, gerekli personel sayısı ve talep ettiğiniz ek hizmetler gibi faktörlere göre belirlenir. Size en uygun fiyat teklifini sunabilmek için ücretsiz keşif hizmeti veriyoruz. Uzmanlarımız keşif sırasında gerekli bilgileri aldıktan sonra size net bir fiyat sunar.
                                </p>

                                <p>
                                    İster nakit ister kredi kartı ile ödeme kolaylığı sağlıyoruz. Şeffaf fiyat politikamız sayesinde taşıma sürecinde sürpriz maliyetlerle karşılaşmazsınız. Başta anlaşılan rakam neyse, ödeyeceğiniz rakam odur.
                                </p>

                                <h2 className="text-3xl font-bold text-[#1a2332] mt-12 mb-6">
                                    Şehirler Arası Nakliyat Sıkça Sorulan Sorular
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

