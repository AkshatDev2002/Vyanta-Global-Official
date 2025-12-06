import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Vyanta Global",
  description: "Your description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <main className="page-blur-animate"> 
          {children}
          </main>
      </body>
    </html>
  );
}

