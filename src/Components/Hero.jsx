import React from "react";
import HeroImg from "../assets/Hero.webp";
import HeroFrame from "../assets/HeroFrame.webp";

const Hero = () => (
  <section className="relative bg-[#E8F8F5] overflow-hidden">
    {/* Refined diagonal background */}
    <div
      className="absolute top-0 right-0 h-full w-full md:w-1/2 z-0"
      style={{
        background: "linear-gradient(135deg, #1BBE83, #24D490)",
        clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
      }}
    />

    <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 md:py-10 px-6">
      {/* Left Content */}
      <div className="md:w-1/2 z-10 flex flex-col justify-start text-center md:text-left -mt-6">
        <h1 className="text-5xl md:text-4xl font-bold leading-snug mb-4">
          <span className="text-[#1BBE83]">Your Child Is Leaving for College.</span>{" "}
          We’ll Take Care of Their Health When You Can’t.
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-5 max-w-md mx-auto md:mx-0">
          24/7 doctor consults, mental health support, annual checkups, and accident insurance — all in one affordable plan.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
          <img src={HeroFrame} alt="Trusted users" className="w-24 md:w-28 h-auto rounded-full" />
          <p className="text-gray-800 text-base md:text-lg">
            Trusted by <span className="font-bold">10,000 +</span> parents
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <button
            onClick={() => console.log("protect my child")}
            className="bg-[#1BBE83] hover:bg-[#16a86f] text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-200 text-lg cursor-pointer"
          >
            Protect My Child
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end z-10"
        style={{
          height: "550px",
          width: "400px",
          overflow: "hidden",
        }}
      >
        <img src={HeroImg} alt="Student" className="h-full w-full object-cover" />
      </div>
    </div>
  </section>
);

export default Hero;
