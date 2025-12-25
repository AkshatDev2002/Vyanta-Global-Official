"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Nav from "@/components/Navbar/Nav";
import Footer from "@/components/Footer/Footer";
import GridBackground from "@/components/Grid/Grid";


export default function ClientLayout({ children }) {
  return (
    <LanguageProvider>
      <main className="page-blur-animate">
        <GridBackground>
        <Nav />
        {children}
        <Footer />
        </GridBackground>
      </main>
    </LanguageProvider>
  );
}