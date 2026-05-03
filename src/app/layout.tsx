import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";



export const metadata: Metadata = {
  title: 'Lyroa Media | Prestijli Dijital Varlık Yönetimi ve Web Mimarisi',
  description: 'Lyroa Media, işletmelere özel yüksek performanslı web platformları ve dijital varlık yönetimi sunan prestijli bir ajanstır. Dijital zanaatkarlık ile tanışın.',
  openGraph: {
    "title": "Lyroa Media",
    "description": "Prestijli dijital çözümler ve premium web mimarisi.",
    "siteName": "Lyroa Media",
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Lyroa Media",
    "description": "Prestijli dijital çözümler ve premium web mimarisi."
  },
};

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${sourceSans3.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
