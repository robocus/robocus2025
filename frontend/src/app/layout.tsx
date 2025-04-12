import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "@/components/partials/header";
import Footer from "@/components/partials/footer";

const lexend = Lexend({
  variable: "--font-lexend-sans",
  subsets: ["vietnamese"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Robocus 2025",
  description: "Robocus - Sân chơi sáng tạo dành cho học sinh yêu thích công nghệ và robot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
