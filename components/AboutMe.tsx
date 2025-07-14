import React, { useState } from "react";
import Image from "next/image";

const educations = [
  {
    name: "Damnoen Wittaya School",
    year: "2010-2016",
    logo: "/dwslogo.png",
  },
  {
    name: "Darunaratchaburi School",
    year: "2016-2021",
    logo: "/darunaratchaburi_logo.png",
  },
  {
    name: "Bangkok University",
    year: "2022-2026",
    logo: "/bangkok_university_logo.png", // ใส่โลโก้ที่ public folder หรือเปลี่ยนชื่อไฟล์ตามจริง
  },

];

const about = {
  Name: "Jiranuwat Muangseag",
  NickName: "Pat",
  Tel: "066-109-6387",
  Address: "Ratchaburi, Thailand",
  Description:
    "I have skills in cybersecurity and knowledge in backend development. I am a person who enjoys taking on challenges to learn new things.",
};

const AboutMe = () => {
  return (
    <section id="about-me" className="w-full flex flex-col items-center justify-center py-16">
      <div className="bg-[#10132E] rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl w-full flex flex-col md:flex-row gap-8 border border-white/10 items-center">
        {/* ฝั่งซ้าย */}
        <div className="flex-1 flex flex-col gap-4 text-white">
          <div className="text-sm text-white/70 mb-1">Introduction</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About me</h2>
          <p className="mb-4 text-white/80">{about.Description}</p>
          <div className="flex flex-col gap-1 mb-4">
            <div><span className="font-semibold">Name:</span> {about.Name}</div>
            <div><span className="font-semibold">NickName:</span> {about.NickName}</div>
            <div><span className="font-semibold">Tel:</span> {about.Tel}</div>
            <div><span className="font-semibold">Address:</span> {about.Address}</div>
          </div>

          {/* รายการการศึกษา */}
          <div>
            <div className="font-semibold mb-2">Education</div>
            <div className="flex gap-4 flex-wrap">
              {educations.map((edu, idx) => (
                <div key={idx} className="bg-[#181B3A] rounded-xl p-4 flex flex-col items-center w-36 shadow border border-white/10">
                  <Image src={edu.logo} alt={edu.name} width={56} height={56} className="rounded mb-2 object-contain" />
                  <div className="text-center text-sm font-semibold">{edu.name}</div>
                  <div className="text-xs text-white/60">{edu.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ฝั่งขวา */}
        <div className="flex-shrink-0 flex justify-center items-center">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={260}
            height={340}
            className="rounded-2xl border-4 border-white shadow-lg object-cover w-[260px] h-[340px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 