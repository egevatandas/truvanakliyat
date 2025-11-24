"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function EvdenEveNakliyatPage() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Nakliyat süreci nasıl işler?",
            answer: "Nakliyat sürecimiz, ilk olarak ücretsiz bir keşif ziyareti ile başlar. Ardından, taşıma planı ve fiyatlandırma yapılır. Taşıma günü, eşyalarınız özenle paketlenir, taşınır ve yerleştirilir."
        },
        {
            question: "Eşyalarım güvende mi olacak?",
            answer: "Evet, eşyalarınız bizim için çok önemlidir. Profesyonel ekip ve uygun ambalaj malzemeleri kullanarak eşyalarınızı güvenli bir şekilde taşırız. Ayrıca, nakliyat sigortası da sunmaktayız."
        },
        {
            question: "Taşıma fiyatları nasıl belirlenir?",
            answer: "Taşıma fiyatları, taşınacak eşyaların miktarı, taşınacak mesafe, kat sayısı ve ek hizmetler gibi faktörlere bağlı olarak değişir. Ücretsiz keşif ziyareti ile size özel bir fiyat teklifi sunarız."
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
                    alt="Evden Eve Nakliyat"
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
                        Evden Eve Nakliyat
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/90 text-sm md:text-base"
                    >
                        <Link href="/" className="hover:text-white transition-colors">Anasayfa</Link>
                        <span className="mx-2">/</span>
                        <span>Evden Eve Nakliyat</span>
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
                                    Evden eve nakliyat eşya taşımacılığı sektöründe bir çalışma sistemi olarak bilinmektedir. Ancak bu durum nakliye firmalarınca bilinip, eşyalarını taşıtan müşterilerimizce genel itibariyle açıkça bilinmemektedir.
                                </p>

                                <p>
                                    Peki evden eve nakliyat sistemi ne demek? Evden eve nakliyat sistemi mevcut evinizde bulunan kırılabilecek eşyalarınızın mutfak eşyalarınız, yemek takımlarınız, kıyafetleriniz, avizeleriniz, perdeleriniz, beyaz eşyalarınız ve bütün mobilyalarınızın uygun şekilde de monte olması ve taşıma sonrasında ise bu eşyaların montesi işlemidir. <strong>Truva Nakliyat</strong> firması tarafından paketlemeler, kolilemeler ve ambalajlamalar size hiç iş kalmayacak şekilde yapılır.
                                </p>

                                <p>
                                    Sizin bu noktaya kadar hiçbir çalışma yapmanıza gerek yoktur. Eşyalarınızın tamamı firmamız tarafından taşınmaya hazır hale getirildikten sonra eşya taşımacılığı için özel tasarlanmış tamamen kapalı ve içerisi eşya taşımacılığı için uygun tasarlanmış çelik kasalı araçlarımıza yüklenir. Yeni evinize transfer gerçekleştirildikten sonra mobilyalarınızın tamamının montajları ve kaba dizaynı firmamızca yapılır. Beyaz eşyalarınızın uygun şekilde bağlantıları tarafımızca yapılmaktadır.
                                </p>

                                <h2 className="text-3xl font-bold text-[#1a2332] mt-12 mb-6">
                                    Evden Eve Nakliyat İstanbul
                                </h2>

                                <p>
                                    Evden eve nakliyat İstanbul hizmeti ile kolilemiş olan eşyalarınız evinizin hangi bölümünden alınmış ise üzerine yazılan notlara göre yeni evinizde ilgili yere olduğu gibi bırakılır. Bu sistemde sizlere sadece kolilerinizi açıp raf dizaynlarınızı yapmanız kalacaktır. Avize ve perdelerin bağlantıları farklı bir uzmanlık alanı gerektirdiğinden standart evden eve nakliyat sistemine dahil değildir. Ancak müşterilerimizin talepleri doğrultusunda firmamız ekstra hizmetler olarak kolilerin açılıp dizaynlarının yapılması, avize ve perdelerin alanında uzman personelce bağlantılarının yapılması alanlarında da hizmet sunmaktadır.
                                </p>

                                <p>
                                    Evden eve nakliyat özel bir iştir. Bu hususta tercih edeceğiniz firmaları iyi düzeyde araştırmanız gerekmektedir. İstanbul evden eve nakliyat hizmeti verecek firmanın Ulaştırma bakanlığından verilen her türlü belgeye sahip olması gerekmektedir. Truva Nakliyat firmamız tüm bu belgelere sahiptir.
                                </p>

                                <div className="my-8">
                                    <img
                                        src="/blog2.jpg"
                                        alt="Evden Eve Nakliyat İstanbul"
                                        className="w-full h-auto rounded-xl shadow-lg"
                                    />
                                </div>

                                <h2 className="text-3xl font-bold text-[#1a2332] mt-12 mb-6">
                                    Evden Eve Nakliyat Fiyatları
                                </h2>

                                <p>
                                    Evden Eve Nakliyat fiyatları noktasında, ülkemiz kalite standartlarına uygun bir şekilde hizmet veriyoruz. Evinizi taşımak istediğinizde firmamıza farklı iletişim yollarından ulaşabilirsiniz. Bu aşamadan sonra merak ettiğiniz her türlü soruyu cevaplıyoruz. Daha sonra ise evinize gelerek ufak bir çalışma yapıyor ve eşyalarınızı kontrol ediyoruz.
                                </p>

                                <p>
                                    Bu kontrol hem eşyaların sigortalanması için hem de nasıl bir araç ve asansör kullanılacağına karar vermek için yapılıyor. Ev taşınmasında öncelikle eşyalarınızı topluyor ve paketliyoruz. Bu işlem, isteğe bağlı olarak yapılır. Eğer bu hizmeti almak istemezseniz, eşyalarınızı sizin toplayarak paketlemeniz gerekir.
                                </p>

                                <p>
                                    Evden Eve taşıma daha sonra ise evde bulunan mobilyaları de monte hale getiriyor ve taşımasının daha kolay yapılmasını sağlıyoruz. Bütün bu işlemlerden sonra balkon ya da uygun bir pencereye kurmuş olduğumuz asansör ile eşyalarınızı aracın yanına indiriyoruz. Buradan sonra ise araca eşyalarınız yerleştiriliyor ve sabitleme noktaları sayesinde güvenli bir şekilde taşınıyor.
                                </p>

                                <h2 className="text-3xl font-bold text-[#1a2332] mt-12 mb-6">
                                    Sigortalı Evden Eve Nakliyat Hizmetleri
                                </h2>

                                <p>
                                    Eşyalarınızın sizin için önemini biliyor ve gerekli tüm tedbirleri alıyoruz. Fakat her ihtimale karşı nakliyat sigortası yaptığımızı burada tekrar vurgulamak gerekiyor. Bu işlem, taşımadan önce bir eksper tarafından yapılmakta ve eşyalarınızın tamamını kapsamaktadır. Bu noktada özellikle vurgulamak istediğimiz önemli bir husus var; bazı firmalar sigorta olarak araç sigortasını gösteriyor. Bu sigorta, kesinlikle eşyalarınızla ilgili değildir. Bundan dolayı hizmet alırken bu duruma dikkat edin.
                                </p>

                                <p>
                                    Firmamızdan evden eve nakliyat hakkında daha fazla bilgi almak için telefondan bizi arayabilir ve her türlü soruyu çekinmeden iletişim formunuzdan ya da canlı destek hattımızdan sorabilirsiniz.
                                </p>

                                <h2 className="text-3xl font-bold text-[#1a2332] mt-12 mb-6">
                                    Evden Eve Nakliyat Sıkça Sorulan Sorular
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

