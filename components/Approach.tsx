import React from "react";

const certificates = [
  {
    name: "BU-ITI CTF Competition 2025",
    file: "/cert1.png"
  },
  {
    name: "Basic CyberSecurity By MOOC",
    file: "/cert2.png"
  }
  // เพิ่มได้ตามต้องการ
];

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">Certificates</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-8">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center border border-white/20 rounded-2xl p-4 bg-black/30 shadow-lg w-full max-w-md"
          >
            <h2 className="text-lg font-bold mb-2 text-center text-white">{cert.name}</h2>
            <div
              className="flex items-center justify-center rounded-lg border w-[320px] h-[420px] overflow-hidden"
              style={{ boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10)" }}
            >
              {cert.file.endsWith(".pdf") ? (
                <iframe
                  src={cert.file}
                  width="100%"
                  height="100%"
                  className="rounded-lg border-0"
                  title={cert.name}
                  style={{
                    background: "transparent",
                    display: "block"
                  }}
                  scrolling="no"
                />
              ) : (
                <img
                  src={cert.file}
                  alt={cert.name}
                  className="object-contain w-full h-full"
                  width={320}
                  height={420}
                  style={{ background: "transparent" }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Approach;

