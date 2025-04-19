"use client";

import Video1 from "@/image/1.png";
import Video2 from "@/image/2.png";
import Video3 from "@/image/3.png";
import Video4 from "@/image/4.png";
import Video5 from "@/image/5.png";
import { useState } from "react";
import Image from "next/image";

export default function Video() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isInstagram, setIsInstagram] = useState(false);

  const videoData = [
    { src: Video1, title: "第十五屆金勇影展《Sea Saw》燈光兼製片", videoUrl: "https://drive.google.com/file/d/1Cjk_pvihy2IicktsK6gfMFN_0Fl8OrWI/preview" },
    { src: Video2, title: "大一期末《A：》導演兼編劇", videoUrl: "https://drive.google.com/file/d/1ETPPASyxR3hCsdIjdMwMu-V9Wr0KJV4M/preview" },
    { src: Video3, title: "影音實驗室見習MV《Almost forget》製片", videoUrl: "https://drive.google.com/file/d/1E6yNlu3vp5xc0uZupJeAX-4qbIR1X8xj/preview" },
    { src: Video4, title: "第28屆政大廣電營《摩登映畫館》宣傳片《什麼鬼啊》製片", videoUrl: "https://www.instagram.com/reel/DHqhBFBPavE/embed" },
    { src: Video5, title: "113學年度廣電系畢業製作《潛像》製片", videoUrl: "" },
  ];

  const openModal = (url) => {
    setIsInstagram(url.includes("instagram"));
    setVideoUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoUrl("");
    setIsInstagram(false);
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6">
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold mb-2">影像作品</h1>
        <h3 className="text-base mb-4">
          在大學我加入了影音實驗室，與夥伴們拍了一些作品！很喜歡在片場跟大家一起工作的時間，雖然會很躁鬱，但是是一件很有成就感的事！
        </h3>
      </div>

      {/* 第一排：Video1 + Video2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 mt-3">
        {[videoData[0], videoData[1]].map((item, idx) => (
          <div
            key={idx}
            className="relative group rounded-2xl overflow-hidden"
            onClick={() => item.videoUrl && openModal(item.videoUrl)}
          >
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

      {/* 第二排：Video3 (左) + Video5 (右) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 mt-6">
        {[videoData[2], videoData[4]].map((item, idx) => (
          <div
            key={idx}
            className="relative group rounded-2xl overflow-hidden"
            onClick={() => item.videoUrl && openModal(item.videoUrl)}
          >
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

      {/* 第三排：Video4 (IG影片) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 mt-6">
        <div
          className="relative group rounded-2xl overflow-hidden"
          onClick={() => openModal(videoData[3].videoUrl)}
        >
          <Image
            src={videoData[3].src}
            alt={videoData[3].title}
            layout="responsive"
            width={800}
            height={1000}
            className="rounded-2xl object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center px-4">
            <span className="text-white text-base font-semibold">{videoData[3].title}</span>
          </div>
        </div>

        {/* 經歷區塊 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">拍片經驗</h2>
          <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
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

      {/* Modal */}
      {isOpen && videoUrl && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black/70 z-50"
          onClick={closeModal}
        >
          <div
            className={`bg-white rounded-xl overflow-hidden ${isInstagram ? 'w-[360px] h-[640px]' : 'w-full sm:max-w-4xl aspect-video'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={videoUrl}
              title="Video Preview"
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
