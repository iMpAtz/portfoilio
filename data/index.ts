export const navItems = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about-me" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My Skill",
    description: "ทักษะด้าน Cybersecurity & Ethical Hacking",
    className: "lg:col-span-3 md:col-span-8 md:row-span-4 lg:min-h-[60vh] lg:max-w-42",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
    skills: [
      "Pentest",
      "Kali Linux",
      "Report Writing",
      "Problem Solving",
      "CTF",
      "Network Security",
      "Web Exploitation"
    ]
  },
  
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  }
];


export const workExperience = [
  {
    id: 1,
    title: "Create Web Social Media like Twiiter",
    desc: "Fullstack for this project.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Multivendor 5-Commerce Web App ",
    desc: "Designed and developed Multivendor E-Commerce Web App.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "BU CTF COMPETTION 2025",
    desc: "Participate in  BU CTF COMPTTIION 2025 with 5th runner place",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  }
 
];

export const socialMedia = [
  {
    id: 1,
    img: "/twit.svg",
  },
  {
    id: 2,
    img: "/link.svg",
  },
];
