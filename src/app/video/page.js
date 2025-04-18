"use client";

import Video1 from "@/image/1.png";
import Video2 from "@/image/2.png";
import Video3 from "@/image/3.png";
import Video4 from "@/image/4.png";
import Video5 from "@/image/5.png";
import Image from "next/image";

export default function Video() {
  return (
    <div className="w-full h-full overflow-y-auto bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6">
      
      {/* 標題與副標題 */}
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold mb-2">影像作品</h1>
        <h3 className="text-base mb-4">
          在大學我加入了影音實驗室，與夥伴們拍了一些作品！很喜歡在片場跟大家一起工作的時間，雖然會很躁鬱，但是是一件很有成就感的事！
        </h3>
      </div>

      <div className="flex flex-col w-full gap-4 mt-3">

        {/* 第一排：1、2 */}
        <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
          {[Video1, Video2].map((img, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl overflow-hidden"
            >
              <Image
                src={img}
                alt={`影像作品 ${idx + 1}`}
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

        {/* 第二排：3、5 */}
        <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
          {[Video3, Video5].map((img, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl overflow-hidden"
            >
              <Image
                src={img}
                alt={`影像作品 ${idx + 3}`}
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

        {/* 第三排：左圖右文 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 h-[80vh]">
          {/* 左側圖 */}
          <div className="relative group rounded-2xl overflow-hidden">
            <Image
              src={Video4}
              alt="影像作品 5"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">作品 5</span>
            </div>
          </div>

          {/* 右側文字區：白底＋陰影 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-2">拍片經驗</h2>
            <p className="text-base leading-relaxed text-gray-700">
              ○ 大學一年級期末作業《A:》擔任導演、編劇<br />
              ○ 政大影音實驗室見習MV《Almost Forgot》擔任製片<br />
              ○ 112年學長姐畢業製作《Joker show》擔任美術助理<br />
              ○ 112年學長姐大三編導與實務《白色糖果》擔任製片助理<br />
              ○ 2024政大廣電營營歌MV擔任副導兼場記<br />
              ○ 2024政大廣電營餐間片-廣告片擔任副導<br />
              ○ 112年學長姐畢業製作《無私之地》擔任燈光助理<br />
              ○ 影音實驗室-第十五屆金勇影展《Sea saw》擔任燈光兼製片<br />
              ○ 113年學長姐畢業製作《吉光路88號》擔任生活製片<br />
              ○ 113年學長姐畢業製作《方死方生》擔任美術助理<br />
              ○ 113學年度學長姐畢業製作《潛像》擔任製片<br />
              ○ 2025政大廣電營宣傳片《什麼鬼啊》擔任製片<br />
              ○ 113學年度學長姐大三編導與實務《Offshore》擔任副導<br />
              ○ 113學年度學長姐大三編導與實務《純聊天》擔任製片兼美術<br />
              ○ 2025政大畢業歌MV《遠山·雨聲未息》擔任製片助理<br />
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
