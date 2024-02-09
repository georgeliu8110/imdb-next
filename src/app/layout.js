import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from './Providers'
import Navbar from '../components/Navbar'
import SearchBox from '../components/SearchBox'
import {Suspense} from 'react'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is a movie database clone using next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox></SearchBox>
          <Suspense fallback={<div>Loading...</div>}>
          {children}
          </Suspense>
        </Providers>
        </body>
    </html>
  );
}
