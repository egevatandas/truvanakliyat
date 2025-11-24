import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Email transporter oluştur
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || "info@truvanakliyat.com",
        pass: process.env.SMTP_PASS || "",
      },
    });

    // Email başlığını belirle
    const formType = formData.formType || "talep";
    let emailSubject = "";
    
    if (formType === "teklif") {
      emailSubject = "Yeni Teklif Var - Truva Nakliyat";
    } else {
      // Hizmet bilgisine göre başlık oluştur
      const hizmet = formData.hizmet || "Genel";
      emailSubject = `${hizmet} Yeni Talebiniz Var - Truva Nakliyat`;
    }

    // Email içeriği
    const emailContent = `
      <h2>${formType === "teklif" ? "Yeni Teklif" : "Yeni Nakliye Talebi"}</h2>
      ${formData.hizmet ? `<p><strong>Hizmet:</strong> ${formData.hizmet}</p>` : ""}
      <p><strong>Ad:</strong> ${formData.ad}</p>
      <p><strong>Soyad:</strong> ${formData.soyad}</p>
      <p><strong>E-posta:</strong> ${formData.email}</p>
      <p><strong>Telefon:</strong> ${formData.telefon}</p>
      
      <h3>Eşyanın Alınacağı Yer</h3>
      <p><strong>Adres:</strong> ${formData.alinacakAdres || "Belirtilmemiş"}</p>
      <p><strong>İlçe:</strong> ${formData.alinacakIlce || "Belirtilmemiş"}</p>
      <p><strong>Şehir:</strong> ${formData.alinacakSehir || "Belirtilmemiş"}</p>
      
      <h3>Eşyanın Gideceği Yer</h3>
      <p><strong>Adres:</strong> ${formData.gidecekAdres || "Belirtilmemiş"}</p>
      <p><strong>İlçe:</strong> ${formData.gidecekIlce || "Belirtilmemiş"}</p>
      <p><strong>Şehir:</strong> ${formData.gidecekSehir || "Belirtilmemiş"}</p>
      
      <h3>Detaylar</h3>
      <p>${formData.detaylar || "Detay belirtilmemiş"}</p>
    `;

    // Email gönder
    await transporter.sendMail({
      from: process.env.SMTP_USER || "info@truvanakliyat.com",
      to: "info@truvanakliyat.com",
      subject: emailSubject,
      html: emailContent,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email gönderme hatası:", error);
    return NextResponse.json(
      { success: false, error: "Email gönderilemedi" },
      { status: 500 }
    );
  }
}

