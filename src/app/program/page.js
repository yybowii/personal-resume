"use client";

import Program1 from "@/image/6.png";
import Program2 from "@/image/7.png";
import Program3 from "@/image/8.png";
import Program4 from "@/image/9.png";
import Program5 from "@/image/10.png";
import Program6 from "@/image/11.png";
import Image from "next/image";

export default function Video() {
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

      <div className="flex flex-col w-full gap-4 mt-3">

        {/* 第一排：1、2 */}
        <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
          {[Program1, Program2].map((img, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl overflow-hidden"
            >
              <Image
                src={img}
                alt={`節目作品 ${idx + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">{`作品 ${idx + 1}`}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 第二排：3、4 */}
        <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
          {[Program3, Program4].map((img, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl overflow-hidden"
            >
              <Image
                src={img}
                alt={`節目作品 ${idx + 3}`}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">{`作品 ${idx + 3}`}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 第三排：5、6 */}
        <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
          {[Program5, Program6].map((img, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl overflow-hidden"
            >
              <Image
                src={img}
                alt={`節目作品 ${idx + 5}`}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">{`作品 ${idx + 5}`}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
