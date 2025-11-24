"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Search,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [corporateDropdownOpen, setCorporateDropdownOpen] = useState(false);
  const [referencesDropdownOpen, setReferencesDropdownOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Row 1: Top Bar - Dark Red Background */}
      <div className="bg-[#a6181d] text-white py-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-2">
            {/* Left Content */}
            <div className="flex items-center space-x-4 flex-wrap">
              <div className="flex items-center space-x-1.5">
                <Mail size={12} />
                <span>bilgi@truvanakliyat.com.tr</span>
              </div>
              <div className="hidden md:flex items-center space-x-1.5">
                <MapPin size={12} />
                <span>Eypsultan Mahallesi Ötüken Sokak No: 2/2 Sancaktepe / İstanbul</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Phone size={12} />
                <span>444 9 761</span>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex items-center space-x-4">
              {/* Social Icons */}
              <div className="hidden lg:flex items-center space-x-2">
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                  <Facebook size={14} />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                  <Instagram size={14} />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Pinterest">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19c-.721 0-1.418-.109-2.076-.312.286-.465.713-1.227.95-1.878.092-.35.558-2.215.558-2.215s.143.285.457.465c.364.225.819.337 1.311.337 1.725 0 2.893-1.178 2.893-2.75 0-1.425-1.15-2.425-2.75-2.425-1.9 0-2.875.95-2.875 2.05 0 .75.285 1.25.75 1.5.082.05.093.093.068.15l-.225.9c-.025.1-.075.125-.15.075-.6-.275-1-1.125-1-2.025 0-1.475 1.075-2.825 3.1-2.825 1.625 0 2.825 1.15 2.825 2.7 0 1.625-1.025 3-2.525 3-.5 0-.975-.275-1.125-.625 0 0-.275 1.1-.325 1.35-.1.4-.375.9-.6 1.25-.55.95-1.35 1.9-1.35 2.55 0 .5.15.95.4 1.25-1.5-.075-2.9-.8-3.85-1.9-.95-1.1-1.45-2.5-1.45-4 0-3.3 2.4-6.1 5.75-6.5.65-.075 1.3-.1 1.95-.1s1.3.025 1.95.1c3.35.4 5.75 3.2 5.75 6.5 0 3.9-3.15 7.1-7.05 7.1z" />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
                  <Twitter size={14} />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Youtube">
                  <Youtube size={14} />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                  <Linkedin size={14} />
                </a>
              </div>

              {/* Text Links */}
              <Link href="/iletisim" className="hover:opacity-80 transition-opacity hidden md:block">
                Ücretsiz Keşif İste
              </Link>
              <Link href="/iletisim" className="hover:opacity-80 transition-opacity hidden md:block">
                İletişim
              </Link>

              {/* Search Icon */}
              <button className="hover:opacity-80 transition-opacity" aria-label="Ara">
                <Search size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Main Navbar - Primary Red Background */}
      <nav className={`sticky top-0 left-0 right-0 z-40 bg-[#d62027] shadow-md transition-all duration-300 ${isScrolled ? "shadow-lg" : ""
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              {!logoError ? (
                <div className="bg-white/95 rounded-lg px-2 py-1 shadow-lg">
                  <Image
                    src="/turuvalogo.png"
                    alt="Truva Nakliyat Logo"
                    width={150}
                    height={50}
                    className="h-10 md:h-12 w-auto"
                    onError={() => setLogoError(true)}
                    priority
                  />
                </div>
              ) : (
                <span className="text-white text-xl font-bold">Truva Nakliyat</span>
              )}
            </Link>

            {/* Navigation Links - Center */}
            <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
              <Link href="/" className="text-white hover:opacity-80 transition-opacity font-bold">
                Anasayfa
              </Link>

              {/* Corporate Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCorporateDropdownOpen(true)}
                onMouseLeave={() => setCorporateDropdownOpen(false)}
              >
                <button className="text-white hover:opacity-80 transition-opacity font-bold flex items-center space-x-1">
                  <span>Kurumsal</span>
                  <ChevronDown size={16} />
                </button>

                {corporateDropdownOpen && (
                  <div className="absolute top-0 left-0 w-56 z-[60] pt-10">
                    <div className="absolute top-0 left-0 right-0 h-10 bg-transparent pointer-events-none" />
                    <div className="bg-white rounded-lg shadow-xl py-2 border border-gray-100 mt-2">
                      <Link
                        href="/hakkimizda"
                        className="block px-4 py-2 text-[#1a2332] hover:bg-gray-100 transition-colors"
                        onClick={() => setCorporateDropdownOpen(false)}
                      >
                        Hakkımızda
                      </Link>
                      <Link
                        href="/sikca-sorulan-sorular"
                        className="block px-4 py-2 text-[#1a2332] hover:bg-gray-100 transition-colors"
                        onClick={() => setCorporateDropdownOpen(false)}
                      >
                        Sıkça Sorulan Sorular
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button className="text-white hover:opacity-80 transition-opacity font-bold flex items-center space-x-1">
                  <span>Hizmetler</span>
                  <ChevronDown size={16} />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-0 left-0 w-56 z-[60] pt-10">
                    <div className="absolute top-0 left-0 right-0 h-10 bg-transparent pointer-events-none" />
                    <div className="bg-white rounded-lg shadow-xl py-2 border border-gray-100 mt-2">
                      <Link
                        href="/evden-eve-nakliyat"
                        className="block px-4 py-2 text-[#1a2332] hover:bg-gray-100 transition-colors"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        Evden Eve Nakliyat
                      </Link>
                      <Link
                        href="/sehirler-arasi-nakliyat"
                        className="block px-4 py-2 text-[#1a2332] hover:bg-gray-100 transition-colors"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        Şehirler Arası Nakliyat
                      </Link>
                      <Link
                        href="/sehir-ici-nakliyat"
                        className="block px-4 py-2 text-[#1a2332] hover:bg-gray-100 transition-colors"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        Şehir İçi Nakliyat
                      </Link>
                      <Link
                        href="/parca-esya-tasima"
                        className="block px-4 py-2 text-[#1a2332] hover:bg-gray-100 transition-colors"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        Parça Eşya Taşıma
                      </Link>
                      <Link
                        href="/asansorlu-nakliyat"
                        className="block px-4 py-2 text-[#1a2332] hover:bg-gray-100 transition-colors"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        Asansörlü Nakliyat
                      </Link>
                      <Link
                        href="/ofis-tasima"
                        className="block px-4 py-2 text-[#1a2332] hover:bg-gray-100 transition-colors"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        Ofis Taşıma
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* References Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setReferencesDropdownOpen(true)}
                onMouseLeave={() => setReferencesDropdownOpen(false)}
              >
                <button className="text-white hover:opacity-80 transition-opacity font-bold flex items-center space-x-1">
                  <span>Referanslar</span>
                  <ChevronDown size={16} />
                </button>

                {referencesDropdownOpen && (
                  <div className="absolute top-0 left-0 w-56 z-[60] pt-10">
                    <div className="absolute top-0 left-0 right-0 h-10 bg-transparent pointer-events-none" />
                    <div className="bg-white rounded-lg shadow-xl py-2 border border-gray-100 mt-2">
                      <Link
                        href="/referanslar/markalar"
                        className="block px-4 py-2 text-[#1a2332] hover:bg-gray-100 transition-colors"
                        onClick={() => setReferencesDropdownOpen(false)}
                      >
                        Markalar
                      </Link>
                      <Link
                        href="/referanslar/musteri-yorumlari"
                        className="block px-4 py-2 text-[#1a2332] hover:bg-gray-100 transition-colors"
                        onClick={() => setReferencesDropdownOpen(false)}
                      >
                        Müşteri Yorumları
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/esya-depolama" className="text-white hover:opacity-80 transition-opacity font-bold">
                Eşya Depolama
              </Link>
              <Link href="/nasil-calisiyoruz" className="text-white hover:opacity-80 transition-opacity font-bold">
                Nasıl Çalışıyoruz
              </Link>
              <Link href="/iletisim" className="text-white hover:opacity-80 transition-opacity font-bold">
                İletişim
              </Link>
            </div>

            {/* Teklif Al Button - Right */}
            <div className="flex items-center space-x-4">
              <Link
                href="/teklif-al"
                className="bg-white text-[#d62027] hover:bg-gray-100 px-6 py-2.5 rounded-full font-bold transition-colors hidden md:block"
              >
                Teklif Al
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#d62027] border-t border-[#a6181d]">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link href="/" className="block text-white py-2 hover:opacity-80 font-bold" onClick={() => setMobileMenuOpen(false)}>
                Anasayfa
              </Link>
              <div className="space-y-1">
                <div className="text-white py-2 font-bold">Kurumsal</div>
                <Link href="/hakkimizda" className="block text-white/80 py-1 pl-4 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Hakkımızda
                </Link>
                <Link href="/sikca-sorulan-sorular" className="block text-white/80 py-1 pl-4 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Sıkça Sorulan Sorular
                </Link>
              </div>
              <div className="space-y-1">
                <div className="text-white py-2 font-bold">Hizmetler</div>
                <Link href="/evden-eve-nakliyat" className="block text-white/80 py-1 pl-4 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Evden Eve Nakliyat
                </Link>
                <Link href="/sehirler-arasi-nakliyat" className="block text-white/80 py-1 pl-4 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Şehirler Arası Nakliyat
                </Link>
                <Link href="/sehir-ici-nakliyat" className="block text-white/80 py-1 pl-4 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Şehir İçi Nakliyat
                </Link>
                <Link href="/parca-esya-tasima" className="block text-white/80 py-1 pl-4 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Parça Eşya Taşıma
                </Link>
                <Link href="/asansorlu-nakliyat" className="block text-white/80 py-1 pl-4 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Asansörlü Nakliyat
                </Link>
                <Link href="/ofis-tasima" className="block text-white/80 py-1 pl-4 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Ofis Taşıma
                </Link>
              </div>
              <div className="space-y-1">
                <div className="text-white py-2 font-bold">Referanslar</div>
                <Link href="/referanslar/markalar" className="block text-white/80 py-1 pl-4 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Markalar
                </Link>
                <Link href="/referanslar/musteri-yorumlari" className="block text-white/80 py-1 pl-4 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Müşteri Yorumları
                </Link>
              </div>
              <Link href="/esya-depolama" className="block text-white py-2 hover:opacity-80 font-bold" onClick={() => setMobileMenuOpen(false)}>
                Eşya Depolama
              </Link>
              <Link href="/nasil-calisiyoruz" className="block text-white py-2 hover:opacity-80 font-bold" onClick={() => setMobileMenuOpen(false)}>
                Nasıl Çalışıyoruz
              </Link>
              <Link href="/iletisim" className="block text-white py-2 hover:opacity-80 font-bold" onClick={() => setMobileMenuOpen(false)}>
                İletişim
              </Link>
              <Link
                href="/teklif-al"
                className="w-full bg-white text-[#d62027] px-6 py-2.5 rounded-full font-bold mt-2 block text-center hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Teklif Al
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
