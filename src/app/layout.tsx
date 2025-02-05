"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./component/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Sidebar from "./component/Sidebar/Sidebar";
import { usePathname } from 'next/navigation'; 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const hideSidebar = pathname.startsWith("/Auth");
  if(!hideSidebar){
    return (
      <html lang="en">
        <head>
            <title>Author Dashboard</title>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ToastContainer />
        {!hideSidebar && (<Sidebar>
          {children}
        </Sidebar>)}
        </body>
      </html>
    );
  }else{
    return (
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ToastContainer />
          {children}
        </body>
      </html>
    );
  }
}