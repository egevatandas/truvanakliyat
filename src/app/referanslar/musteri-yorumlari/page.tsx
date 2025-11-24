"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import PageHeader from "../../components/PageHeader";

export default function MusteriYorumlariPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      city: "İstanbul - Ankara",
      rating: 5,
      comment: "Çok profesyonel bir ekip. Eşyalarımız hiç zarar görmeden taşındı. Özellikle asansörlü sistem sayesinde 5. kattan hiç zorlanmadan indirdiler. Paketleme konusunda da çok titizler. Teşekkürler Truva Nakliyat!",
      date: "15 Ocak 2024"
    },
    {
      name: "Ayşe Demir",
      city: "İzmir - Antalya",
      rating: 5,
      comment: "Hızlı ve güvenilir hizmet. Fiyatları da çok uygun. Önceden verilen fiyatla iş bitiminde ödediğimiz fiyat aynıydı, hiç sürpriz maliyet çıkmadı. Kesinlikle tavsiye ederim.",
      date: "22 Ocak 2024"
    },
    {
      name: "Mehmet Kaya",
      city: "Bursa - İstanbul",
      rating: 5,
      comment: "Asansörlü sistem sayesinde hiç sorun yaşamadık. Ekip çok nazik ve dikkatliydi. Eşyalarımızın her birini özenle sardılar. Çok memnun kaldık, tekrar tercih ederiz.",
      date: "3 Şubat 2024"
    },
    {
      name: "Zeynep Şahin",
      city: "Ankara - İzmir",
      rating: 5,
      comment: "Ofis taşımamızı çok hızlı ve düzenli yaptılar. İş kesintisi minimum oldu. Ekip sabah erken saatte geldi, akşam saatlerinde her şey yerli yerindeydi. Mükemmel organizasyon!",
      date: "10 Şubat 2024"
    },
    {
      name: "Can Özkan",
      city: "Antalya - İstanbul",
      rating: 5,
      comment: "Sigortalı taşımacılık hizmeti veriyorlar, bu çok önemli. Güvenle taşıdık. Yolda herhangi bir sorun olmadı ama olsaydı bile sigorta kapsamında olduğunu biliyorduk. Çok güvenilir bir firma.",
      date: "18 Şubat 2024"
    },
    {
      name: "Elif Yıldız",
      city: "İstanbul - Bursa",
      rating: 5,
      comment: "Müşteri hizmetleri çok ilgili. Her sorumuza anında cevap verdiler. Taşınma öncesi keşif yaptılar, detaylı bilgi verdiler. Süreç boyunca hiç endişe yaşamadık. Teşekkürler!",
      date: "25 Şubat 2024"
    },
    {
      name: "Fatih Çelik",
      city: "İzmir - Muğla",
      rating: 5,
      comment: "Şehirler arası taşımacılık yapıyorlar ve gerçekten çok hızlılar. İzmir'den Muğla'ya 1 günde taşındık. Eşyalarımız hiç hasar görmedi. Fiyatları da çok makul. Çok memnunuz.",
      date: "5 Mart 2024"
    },
    {
      name: "Selin Arslan",
      city: "İstanbul - İzmit",
      rating: 5,
      comment: "Parça eşya taşıma hizmeti aldık. Sadece birkaç eşyamız vardı ama yine de çok ilgilendiler. Küçük işler için de aynı özeni gösteriyorlar. Çok teşekkür ederiz.",
      date: "12 Mart 2024"
    },
    {
      name: "Burak Kılıç",
      city: "Ankara - İstanbul",
      rating: 5,
      comment: "Montaj ve demontaj hizmeti de veriyorlar. Dolap ve yatak gibi eşyalarımızı söktüler, yeni evde tekrar kurdular. Çok profesyonel çalıştılar. Herkese öneririm.",
      date: "20 Mart 2024"
    },
    {
      name: "Gizem Yücel",
      city: "Bursa - Balıkesir",
      rating: 5,
      comment: "Eşyalarımızı hijyenik ambalajlarla sardılar. Yeni kullanılmış battaniye falan kullanmadılar, her şey temiz ve yeniydi. Bu detay çok önemliydi bizim için. Çok memnun kaldık.",
      date: "28 Mart 2024"
    },
    {
      name: "Emre Doğan",
      city: "İstanbul - Tekirdağ",
      rating: 5,
      comment: "GPS takip sistemi sayesinde aracımızın nerede olduğunu anlık takip edebildik. Bu özellik çok güven verici. Ekip de çok düzenli ve zamanında geldi. Mükemmel hizmet!",
      date: "4 Nisan 2024"
    },
    {
      name: "Deniz Aydın",
      city: "Antalya - İzmir",
      rating: 5,
      comment: "Ücretsiz keşif hizmeti verdiler. Önce evimize geldiler, eşyalarımızı gördüler ve net bir fiyat verdiler. Sonradan hiç ekstra ücret çıkmadı. Çok şeffaf bir firma. Teşekkürler!",
      date: "11 Nisan 2024"
    },
    {
      name: "Cem Öztürk",
      city: "İstanbul - Çanakkale",
      rating: 5,
      comment: "25. kata kadar asansörlü sistemleri var. Bizim ev 18. kattaydı ve hiç sorun yaşamadık. Balkondan direkt araca transfer yaptılar. Çok pratik ve güvenli bir sistem. Herkese tavsiye ederim.",
      date: "19 Nisan 2024"
    },
    {
      name: "Seda Yılmaz",
      city: "Ankara - Eskişehir",
      rating: 5,
      comment: "10 yıllık deneyimleri gerçekten belli oluyor. Her detayı düşünmüşler. Ekip lideri sürekç yanımızdaydı, her şeyi kontrol etti. Hiçbir eşyamız zarar görmedi. Çok profesyonel bir firma. Kesinlikle tekrar tercih ederiz!",
      date: "26 Nisan 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Müşteri Yorumları"
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Müşterilerimizin deneyimleri ve memnuniyetleri bizim için en değerli referanslardır.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <Quote className="text-gray-300" size={24} />
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-[#1a2332]">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.city}</p>
                <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

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

