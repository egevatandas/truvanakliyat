"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  return (
    <footer className="bg-[#D62027] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo ve Açıklama - Sol Taraf */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center space-x-3">
                {!logoError ? (
                  <Image
                    src="/turuvalogo.png"
                    alt="Truva Nakliyat Logo"
                    width={200}
                    height={60}
                    className="h-12 w-auto brightness-0 invert"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="text-white text-2xl font-bold">Truva Nakliyat</span>
                )}
              </div>
            </Link>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              Truva Nakliyat, yılların verdiği deneyim ve profesyonel ekibiyle evden eve nakliyat,
              ofis taşıma, şehirler arası nakliyat ve depolama hizmetleri sunmaktadır.
              Müşteri memnuniyetini ön planda tutarak, güvenilir ve kaliteli hizmet anlayışıyla
              sektörde öncü konumdadır.
            </p>
          </div>

          {/* Kurumsal Linkler */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">KURUMSAL</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/referanslar" className="hover:text-white transition-colors">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link href="/nasil-calisiyoruz" className="hover:text-white transition-colors">
                  Nasıl Çalışıyoruz
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/teklif-al" className="hover:text-white transition-colors">
                  Teklif Al
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">HİZMETLERİMİZ</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Evden Eve Nakliyat
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Şehir İçi Nakliyat
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Şehirler Arası Nakliyat
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Sigortalı Nakliyat
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Ofis Taşımacılığı
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Depolama Hizmeti
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Parça Eşya Taşıma
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Asansörlü Nakliyat
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">İLETİŞİM</h3>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-white mt-1 flex-shrink-0" />
                <span>Eypsultan Mahallesi Ötüken Sokak No: 2/2 Sancaktepe / İstanbul</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-white flex-shrink-0" />
                <a href="mailto:info@truvanakliyat.com" className="hover:text-white transition-colors">
                  info@truvanakliyat.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-white flex-shrink-0" />
                <a href="tel:4449761" className="hover:text-white transition-colors">
                  444 9 761
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-white flex-shrink-0" />
                <span>08:00 - 20:00</span>
              </li>
            </ul>

            {/* Sosyal Medya */}
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-3 text-white">SOSYAL MEDYA</h4>
              <div className="flex items-center space-x-3">
                <a
                  href="https://facebook.com/truvanakliyat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-white" />
                </a>
                <a
                  href="https://instagram.com/truvanakliyat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a
                  href="https://twitter.com/truvanakliyat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} className="text-white" />
                </a>
                <a
                  href="https://youtube.com/truvanakliyat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Kısım - Yasal Linkler ve Copyright */}
        <div className="border-t border-white/20 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 text-sm text-gray-200">
              <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">
                Kişisel Verilerin Korunması
              </Link>
              <Link href="/cerez-politikasi" className="hover:text-white transition-colors">
                Çerez Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
            <div className="text-sm text-gray-200">
              Copyright © {new Date().getFullYear()} Truva Nakliyat - Tüm Hakları Saklıdır.
            </div>
          </div>

          {/* Pixelcore Badge - Ortada */}
          <div className="flex justify-center mt-4">
            <a
              href="https://pixelcore.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 rounded-full px-4 py-2 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logopixel.png"
                  alt="Pixelcore Logo"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </div>
              <span className="text-white font-semibold text-sm">Pixelcore</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
