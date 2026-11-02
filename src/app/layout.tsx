
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Prestige Homeware | Elevate Your Home",
    template: "%s | Prestige Homeware",
  },
  description:
    "Discover stylish, durable and affordable homeware at Prestige Homeware. Quality you can trust, with nationwide delivery across Zimbabwe.",
  keywords: [
    "Prestige Homeware",
    "Homeware Zimbabwe",
    "Furniture",
    "Home Decor",
    "Harare Homeware",
  ],
  openGraph: {
    title: "Prestige Homeware | Elevate Your Home",
    description:
      "Stylish. Durable. Affordable. Explore quality homeware with nationwide delivery.",
    siteName: "Prestige Homeware",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#111111] antialiased">
        {children}
      </body>
    </html>
  );
}
