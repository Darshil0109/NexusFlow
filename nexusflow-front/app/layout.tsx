import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import AddPropertyModal from "./components/modals/AddPropertyModal";
import SearchModal from "./components/modals/SearchModal";

const inter = Inter({ subsets:['latin']});

export const metadata: Metadata = {
  title: "NexusFlow",
  description: "a Property rental service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content =(
    <p>NexusFlow</p>

  )
  return (
    <html lang="en">
      <body
        className={inter.className}
      > 
        <Navbar />
        <div className="pt-32 ">
          {children}
        </div>
        <LoginModal/>
        <SearchModal/>
        <SignupModal/>
        <AddPropertyModal/>
      </body>
    </html>
  );
}
