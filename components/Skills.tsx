import React from "react";

const skills = [
  { name: "Pentest", level: 3 },
  { name: "Kali Linux", level: 3 },
  { name: "Report Writing", level: 3 },
  { name: "Problem Solving", level: 4 },
  { name: "CTF", level: 3 },
  { name: "Network Security", level: 2 },
  { name: "Web Development", level: 3 },
];

const maxLevel = 5;

// ปรับโทนสีให้เข้ากับธีมเว็บ (ม่วง-น้ำเงิน-ขาว)
const levelColors = [
  "bg-[#23265A]", // 0
  "bg-[#818CF8]", // 1
  "bg-[#A5B4FC]", // 2
  "bg-[#C084FC]", // 3
  "bg-[#F1F5F9]", // 4
  "bg-white",     // 5
];

const Skills = () => {
  return (
    <section id="skills" className="w-full flex flex-col items-center justify-center py-16">
      <div className="bg-[#181B3A] rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl w-full flex flex-col md:flex-row gap-8 border border-white/10 items-center">
        {/* ฝั่งซ้าย */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">MY SKILLS</h2>
          <div className="text-[#C084FC] text-sm mb-4 text-center md:text-left">— WHAT I KNOW —</div>
          <div className="flex gap-4 text-5xl mb-4">
            <span>🛡️</span>
            <span>💻</span>
            <span>🌐</span>
          </div>
        </div>
        {/* ฝั่งขวา */}
        <div className="flex-1 w-full">
          {skills.map((skill, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-white text-sm md:text-base">{skill.name}</span>
                <span className="text-[#A5B4FC] text-xs md:text-sm">Level {skill.level}/{maxLevel}</span>
              </div>
              <div className="w-full h-3 bg-[#23265A] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${levelColors[skill.level]}`}
                  style={{ width: `${(skill.level / maxLevel) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 