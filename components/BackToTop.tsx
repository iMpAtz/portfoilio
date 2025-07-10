import React, { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return show ? (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        padding: "1rem 1.2rem",
        borderRadius: "50%",
        background: "#222",
        color: "#fff",
        border: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        cursor: "pointer",
        zIndex: 1000,
        fontSize: "1.5rem"
      }}
      aria-label="กลับไปบนสุด"
    >
      ↑
    </button>
  ) : null;
};

export default BackToTop; 