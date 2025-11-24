"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Phone, Check } from "lucide-react";
import Link from "next/link";
import PageHeader from "../components/PageHeader";

export default function EsyaDepolamaPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pricingPlans = [
    {
      name: "KÜÇÜK DEPO",
      price: 5000,
      oldPrice: 7000,
      features: [
        "m³",
        "Sigortalı Depo",
        "Kişiye Özel Oda",
        "Güvenlikli Depo",
        "Nemsiz Rutbetsiz"
      ],
      isPopular: false
    },
    {
      name: "STANDART DEPO",
      price: 7000,
      oldPrice: 10000,
      features: [
        "m³",
        "Sigortalı Depo",
        "Kişiye Özel Oda",
        "Güvenlikli Depo",
        "Nemsiz Rutbetsiz"
      ],
      isPopular: true
    },
    {
      name: "PREMIUM DEPO",
      price: 9000,
      oldPrice: 13000,
      features: [
        "m³",
        "Sigortalı Depo",
        "Kişiye Özel Oda",
        "Güvenlikli Depo",
        "Nemsiz Rutbetsiz"
      ],
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Eşya Depolama"
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Truva Nakliyat Eşya Depolama Hizmeti */}
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
                Truva Nakliyat Eşya Depolama Hizmeti
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Truva Nakliyat olarak sadece taşımacılık değil, aynı zamanda güvenli ve profesyonel eşya depolama hizmeti de sunuyoruz. 
                Geçici depolama ihtiyacı olan müşterilerimize modern, temiz ve güvenli depolama çözümleri sunuyoruz. 
                Ev, ofis veya kurumsal eşyalarınızı kısa veya uzun vadeli olarak Truva Nakliyat güvencesiyle depolayabilirsiniz.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="/depolama1.jpg"
                alt="Truva Nakliyat Depolama"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Profesyonel Paketleme ve Teslim Süreci */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
            Profesyonel Paketleme ve Teslim Süreci
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Depolama sürecimiz kontrollü ve sistematik bir şekilde yürütülür. Eşyalarınız taşınmadan önce adresinizde ekibimiz tarafından 
            özenle paketlenir, türlerine göre sınıflandırılır ve koruyucu malzemelerle sarılır. Her paketlenen eşya özel olarak numaralandırılır 
            ve depoya girişte kayıt altına alınır. Bu sayede depolama süresi boyunca eşyalarınızın takibi kolaylaşır ve kayıp riski ortadan kaldırılır.
          </p>
        </motion.section>

        {/* Güvenli, Temiz ve İzole Depo Alanları */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
            Güvenli, Temiz ve İzole Depo Alanları
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Truva Nakliyat depolama tesislerimiz, 7/24 güvenlik kameralarıyla izlenmekte ve özel olarak izole edilmiş yapıdadır. 
            Yangın ve nem risklerine karşı korunmuş olan depo alanlarımız, uzun süreli depolamada eşyalarınızın orijinal halini koruması için 
            düzenli havalandırma, nem kontrolü ve haşere önleme sistemleriyle donatılmıştır. Her türlü eşya için uygun sıcaklık ve çevre koşulları 
            sağlanarak maksimum koruma garanti edilir.
          </p>
        </motion.section>

        {/* Kurumsal ve Bireysel Depolama Çözümleri */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 text-center">
            Kurumsal ve Bireysel Depolama Çözümleri
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-8">
            Depolama hizmetimiz yalnızca bireysel müşteriler için değil, aynı zamanda şirket ve ofisler için de uygundur. 
            Ofis taşınmaları sırasında fazla gelen mobilyalar, sezon dışı ürünler veya arşiv belgeleri için güvenli depolama çözümleri sunuyoruz.
          </p>
          <div className="text-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center space-x-2 bg-[#D62027] hover:bg-[#B81D23] text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              <Phone size={20} />
              <span>HEMEN ARAYIN</span>
            </Link>
          </div>
        </motion.section>

        {/* Sigortalı ve Belgeli Depolama Süreci */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 text-center">
            Sigortalı ve Belgeli Depolama Süreci
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            Truva Nakliyat olarak depolama hizmetinde şeffaflık bizim için çok önemlidir. Müşterilerimize teslim aldığımız her eşya için 
            detaylı envanter listesi hazırlanır ve tüm süreç belgelendirilir. Eşyalarınız sigortalı olarak depolanır ve güvenliğiniz garanti altına alınır.
          </p>
        </motion.section>

        {/* Kısa ve Uzun Süreli Depolama Seçenekleri */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 text-center">
            Kısa ve Uzun Süreli Depolama Seçenekleri
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-12">
            Depolama süresi tamamen sizin ihtiyacınıza göre belirlenir. Kısa vadeli taşınma aralıklarında birkaç günlüğüne eşya depolayabileceğiniz gibi, 
            uzun vadeli olarak aylarca veya yıllarca da saklayabilirsiniz.
          </p>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: plan.isPopular ? 1.08 : 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`relative bg-white border-2 rounded-xl overflow-hidden shadow-xl ${
                  plan.isPopular 
                    ? "border-[#D62027] ring-4 ring-red-100" 
                    : "border-gray-200 hover:border-[#D62027]"
                } transition-all duration-300`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="bg-[#D62027] text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg"
                    >
                      EN POPÜLER
                    </motion.div>
                  </motion.div>
                )}

                {/* Floating Animation with Glow Effect */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.6
                  }}
                  className="h-full relative"
                >
                  {/* Glow Effect for Popular Card */}
                  {plan.isPopular && (
                    <motion.div
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-red-100 to-transparent pointer-events-none rounded-xl"
                    />
                  )}

                  {/* Header */}
                  <motion.div 
                    className={`py-5 text-center relative ${
                      plan.isPopular ? "bg-[#D62027]" : "bg-gray-800"
                    }`}
                    whileHover={{
                      backgroundColor: plan.isPopular ? "#B81D23" : "#1a2332"
                    }}
                  >
                    <motion.h3 
                      className="text-xl font-bold text-white"
                      animate={plan.isPopular ? {
                        scale: [1, 1.05, 1]
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    >
                      {plan.name}
                    </motion.h3>
                  </motion.div>

                  {/* Price */}
                  <div className="p-6 text-center bg-gradient-to-b from-white to-gray-50">
                    <div className="mb-2">
                      {plan.oldPrice && (
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="text-gray-400 line-through text-lg mr-2"
                        >
                          {plan.oldPrice.toLocaleString('tr-TR')}₺
                        </motion.span>
                      )}
                      <motion.span 
                        className="text-5xl font-bold text-[#1a2332] block"
                        animate={plan.isPopular ? {
                          scale: [1, 1.05, 1]
                        } : {}}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.4
                        }}
                      >
                        {plan.price.toLocaleString('tr-TR')}₺
                      </motion.span>
                    </div>
                    <motion.p 
                      className="text-gray-600 text-sm font-semibold"
                      animate={{
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      AYLIK
                    </motion.p>
                    {plan.oldPrice && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="mt-2 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold"
                      >
                        %{Math.round((1 - plan.price / plan.oldPrice) * 100)} İNDİRİM
                      </motion.div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="px-6 pb-6 bg-white">
                    <div className="space-y-0 border-t border-gray-200">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.8 + index * 0.1 + featureIndex * 0.05 }}
                          className={`py-4 text-gray-700 text-center flex items-center justify-center ${
                            featureIndex < plan.features.length - 1 ? "border-b border-gray-200" : ""
                          }`}
                        >
                          <Check className="text-green-500 mr-2" size={18} />
                          <span className="font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <div className="px-6 pb-6 bg-white">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/iletisim"
                        className={`block w-full text-center py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg ${
                          plan.isPopular
                            ? "bg-[#D62027] hover:bg-[#B81D23] text-white hover:shadow-xl hover:shadow-red-300"
                            : "bg-white border-2 border-gray-800 hover:bg-[#D62027] hover:border-[#D62027] hover:text-white text-gray-800"
                        }`}
                      >
                        <motion.span
                          animate={plan.isPopular ? {
                            x: [0, 5, 0]
                          } : {}}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="inline-block"
                        >
                          KİRALA →
                        </motion.span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Türkiye Genelinde Güvenli Hizmet */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 text-center">
            Türkiye Genelinde Güvenli Hizmet
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            Truva Nakliyat'ın eşya depolama hizmeti, İstanbul başta olmak üzere Türkiye'nin birçok noktasına hizmet verecek kapasitededir. 
            Profesyonel taşıma ekiplerimiz, eşyalarınızı adresinizden alarak güvenli depolama tesislerimize taşır ve ihtiyacınız olduğunda 
            belirttiğiniz adrese teslim eder.
          </p>
        </motion.section>

        {/* Uygun Fiyat Politikası ve Esnek Çözümler */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 text-center">
            Uygun Fiyat Politikası ve Esnek Çözümler
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            Depolama hizmetlerimizde fiyatlandırma, eşya miktarına, depolama süresine ve ihtiyaç duyulan alan büyüklüğüne göre belirlenir. 
            Ancak Truva Nakliyat olarak her zaman müşteri dostu fiyat politikası ile hizmet veriyoruz. Özel ihtiyaçlarınız için özel çözümler sunuyoruz.
          </p>
        </motion.section>

        {/* Truva Nakliyat Güvencesiyle Eşyalarınız Emin Ellerde */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 text-center">
            Truva Nakliyat Güvencesiyle Eşyalarınız Emin Ellerde
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            Truva Nakliyat eşya depolama hizmeti, taşınma sürecinde geçici bir çözümden çok daha fazlasını sunar. 
            Eşyalarınız bizim için değerlidir; bu nedenle her aşamada profesyonellik ve güvenlik ön plandadır. 
            Depolama tesislerimiz modern, güvenli ve iklim kontrollüdür.
          </p>
        </motion.section>

        {/* Yılların Deneyimiyle Profesyonel Hizmet */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 text-center">
            Yılların Deneyimiyle Profesyonel Hizmet
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-8">
            Yıllardır taşımacılık sektöründe kazandığımız deneyimle, depolama hizmetinde de müşterilerimize güven vermeye devam ediyoruz. 
            Truva Nakliyat ile eşyalarınız emin ellerde. Güvenli, temiz ve düzenli depolama çözümleri için bizimle iletişime geçin.
          </p>
          <div className="text-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center space-x-2 bg-[#D62027] hover:bg-[#B81D23] text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              <Phone size={20} />
              <span>HEMEN ARAYIN</span>
            </Link>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gradient-to-r from-[#D62027] to-[#B81D23] rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Eşya Depolama Hizmeti Almak İster misiniz?</h2>
          <p className="text-lg text-gray-300 mb-6">
            Profesyonel depolama hizmetlerimizden yararlanmak için hemen iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-white hover:bg-gray-100 text-[#D62027] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            İletişime Geç
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

