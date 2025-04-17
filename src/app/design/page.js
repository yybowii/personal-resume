"use client"

import Image from "next/image";
import HeartImg from "@/../public/heart.png";
import { useState } from "react";

export default function DesignPage() {
  const [heart, setHeart] = useState(0);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-10 bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl">
      <h1 className="text-4xl font-playfair mb-6">DESIGN 展示頁面</h1>

      <div
        className="cursor-pointer flex flex-col justify-center items-center"
        onClick={() => setHeart(heart + 1)}
      >
        <Image src={HeartImg} className="w-[80px]" alt="heart" />
        <div className="text-xl mt-2">{heart}</div>
      </div>

      <p className="mt-6 text-center text-gray-700 max-w-md">
        點擊愛心來支持設計作品 💖<br />
        你可以放作品輪播、圖片、說明等內容！
      </p>
    </div>
  );
}
