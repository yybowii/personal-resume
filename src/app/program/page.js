"use client";

import Program1 from "@/image/6.png";
import Program2 from "@/image/7.png";
import Program3 from "@/image/8.png";
import Program4 from "@/image/9.png";
import Program5 from "@/image/10.png";
import Program6 from "@/image/11.png";
import Image from "next/image";

export default function Video() {
  const programData = [
    { src: Program1, title: "影音實驗室2024棚內節目《明仔載嫁過來》演員" },
    { src: Program2, title: "影音實驗室2024轉播節目《第二屆全明星中心運動會》視設組" },
    { src: Program3, title: "影音實驗室2025特別企劃《快逃屋》製作組" },
    { src: Program4, title: "影音實驗室2025棚內節目《留下的房客》製作組" },
    { src: Program5, title: "秋野芒劇團燈音執行" },
    { src: Program6, title: "《拜託atm》出題工讀生" },
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6">

      {/* 標題與副標題 */}
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold mb-2">節目作品</h1>
        <h3 className="text-base mb-4">
          我很喜歡看節目，這些是我參與過的一些節目製作，也棚內也有外景。
          做節目就是一件複雜但很讓人開心的事情！
        </h3>
      </div>

      {/* 節目區塊 */}
      <div className="flex flex-col w-full gap-6 mt-3">
        {[0, 2, 4].map((startIdx) => (
          <div key={startIdx} className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4">
            {[programData[startIdx], programData[startIdx + 1]].map((item, idx) => (
              <div
                key={idx}
                className="relative group rounded-2xl overflow-hidden h-[33vh] min-h-[200px]"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center px-4">
                  <span className="text-white text-base font-semibold">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
