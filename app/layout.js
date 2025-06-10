import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahmuda Akter Lopa",
  description:
    "Portfolio of Mahmuda Akter Lopa - Flutter Developer & Designer. Showcasing cross-platform apps, Notion projects, and more.",
  openGraph: {
    images: [
      {
        url: "/lopa.jpg",
        width: 800,
        height: 600,
        alt: "Mahmuda Akter Lopa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/lopa.jpg"],
  },
  icons: {
    icon: "/lopa.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
