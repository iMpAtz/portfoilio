import React from "react";
import Image from "next/image";

const about = {
  Name: "Jiranuwat Muangseag",
  NickName: "Pat",
  Tel: "066-109-6387",
  Address: "Ratchaburi, Thailand",
  Education: "Bangkok University",
};

const AboutMe = () => {
  return (
    <section id="about-me" className="w-full flex flex-col items-center justify-center py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">About Me</h2>
      <div className="bg-[#10132E] rounded-2xl shadow-lg p-8 max-w-xl w-full flex flex-row gap-8 border border-white/10 items-center">
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={160}
            height={160}
            className="rounded-2xl border-4 border-white shadow-lg object-cover w-40 h-40"
          />
        </div>
        <div className="flex flex-col gap-2 text-white text-lg w-full">
          <div><span className="font-semibold">Name:</span> {about.Name}</div>
          <div><span className="font-semibold">NickName:</span> {about.NickName}</div>
          <div><span className="font-semibold">Tel:</span> {about.Tel}</div>
          <div><span className="font-semibold">Address:</span> {about.Address}</div>
          <div><span className="font-semibold">Education:</span> {about.Education}</div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe; 