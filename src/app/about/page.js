'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="w-full h-full flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* 左側：圖片區，全高填滿 */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-full">
        <Image
          src="/picture.JPEG"
          alt="YYBOWII"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 右側：內容區，滾動 */}
      <div className="w-full md:w-1/2 h-full overflow-y-auto p-6 space-y-6 text-gray-800">
        <h1 className="text-3xl font-bold">包依依 YYBOWII</h1>

        {/* STUDY AT */}
                  <motion.section
            className="bg-white rounded-xl p-4 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <img src="/xin.png" alt="study" width={48} height={48} />
              <h2 className="text-xl font-semibold">STUDY AT</h2>
            </div>
            <p className="mt-1 text-sm leading-relaxed">
              國立政治大學 傳播學院大一大二不分系<br />
              雙主修 數位內容學程<br />
              輔系 日文系
            </p>
          </motion.section>


        {/* INTRODUCE */}
          <motion.section
            className="bg-white rounded-xl p-4 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center gap-2">
              <img src="/xin.png" alt="introduce" width={48} height={48} />
              <h2 className="text-xl font-semibold">INTRODUCE</h2>
            </div>
            <p className="mt-1 text-sm leading-relaxed">
              我是一個喜歡各種新事物，熱衷參與不同活動的包依依！<br />
              目前的主學習是影像、日文、設計跟 code，但目前都還是起步，希望可以大家多學習～<br />
              很會常常累到爆炸，是個行程表會排很滿的人。
            </p>
          </motion.section>


        {/* EXPERIENCE */}
                  <motion.section
            className="bg-white rounded-xl p-4 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <img src="/xin.png" alt="experience" width={48} height={48} />
              <h2 className="text-xl font-semibold">EXPERIENCE</h2>
            </div>
            <ul className="list-disc list-inside mt-1 text-sm space-y-1">
              <li>傳播院不分系學會第十屆會長</li>
              <li>政大平台營-首營宣傳組 一級助理</li>
              <li>政大戲劇營第十九屆 營隊組組員</li>
              <li>政大鹿鳴藝術季《偶然與想像》副召</li>
              <li>政大2023包種茶節視覺組組員</li>
              <li>秋野芒劇團經營執行</li>
            </ul>
          </motion.section>


        {/* SKILL */}
          <motion.section
            className="bg-white rounded-xl p-4 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <img src="/xin.png" alt="skill" width={48} height={48} />
              <h2 className="text-xl font-semibold">SKILL</h2>
            </div>
            <ul className="list-disc list-inside mt-1 text-sm space-y-1">
              <li>Illustrator, Photoshop</li>
              <li>影像拍攝剪輯與燈光</li>
              <li>HTML, CSS, JavaScript, C#, Python</li>
              <li>音效與燈光設計（劇場）</li>
            </ul>
          </motion.section>


        {/* INTEREST */}
         <motion.section
            className="bg-white rounded-xl p-4 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <img src="/xin.png" alt="interest" width={48} height={48} />
              <h2 className="text-xl font-semibold">INTEREST</h2>
            </div>
            <p className="mt-1 text-sm">Dancing, Knitting, Designing, Reading</p>
          </motion.section>

        {/* CONTACT */}
          <motion.section
            className="bg-white rounded-xl p-4 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <img src="/xin.png" alt="contact" width={48} height={48} />
              <h2 className="text-xl font-semibold">CONTACT</h2>
            </div>
            <p className="mt-1 text-sm">
              Phone: 0981204810<br />
              Email: yybowii@gmail.com
            </p>
          </motion.section>

      </div>
    </motion.div>
  );
}

// 區塊元件
function Section({ title, children }) {
  return (
    <motion.section
      className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {children}
    </motion.section>
  );
}
