"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

// Blog posts data (should match the data in page.tsx)
const blogPosts: Record<string, {
  id: string;
  slug: string;
  title: string;
  banner: string;
  date: string;
  image: string;
  slogan?: string;
  phone?: string;
  website?: string;
  content?: string;
  category?: string;
  author?: string;
}> = {
  "istanbul-yatagan-nakliyat": {
    id: "istanbul-yatagan-nakliyat",
    slug: "istanbul-yatagan-nakliyat",
    title: "İstanbul Yatağan Nakliyat",
    banner: "İSTANBUL YATAĞAN NAKLİYAT",
    date: "19 MAYIS 2024",
    image: "/blog1.jpg",
    slogan: "EVİNİZ KADAR TEMİZ VE GÜVENLİ DEPOLAMA",
    category: "İstanbul Hizmet Bölgelerimiz",
    author: "Truva Nakliyat"
  },
  "istanbul-didim-nakliyat": {
    id: "istanbul-didim-nakliyat",
    slug: "istanbul-didim-nakliyat",
    title: "İstanbul Didim Nakliyat",
    banner: "İSTANBUL DİDİM NAKLİYAT",
    date: "15 MAYIS 2024",
    image: "/blog2.jpg",
    phone: "444 9 761",
    website: "www.truvanakliyat.com.tr",
    category: "İstanbul Hizmet Bölgelerimiz",
    author: "Truva Nakliyat"
  },
  "istanbul-bodrum-nakliyat": {
    id: "istanbul-bodrum-nakliyat",
    slug: "istanbul-bodrum-nakliyat",
    title: "İstanbul Bodrum Nakliyat",
    banner: "İSTANBUL BODRUM NAKLİYAT",
    date: "14 MAYIS 2024",
    image: "/blog3.jpg",
    category: "İstanbul Hizmet Bölgelerimiz",
    author: "Truva Nakliyat"
  },
  "istanbul-kusadasi-nakliyat": {
    id: "istanbul-kusadasi-nakliyat",
    slug: "istanbul-kusadasi-nakliyat",
    title: "İstanbul Kuşadası Nakliyat",
    banner: "İSTANBUL KUŞADASI NAKLİYAT",
    date: "13 MAYIS 2024",
    image: "/blog4.jpg",
    phone: "444 9 761",
    slogan: "EVİNİZ KADAR TEMİZ VE GÜVENLİ DEPOLAMA",
    category: "İstanbul Hizmet Bölgelerimiz",
    author: "Truva Nakliyat"
  },
  "istanbul-soke-nakliyat": {
    id: "istanbul-soke-nakliyat",
    slug: "istanbul-soke-nakliyat",
    title: "İstanbul Söke Nakliyat",
    banner: "İSTANBUL SÖKE NAKLİYAT",
    date: "12 MAYIS 2024",
    image: "/blog5.jpg",
    phone: "444 9 761",
    website: "truvanakliyat.com.tr",
    category: "İstanbul Hizmet Bölgelerimiz",
    author: "Truva Nakliyat"
  },
  "istanbul-dalaman-nakliyat": {
    id: "istanbul-dalaman-nakliyat",
    slug: "istanbul-dalaman-nakliyat",
    title: "İstanbul Dalaman Nakliyat",
    banner: "İSTANBUL DALAMAN NAKLİYAT",
    date: "12 MAYIS 2024",
    image: "/blog6.jpg",
    category: "İstanbul Hizmet Bölgelerimiz",
    author: "Truva Nakliyat"
  }
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const [slug, setSlug] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSlug = async () => {
      if (params && typeof params === 'object' && 'then' in params) {
        // It's a Promise
        const resolvedParams = await params;
        setSlug(resolvedParams.slug);
      } else {
        // It's already resolved
        setSlug((params as { slug: string }).slug);
      }
      setIsLoading(false);
    };
    getSlug();
  }, [params]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D62027] mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1a2332] mb-4">Sayfa Bulunamadı</h1>
          <Link href="/" className="text-[#D62027] hover:text-[#B81D23]">
            Anasayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image Section */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 left-0 right-0 bg-[#D62027] text-white px-6 py-3 text-lg font-bold z-10">
          {post.banner}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Author:</span>
                  <span>{post.author || "Truva Nakliyat"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Published on:</span>
                  <span>{post.date}</span>
                </div>
                {post.category && (
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">Published in:</span>
                    <span>{post.category}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-[#D62027] hover:text-[#B81D23] transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Anasayfaya Dön</span>
          </Link>
        </motion.div>

        {/* Blog Post Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Header Image */}
          <div className="relative h-96 mb-8 rounded-xl overflow-hidden shadow-xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bg-[#D62027] text-white px-6 py-3 text-lg font-bold">
              {post.banner}
            </div>
            <div className="absolute bottom-6 left-6 bg-white/90 text-[#1a2332] px-4 py-2 rounded text-sm font-semibold">
              {post.date}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-6">
            {post.title}
          </h1>

          {/* Additional Info */}
          {(post.slogan || post.phone || post.website) && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8 space-y-2">
              {post.slogan && (
                <p className="text-lg font-semibold text-[#1a2332]">{post.slogan}</p>
              )}
              {post.phone && (
                <p className="text-gray-700">Telefon: <span className="font-semibold">{post.phone}</span></p>
              )}
              {post.website && (
                <p className="text-gray-700">Web: <span className="font-semibold">{post.website}</span></p>
              )}
            </div>
          )}

          {/* Content Area */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                İstanbul'un yoğun temposunda yaşayan biri olarak bilirsiniz ki taşınmak, heyecan verici olduğu kadar stresli bir süreç olabilir. Eşyalarınızı güvenle paketlemek, nakliye aracı bulmak, yeni evinize yerleşirken ortaya çıkan zorluklarla başa çıkmak… Tüm bunlar hem fiziksel hem de zihinsel olarak yorucudur. İşte tam da bu noktada devreye giriyor <strong>İstanbul Yatağan Nakliyat</strong>! Şirketimiz, yıllardır edindiği tecrübe ve uzman ekibiyle sizlere İstanbul içinde ve şehirlerarası güvenilir nakliye hizmeti sunar. Biz, yalnızca eşyalarınızı taşımakla kalmayız, aynı zamanda taşınma sürecinizi en az stresle atlatmanıza da yardımcı oluruz.
              </p>

              <h2 className="text-2xl font-bold text-[#1a2332] mt-8 mb-4">
                Deneyimli Kadro ve Profesyonel Hizmet
              </h2>

              <p>
                İstanbul Yatağan Nakliyat olarak, alanında uzman personeller ve eğitimli ekiplerle çalışıyoruz. Her çalışanımız, eşyaların güvenli bir şekilde paketlenmesi, taşınması ve yerleştirilmesi konusunda deneyimlidir.
              </p>

              <h4 className="text-xl font-semibold text-[#1a2332] mt-6 mb-3">
                Bizimle çalışmanın avantajlarından bazıları şunlardır:
              </h4>

              <p>
                Eşyalarınızın taşınma süreci boyunca sigortalı olması sayesinde <strong>içiniz rahat</strong> olabilirsiniz. Herhangi bir hasara karşı sigortanız devreye girecektir. Ekiplerimiz, eşyalarınızın boyutuna ve hassasiyetine göre en uygun paketleme yöntemlerini kullanır. Mobilyalarınız özenle de monte edilir, kırılgan eşyalarınızın güvenliği için özel ambalaj malzemeleri kullanılır.
              </p>

              <p>
                Taşıma öncesinde uzmanlarımız tarafından keşif yapılır ve eşyalarınızın hacmi, taşınma günü ve güzergah gibi tüm detaylar planlanır. Bu sayede taşınma günü herhangi bir aksama yaşanmaz. İsterseniz yeni evinize yerleşme aşamasında da size yardımcı oluyoruz. Mobilyalarınızın kurulumu, beyaz eşyalarınızın yerleştirilmesi gibi hizmetlerden faydalanabilirsiniz. Taşınma sürecinin her aşamasında profesyonel müşteri hizmetlerimiz size destek verir. Aklınıza takılan herhangi bir soru veya sorun için çekinmeden bize ulaşabilirsiniz.
              </p>

              <h2 className="text-2xl font-bold text-[#1a2332] mt-8 mb-4">
                İstanbul Yatağan Nakliyat Hizmetleri
              </h2>

              <p>
                Şirketimiz, geniş yelpazedeki nakliye ihtiyaçlarınıza uygun çözümler sunar. İster evinizi taşıyor olun ister iş yerinizi, uzman ekibimiz size en uygun hizmeti sağlayacaktır.
              </p>

              <p>
                İstanbul Yatağan Nakliyat'ın sunduğu temel hizmetler şunlardır:
              </p>

              <p>
                İstanbul içinde veya şehirlerarası evden eve nakliyat hizmeti veriyoruz. Eşyalarınızın paketlenmesinden yeni evdeki yerleşimine kadar tüm süreci sizin için hallediyoruz. İş yerinizi taşıma sürecini sizin için kolaylaştırıyoruz. Bilgisayar ekipmanları, dosyalar, mobilyalar gibi tüm eşyalarınızın güvenli bir şekilde taşınmasını sağlıyoruz. Az miktarda eşyanızın taşınması gerektiğinde de size yardımcı oluyoruz. Parça eşya taşımacılığı hizmetimiz sayesinde ekonomik bir şekilde eşyalarınızı dilediğiniz yere ulaştırabilirsiniz.
              </p>

              <p>
                Piyano gibi değerli ve hassas eşyaların taşınması konusunda uzman ekibimiz size özel hizmet sunar. Piyanonuzun güvenli bir şekilde taşınması için gerekli ekipman ve tecrübeye sahibiz. Taşınma sırasında eşyalarınızı geçici olarak depolamak isterseniz size güvenli depolama hizmeti sunuyoruz. Depolama alanlarımız, eşyalarınızın hava koşullarından ve hırsızlıktan korunmasını sağlayacak şekilde tasarlanmıştır.
              </p>

              <h2 className="text-2xl font-bold text-[#1a2332] mt-8 mb-4">
                Araç Filomuz ve Güvenli Taşımacılık
              </h2>

              <p>
                Taşınma sürecinde eşyaların güvenli bir şekilde taşınması kadar kullanılan araçların önemi de büyüktür. İstanbul Yatağan Nakliyat olarak, geniş araç filomuz sayesinde her türlü nakliye ihtiyacına cevap veriyoruz. Filomuzda bulunan araçlar, düzenli olarak bakımdan geçirilmekte ve tüm güvenlik önlemleri alınmaktadır. Tecrübeli şoförlerimiz, trafiğin yoğun olduğu İstanbul yollarında bile eşyalarınızı hasarsız bir şekilde taşıma konusunda uzmandır.
              </p>

              <h3 className="text-xl font-semibold text-[#1a2332] mt-6 mb-3">
                İşte araç filomuzun bazı özellikleri:
              </h3>

              <p>
                Eşyalarınızın hacmi ne olursa olsun, size uygun büyüklükte bir kamyon tahsis ediyoruz. Bu sayede hem eşyalarınızın güvenliği sağlanmış oluyor hem de nakliye maliyetleri optimize ediliyor. Eşyalarınızın hava koşullarından etkilenmemesi için kapalı kasalı kamyonlar kullanıyoruz. Araçlarımızın kasaları eşyaların sabitlenmesi için gerekli bağlantı noktalarına sahiptir.
              </p>

              <p>
                Yüksek katlı binalara taşınma durumlarında özel asansörlü kamyonlarımız devreye giriyor. Bu sayede asansörlerin yetersiz olduğu durumlarda bile eşyalarınızın güvenli bir şekilde binaya taşınmasını sağlıyoruz. Tüm araçlarımızda GPS takip sistemi bulunmaktadır. Bu sayede aracın konumunu ve hareketlerini anlık olarak takip edebiliyor, size de taşınma süreci hakkında bilgi verebiliyoruz.
              </p>

              <p>
                Ayrıca, sigortalı taşımacılık hizmeti verdiğimizi de belirtmekte fayda var. Taşıma sırasında oluşabilecek herhangi bir hasara karşı eşyalarınızın sigortası sayesinde maddi olarak korunursunuz.
              </p>

              <p>
                Şimdiye kadar bahsettiklerimizden de anlayabileceğiniz gibi, İstanbul Yatağan Nakliyat ile çalışmanın birçok avantajı vardır. İşte size zaman kazandıracak, stresi azaltacak ve taşınma sürecini kolaylaştıracak hizmetlerimizden bazıları:
              </p>

              <p>
                Uzmanlarımız, taşıma öncesinde ücretsiz olarak keşif hizmeti verir. Eşyalarınızın durumu, taşınma mesafesi, gerekli personel sayısı gibi faktörler göz önünde bulundurularak size en uygun fiyat teklifi sunulur. Taşınma sırasında ihtiyacınız olabilecek tüm ambalaj malzemelerini firmamız temin eder. Bu sayede siz ekstra zaman ve masraf harcamak zorunda kalmazsınız. Mobilyalarınızın taşınma sırasında zarar görmemesi için de monte ve monte hizmetleri sunuyoruz. Ekiplerimiz, mobilyalarınızı özenle de monte eder ve yeni evinizde tekrar kurar.
              </p>

              <p>
                Deneyimli ekiplerimiz sayesinde taşıma işlemi hızlı ve sorunsuz bir şekilde gerçekleştirilir. Taşınma günü oluşabilecek aksaklıkları önlemek için her şey önceden planlanır. İsterseniz yeni evinizi veya iş yerinizi taşıma sonrasında temizlik hizmeti alabilirsiniz. Bu sayede taşınmanın yorgunluğunu atmadan tertemiz bir mekana kavuşabilirsiniz.
              </p>

              <h2 className="text-2xl font-bold text-[#1a2332] mt-8 mb-4">
                İstanbul Yatağan Nakliyat: Fiyat Politikamız ve Ödeme Kolaylığı
              </h2>

              <p>
                İstanbul Yatağan Nakliyat olarak, müşterilerimize en uygun fiyatlarla kaliteli hizmet sunmayı hedefliyoruz. Fiyatlandırmamız, taşınacak eşyaların hacmi, mesafe, gerekli personel sayısı ve talep ettiğiniz ek hizmetler gibi faktörlere göre değişmektedir. Size en uygun fiyat teklifini sunabilmek için ücretsiz keşif hizmeti veriyoruz. Uzmanlarımız keşif sırasında gerekli bilgileri aldıktan sonra size net bir fiyat sunar. İster nakit ister kredi kartı ile ödeme kolaylığı sağlıyoruz.
              </p>

              <h2 className="text-2xl font-bold text-[#1a2332] mt-8 mb-4">
                İstanbul Yatağan Nakliyat ile Yeni Evinize Keyifle Taşının
              </h2>

              <p>
                İstanbul'da güvenilir ve profesyonel bir nakliye şirketi mi arıyorsunuz? O zaman doğru yerdesiniz! İstanbul Yatağan Nakliyat, yılların tecrübesi, uzman ekibi ve geniş hizmet yelpazesi ile sizlere kaliteli hizmet sunar.
              </p>

              <p>
                Bizimle çalışmanın avantajlarından bazıları şunlardır:
              </p>

              <ul className="list-disc list-inside space-y-2 my-6">
                <li>Sigortalı taşımacılık hizmeti ile eşyalarınızın güvencesi</li>
                <li>Deneyimli ekipler sayesinde hızlı ve sorunsuz taşımacılık</li>
                <li>Ücretsiz keşif hizmeti ile en uygun fiyat teklifi</li>
                <li>Farklı ihtiyaçlara uygun çözümler sunan geniş hizmet yelpazesi</li>
                <li>7/24 müşteri desteği ile taşınma sürecinin her anında yanınızdayız</li>
              </ul>

              <p>
                İster evinizi ister iş yerinizi taşıyor olun, İstanbul Yatağan Nakliyat size en iyi hizmeti sunmak için hazırdır. <strong>Hemen bizimle iletişime geçerek ücretsiz keşif hizmeti talep edin ve yeni evinize veya iş yerinize keyifle taşınmanın ayrıcalığını yaşayın!</strong>
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
            </Link>
          </motion.div>

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-[#1a2332] mb-8">Diğer Yazılarımız</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.values(blogPosts)
                .filter((p) => p.slug !== slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/90 text-[#1a2332] px-3 py-1 rounded text-xs font-semibold">
                          {relatedPost.date}
                        </div>
                      </div>
                      <div className="bg-white p-6">
                        <h4 className="text-xl font-bold text-[#1a2332] mb-2 group-hover:text-[#D62027] transition-colors">
                          {relatedPost.title}
                        </h4>
                        {relatedPost.category && (
                          <p className="text-sm text-gray-600">{relatedPost.category}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
}

