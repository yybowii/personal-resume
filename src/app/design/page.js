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

      <div className="flex flex-col w-full gap-8 mt-6">

        {/* 第一排：Design3 + Design4（保持比例縮小呈現） */}
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6 items-center justify-center">
          {[Design3, Design4].map((img, idx) => (
            <div key={idx} className="flex justify-center items-center bg-gray-100 rounded-2xl p-4">
              <div className="relative w-full h-auto">
                <Image
                  src={img}
                  alt={`設計作品 ${idx + 1}`}
                  layout="intrinsic"
                  objectFit="contain"
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>

        {/* 第二排：Design2 單獨橫的圖，高度加大 */}
        <div className="flex justify-center items-center bg-gray-100 rounded-2xl p-6 w-full">
          <div className="relative w-full max-w-4xl">
            <Image
              src={Design2}
              alt="設計作品 3"
              layout="intrinsic"
              objectFit="contain"
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>

        {/* 第三排：Design1 + Design5（直向長方形，不裁切） */}
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6 items-start justify-center">
          {[Design1, Design5].map((img, idx) => (
            <div key={idx} className="flex justify-center items-center bg-gray-100 rounded-2xl p-4">
              <div className="relative w-full h-auto">
                <Image
                  src={img}
                  alt={`設計作品 ${idx + 4}`}
                  layout="intrinsic"
                  objectFit="contain"
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
