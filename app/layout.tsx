import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { fetchMetadata } from "@/app/lib/data";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export function generateMetadata(): Metadata {
  const metadata = fetchMetadata();
  return metadata;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
