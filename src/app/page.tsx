"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="floatingGradient"
        cardStyle="outline"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Ana Sayfa",          id: "#hero"},
        {
          name: "Hizmetler",          id: "#hizmetler"},
        {
          name: "Yönetim",          id: "#yonetim"},
        {
          name: "İletişim",          id: "#contact"},
      ]}
      brandName="Lyroa Media"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Lyroa Media"
      description="İşletmenizi Dijital Dünya Zirvesine Taşıyoruz. Markanızın karakterine özel, yüksek performanslı ve modern web platformları inşa ediyoruz. Sadece bir site değil, dijital bir prestij sunuyoruz."
      buttons={[
        {
          text: "Danışmanlık Al",          href: "https://wa.me/900000000000?text=Merhaba, markam için kurumsal çözüm talebim var."},
      ]}
      slides={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/modern-digital-agency-hero-section-archi-1777799398969-c0098d19.png",          imageAlt: "Dijital prestij odaklı modern ajans ortamı"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/modern-digital-agency-hero-section-archi-1777799491191-2066a2a1.png",          imageAlt: "Yüksek performanslı dijital varlık yönetimi"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/modern-digital-agency-hero-section-archi-1777799499458-5024dd63.png",          imageAlt: "Özel tasarım kurumsal web mimarisi"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/modern-digital-agency-hero-section-archi-1777799507931-fc3a91b7.png",          imageAlt: "Dijital zanaatkarlık ile modern iş süreçleri"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/modern-digital-agency-hero-section-archi-1777799515913-23ab5155.png",          imageAlt: "Kurumsal entegrasyonlar ile stratejik çözümler"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/modern-digital-agency-hero-section-archi-1777799524741-46688a0f.png",          imageAlt: "Lyroa Media ile dijital zirve"},
      ]}
    />
  </div>

  <div id="hizmetler" data-section="hizmetler">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Stratejik Web Tasarımı",          description: "Markanıza özel, kullanıcı deneyimi odaklı, yüksek hızlı dijital arayüzler.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/abstract-representation-of-strategic-web-1777799408212-764b3403.png",          imageAlt: "Web Tasarım"},
        {
          title: "Dijital Varlık Yönetimi",          description: "Markanızın dijital dünyadaki konumunu profesyonel sosyal medya ve içerik stratejileriyle güçlendiriyoruz.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/professional-digital-marketing-dashboard-1777799416611-ba5104e6.png",          imageAlt: "Varlık Yönetimi"},
        {
          title: "Kurumsal Entegrasyonlar",          description: "İş süreçlerinizi hızlandıran, verimliliği artıran özel yazılımsal ve kurumsal çözümler.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/advanced-enterprise-software-integration-1777799424351-259e3bd3.png",          imageAlt: "Kurumsal Yazılım"},
      ]}
      title="Stratejik Dijital Çözümlerimiz"
      description="Dijital zanaatkarlığı kurumsal disiplinle birleştirerek işletmenizin değerini artırıyoruz."
    />
  </div>

  <div id="yonetim" data-section="yonetim">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Yönetim ve Vizyon"
      description="Lyroa Media, kurucusu ve CEO'su Mert Uslu liderliğinde, butik hizmet anlayışını profesyonel disiplinle birleştirir. Her proje, markanın geleceğine yapılan stratejik bir yatırımdır."
      bulletPoints={[
        {
          title: "Stratejik Yaklaşım",          description: "Her işletmeye özgü, hedef odaklı dijital rotalar çiziyoruz."},
        {
          title: "Dijital Zanaatkarlık",          description: "Estetik ve fonksiyonu bir arada tutan premium tasarım dili."},
        {
          title: "Kurumsal Disiplin",          description: "Teslimat süreçlerinde %100 profesyonel takip ve süreklilik."},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/professional-headshot-of-a-visionary-mal-1777799435319-c7ee5345.png"
      imageAlt="CEO Mert Uslu"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="standartlar" data-section="standartlar">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",          value: "100%",          title: "Mobil Uyum",          description: "Tüm ekranlarda kusursuz görüntüleme performansı.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/abstract-representation-of-strategic-web-1777799532149-eda8d4c9.png"},
        {
          id: "2",          value: "24/7",          title: "Güvenlik",          description: "En üst düzey dijital koruma ve kesintisiz destek.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/professional-digital-marketing-dashboard-1777799540913-b9675dac.png"},
        {
          id: "3",          value: "Max",          title: "Hız",          description: "Optimize edilmiş altyapı ile ışık hızında erişim.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/advanced-enterprise-software-integration-1777799549326-a66467e0.png"},
      ]}
      title="Kalite Standartlarımız"
      description="Prestijli markalar için ödün vermediğimiz temel ilkeler."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Lyroa Media ile çalışmak, markamızın dijital dünyadaki algısını tamamen değiştirdi. Stratejik bakış açıları ve zanaatkarlıklarına hayran kaldık."
      rating={5}
      author="Marka Yöneticisi"
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/minimalist-corporate-portrait-of-a-satis-1777799447235-ae712040.png",          alt: "Müşteri 1"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/minimalist-corporate-portrait-of-a-busin-1777799455548-aceb1ce5.png",          alt: "Müşteri 2"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/professional-business-executive-portrait-1777799464074-8dae4c4d.png",          alt: "Müşteri 3"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/portrait-of-a-business-leader-in-a-moder-1777799474267-15a4999b.png",          alt: "Müşteri 4"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXFRrv9AJMPnIxeRji5yKxg2yv/minimalist-professional-headshot-1777799482356-1915fff5.png",          alt: "Müşteri 5"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",          title: "Projeler ne kadar sürede tamamlanır?",          content: "Stratejik planlamamız dahilinde, her projenin kapsamına göre en hızlı teslimatı hedefliyoruz."},
        {
          id: "2",          title: "Dijital varlık yönetimi neleri kapsar?",          content: "Sosyal medya konumlandırması, marka bilinirliği ve hedef kitle analizlerini içerir."},
        {
          id: "3",          title: "Neden premium web mimarisi?",          content: "İşletmenizin kurumsal prestijini yansıtacak, özgün ve yüksek performanslı dijital platformlar için."},
        {
          id: "4",          title: "İletişim süreci nasıl işler?",          content: "Başlangıçta bir danışmanlık görüşmesi yapıyor ve vizyonunuzu dijital gerçekliğe dönüştürüyoruz."},
      ]}
      title="Sıkça Sorulan Sorular"
      description="Hizmetlerimiz ve süreçlerimiz hakkında merak ettikleriniz."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      tag="İletişim"
      title="Dijital Geleceğinizi İnşa Edelim"
      description="Kurumsal çözüm talepleriniz için uzman ekibimizle iletişime geçin. Size 24 saat içerisinde dönüş yapıyoruz."
      buttonText="Danışmanlık Al"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Lyroa Media",          items: [
            {
              label: "Hakkımızda",              href: "#yonetim"},
            {
              label: "Hizmetler",              href: "#hizmetler"},
            {
              label: "İletişim",              href: "#contact"},
          ],
        },
        {
          title: "Yasal",          items: [
            {
              label: "KVKK",              href: "#"},
            {
              label: "Gizlilik Politikası",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Lyroa Media. Tüm hakları saklıdır."
      bottomRightText="Prestijli Dijital Çözümler."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}