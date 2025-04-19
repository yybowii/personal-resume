"use client";

import Design1 from "@/image/12.png";
import Design2 from "@/image/13.png";
import Design3 from "@/image/14.png";
import Design4 from "@/image/15.png";
import Design5 from "@/image/16.png";
import Image from "next/image";

export default function Design() {
  return (
    <div className="w-full h-full overflow-y-auto bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6">

      {/* 標題與副標題 */}
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold mb-2">平面設計作品</h1>
        <h3 className="text-base mb-4">
          在大學很開心可以學習到設計，但我的作品非常的少，並且很常覺得自己沒想法。不過可以做出東西來都讓我覺得很快樂！
        </h3>
      </div>

      <div className="flex flex-col w-full gap-6 mt-3">

        {/* 第一排：Design3 + Design4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[{ src: Design3, title: "第27屆政大廣電營《NeverLand》貼紙設計" },
            { src: Design4, title: "2024熱舞社迎新舞展《Midnight Oasis》logo設計" }].map((item, idx) => (
            <div key={idx} className="relative group rounded-2xl overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                layout="responsive"
                width={800}
                height={600}
                className="rounded-2xl object-contain"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center px-4">
                <span className="text-white text-base font-semibold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 第二排：Design2 單張寬圖 */}
        <div className="w-full">
          <div className="relative group rounded-2xl overflow-hidden">
            <Image
              src={Design2}
              alt="金勇影展《Sea Saw》字卡、海報設計"
              layout="responsive"
              width={1200}
              height={600}
              className="rounded-2xl object-contain"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center px-4">
              <span className="text-white text-base font-semibold">《Sea Saw》字卡、海報設計</span>
            </div>
          </div>
        </div>

        {/* 第三排：Design1 + Design5 垂直長方形 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[{ src: Design1, title: "《長夜漫漫》海報設計" },
            { src: Design5, title: "政大傳院新生手冊設計" }].map((item, idx) => (
            <div key={idx} className="relative group rounded-2xl overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                layout="responsive"
                width={600}
                height={800}
                className="rounded-2xl object-contain"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center px-4">
                <span className="text-white text-base font-semibold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
