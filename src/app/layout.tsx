import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit-sans",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artichoke School",
  description: "A school with a ton of hierarchy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${kanit.variable} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
