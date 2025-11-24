"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SikcaSorulanSorularPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Verdiğiniz Nakliyat Hizmeti Güvenli Mi?",
      answer: "Truva Nakliyat olarak verdiğimiz tüm hizmetler güvenli ve tamamen sigorta kapsamındadır. Eşyalarınızın güvenliği bizim için en önemli önceliktir. Profesyonel ekibimiz ve modern araç filomuzla her taşıma işlemini en yüksek güvenlik standartlarıyla gerçekleştiriyoruz."
    },
    {
      question: "Eşyalarım İçin Taşıma Sigortası Yapıyor Musunuz?",
      answer: "Elbette, eşyalarınızı kırılma, yanma veya başka bir şekilde maddi hasarlara karşı sigortalıyoruz. Tüm taşımacılık hizmetlerimiz tam sigorta kapsamında olup, eşyalarınızın güvenliği için gerekli tüm önlemleri alıyoruz."
    },
    {
      question: "Eşyalarımızı Güvenli Olarak Taşıyor Musunuz?",
      answer: "Evet, eşyalarınızı en güvenli şekilde taşıyoruz. Deneyimli ekibimiz, özel ambalaj malzemelerimiz ve modern araç filomuzla eşyalarınızın hasar görmemesi için her türlü önlemi alıyoruz. Taşıma öncesinde eşyalarınız özenle paketlenir ve güvenli bir şekilde yerleştirilir."
    },
    {
      question: "Montaj ve Demontaj Hizmeti Veriyor Musunuz?",
      answer: "Tabii ki, her türlü ahşap ve mobilya eşyalarınızı işinin ehli mobilya ustalarımız tarafından eski evinizden zarar gelmeden söküp yeni evinizde zarar gelmeden montajını yapıyoruz. Mobilyalarınızın kurulumu ve demontajı konusunda uzman ekibimiz size yardımcı olacaktır."
    },
    {
      question: "Taşıma Fiyatları Nasıl Belirleniyor?",
      answer: "Taşıma fiyatları, eşyalarınızın hacmi, taşınma mesafesi, gerekli personel sayısı ve talep ettiğiniz ek hizmetler gibi faktörlere göre belirlenmektedir. Size en uygun fiyat teklifini sunabilmek için ücretsiz keşif hizmeti veriyoruz. Uzmanlarımız keşif sırasında gerekli bilgileri aldıktan sonra size net bir fiyat sunar."
    },
    {
      question: "Taşıma İşlemi Ne Kadar Sürer?",
      answer: "Taşıma süreleri genellikle 1 gün ile 3-4 gün arasında değişmektedir. Mesafe, eşya miktarı ve taşınacak yerlerin özelliklerine göre süre değişiklik gösterebilir. Detaylı bilgi ve randevu için bizimle iletişime geçebilirsiniz."
    },
    {
      question: "Şehirler Arası Taşımacılık Yapıyor Musunuz?",
      answer: "Evet, Türkiye genelinde şehirler arası taşımacılık hizmeti veriyoruz. İstanbul'dan tüm şehirlere güvenli ve hızlı taşımacılık hizmeti sunuyoruz. Modern araç filomuz ve deneyimli ekibimizle şehirler arası taşımalarınızı sorunsuz bir şekilde gerçekleştiriyoruz."
    },
    {
      question: "Ofis Taşımacılığı Hizmeti Veriyor Musunuz?",
      answer: "Evet, ofis taşımacılığı hizmeti veriyoruz. İş yerinizin taşınmasında minimum kesinti ile profesyonel hizmet sunuyoruz. Bilgisayar ekipmanları, dosyalar, mobilyalar gibi tüm eşyalarınızın güvenli bir şekilde taşınmasını sağlıyoruz."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D62027] to-[#B81D23]">
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Sıkça Sorulan Sorular
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-sm md:text-base"
          >
            <Link href="/" className="hover:text-white transition-colors">Anasayfa</Link>
            <span className="mx-2">/</span>
            <span>Sıkça Sorulan Sorular</span>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                    openIndex === index
                      ? "bg-[#D62027] text-white"
                      : "bg-white text-[#1a2332] hover:bg-gray-50"
                  }`}
                >
                  <span className="font-bold text-lg pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp size={20} className="flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="flex-shrink-0" />
                  )}
                </button>

                {/* Answer */}
                {openIndex === index && (
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">
              Sorunuza cevap bulamadınız mı?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Eğer cevaplanmış sorular sizin için açıklayıcı değilse veya başka bir sorunuz var ise, bizimle iletişime geçmekten çekinmeyin!
            </p>
            <Link
              href="/iletisim"
              className="inline-block bg-[#D62027] hover:bg-[#B81D23] text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              İletişime Geç
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

