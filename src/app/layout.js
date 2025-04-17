import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const avatar = "/Ａvatar.png"; // ✅ 正確方式
import Link from "next/link";
import LinkImg1 from "@/image/帝寶.png";
import { FaInstagram, FaThreads } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CgMail } from "react-icons/cg";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "包依依的數位履歷",
  description: "謝謝來看",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
          className={`${playfair.variable} antialiased bg-[#abb4ec]`}>
      
        
        <div className="w-screen h-screen bg-[#cccce8]/90 backdrop-blur-2xl">
    
        {/* 網站主體內容區 */}
        <div className="w-full h-full overflow-y-auto flex flex-col sm:flex-row gap-5 p-8">
      
          {/* 左側欄 */}
          <div className="min-w-[320px] w-full sm:w-[320px] h-full rounded-2xl bg-white bg-cover bg-no-repeat flex justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden shadow-xl">

          <Link href="/">
            <img
              src="/Avatar.png"
              alt="Avatar"
              className="w-[80px] h-[80px] rounded-full cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </Link>

            <h1 className="mt-2 font-playfair text-m font-semibold">包依依 yybowii</h1>
            <p className="max-w-[380px] text-center">    
              Purple Day 💟 
            </p>

            {/* 社群連結 */}
            <div className="flex gap-2 my-5">
              <a href="https://www.instagram.com/yybowii" target="_blank">
                <div className="bg-white border border-[#abb4ec] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200">
                  <FaInstagram className="text-[#abb4ec] text-xl" />
                </div>
              </a>

              <a href="https://www.facebook.com/share/..." target="_blank">
                <div className="bg-white border border-[#abb4ec] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200">
                  <CiFacebook className="text-[#abb4ec] text-xl" />
                </div>
              </a>

              <a href="https://www.threads.net/@yybowii" target="_blank">
                <div className="bg-white border border-[#abb4ec] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200">
                  <FaThreads className="text-[#abb4ec] text-xl" />
                </div>
              </a>

              <a href="mailto:112405091@g.nccu.edu.tw">
                <div className="bg-white border border-[#abb4ec] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200">
                 <CgMail className="text-[#abb4ec] text-xl" />
                 </div>
              </a>

            </div>

            {/* 頁面切換 */}
              <div className="w-full flex flex-col gap-2">

                <Link href="/about">
                    <div className="w-full h-[84px] bg-[url('/p4.png')] bg-cover bg-center rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-200">
                      <span className="outline-wrapper">
                        <span className="outline-stroke">ABOUT ME</span>
                        <span className="outline-fill">ABOUT ME</span>
                      </span>
                    </div>
                </Link>

                <Link href="/video">
                    <div className="w-full h-[84px] bg-[url('/p5.png')] bg-cover bg-center rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-200">
                      <span className="outline-wrapper">
                        <span className="outline-stroke">VIDEO</span>
                        <span className="outline-fill">VIDEO</span>
                      </span>
                    </div>
                </Link>

                <Link href="/program">
                    <div className="w-full h-[84px] bg-[url('/p4.png')] bg-cover bg-center rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-200">
                      <span className="outline-wrapper">
                        <span className="outline-stroke">PROGRAM</span>
                        <span className="outline-fill">PROGRAM</span>
                      </span>
                    </div>
                </Link>

                <Link href="/design">
                    <div className="w-full h-[84px] bg-[url('/p5.png')] bg-cover bg-center rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-200">
                      <span className="outline-wrapper">
                        <span className="outline-stroke">DESIGN</span>
                        <span className="outline-fill">DESIGN</span>
                      </span>
                    </div>
                </Link>
              </div>
            </div>

            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
