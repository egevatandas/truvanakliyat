"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TeklifAlPage() {
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
        body: JSON.stringify({ ...formData, formType: "teklif" }),
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
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">
            Teklif Al
          </h1>
          <p className="text-lg text-gray-600">
            Detaylı nakliye talebiniz için formu doldurun, size en kısa sürede dönüş yapalım.
          </p>
        </motion.div>

        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8"
        >
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                {isSubmitting ? "Gönderiliyor..." : "Teklif Al"}
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
        </motion.section>
      </div>
    </div>
  );
}

