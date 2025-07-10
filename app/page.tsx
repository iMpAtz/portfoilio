"use client";
import { navItems } from "@/data";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
import { FloatingNav } from "@/components/ui/FloatingNavbar";
const BackToTop = dynamic(() => import("@/components/BackToTop"), { ssr: false });
const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Experience />
        <Approach />
        <Footer />
      </div>
      <BackToTop />
    </main>
  );
};

export default Home;
