import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const nunito = Nunito({
  weight: ["400", "700"],
  style: "normal",
  display: "swap",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Smart Work - Saúde Ocupacional",
  description: "O seu sistema de gestão da saúde ocupacional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
        <ClerkProvider>
      <body
        className={`${nunito.className} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </ClerkProvider>
    </html>
  );
}
