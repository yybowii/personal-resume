"use client";

import { useState } from "react";
import Image from "next/image";
import Program1 from "@/image/6.png";
import Program2 from "@/image/7.png";
import Program3 from "@/image/8.png";
import Program4 from "@/image/9.png";
import Program5 from "@/image/10.png";
import Program6 from "@/image/11.png";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function Video() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrls, setVideoUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (urls) => {
    const formattedUrls = Array.isArray(urls)
      ? urls.map((url) =>
          url.includes("instagram") ? url : url.replace("https://youtu.be", "https://www.youtube.com/embed")
        )
      : [
          urls.includes("instagram")
            ? urls
            : urls.replace("https://youtu.be", "https://www.youtube.com/embed")
        ];
    setVideoUrls(formattedUrls);
    setCurrentIndex(0);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoUrls([]);
    setCurrentIndex(0);
  };

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videoUrls.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videoUrls.length) % videoUrls.length);
  };

  const programData = [
    {
      src: Program1,
      title: "影音實驗室2024棚內節目《明仔載嫁過來》演員",
      link: "https://youtu.be/k49iEwJwBxA?si=HCxVuRxKR9PW_4v_",
    },
    {
      src: Program2,
      title: "影音實驗室2024轉播節目《第二屆全明星中心運動會》視設組",
      link: [
        "https://youtu.be/VxRpBT-TmO8?si=IMLmK9xmknhoy39y",
        "https://youtu.be/YkZEEl0ui0E?si=ezrz-ffJ8--D0u40",
      ],
    },
    {
      src: Program3,
      title: "影音實驗室2025特別企劃《快逃屋》製作組",
      link: null,
    },
    {
      src: Program4,
      title: "影音實驗室2025棚內節目《留下的房客》製作組",
      link: "https://www.instagram.com/avlab_instudio_program/embed",
    },
    {
      src: Program5,
      title: "秋野芒劇團燈音執行",
      link: "https://www.instagram.com/silvergrass_org/embed",
    },
    {
      src: Program6,
      title: "《拜託atm》出題工讀生",
      link: [
        "https://youtu.be/T2p-UxxhYgA?si=1PSlkb_58igkbsOs",
        "https://youtu.be/qNZ-DbdLzdM?si=GhGo7sW8DMLUDPke",
      ],
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6">
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold mb-2">節目作品</h1>
        <h3 className="text-base mb-4">
          我很喜歡看節目，這些是我參與過的一些節目製作，也棚內也有外景。
          做節目就是一件複雜但很讓人開心的事情！
        </h3>
      </div>

      <div className="flex flex-col w-full gap-6 mt-3">
        {[0, 2, 4].map((startIdx) => (
          <div
            key={startIdx}
            className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4"
          >
            {[programData[startIdx], programData[startIdx + 1]].map((item, idx) => (
              <div
                key={idx}
                className="relative group rounded-2xl overflow-hidden h-[33vh] min-h-[200px] cursor-pointer"
                onClick={() => item.link && openModal(item.link)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center px-4">
                  <span className="text-white text-base font-semibold">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black/70 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white overflow-hidden relative flex items-center justify-center w-full max-w-5xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={videoUrls[currentIndex]}
              title="Video"
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
              frameBorder="0"
            ></iframe>

            {videoUrls.length > 1 && (
              <>
                <button
                  onClick={prevVideo}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-white/70 rounded-full p-2 shadow-md"
                >
                  <ArrowUp size={32} />
                </button>
                <button
                  onClick={nextVideo}
                  className="absolute bottom-1/2 right-4 transform translate-y-1/2 text-black bg-white/70 rounded-full p-2 shadow-md"
                >
                  <ArrowDown size={32} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}