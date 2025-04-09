import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";
import dynamic from "next/dynamic";
import { Loader2Icon } from "lucide-react";
import Navbar from "./_components/Navbar";

const Sidebar = dynamic(() => import("./_components/Sidebar"), { ssr: false, loading: () => <div className="w-[264px] bg-zinc-600 min-h-screen hidden md:flex items-center justify-center"><Loader2Icon className="animate-spin text-[#78b49a]" /></div>, });

const nunito = Nunito({
  weight: ["400", "700"],
  style: "normal",
  display: "swap",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Smart Work - Saúde Ocupacional",
  keywords: ["saúde ocupacional", "gestão de saúde", "segurança no trabalho"],
  description: "O seu sistema de gestão da saúde ocupacional",
  authors: [{ name: "Marcio David", url: "https://md-webdeveloper.vercel.app" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
      <body
        className={`${nunito.className} antialiased md:flex  w-full min-h-screen`}
      >
        <Navbar />
        <Sidebar />
        {children}
        <Toaster />
      </body>
    </ClerkProvider>
    </html>
  );
}
