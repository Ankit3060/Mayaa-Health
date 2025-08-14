import React from "react";
import LeftBig from "../assets/LeftBig.webp";
import Right1 from "../assets/Right1.webp";
import Right2 from "../assets/Right2.webp";
import RightBig from "../assets/RightBig.webp";

const Working = () => {
  const handleAdvisorClick = () => {
    console.log("Talk to advisor");
  };

  return (
    <div className="w-full bg-white py-12 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#073B4C]">
          Healthcare designed around your child’s need
        </h2>
        <p className="text-gray-500 mt-2">How it works?</p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
        {/* Left Image */}
        <div className="flex justify-center md:justify-end">
          <img src={LeftBig} alt="Left Illustration" className="max-w-xs md:max-w-sm" />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 max-w-xl">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-white shadow-lg rounded-xl p-4 flex-1 border border-gray-100">
              <div className="flex gap-4">
                <img src={Right1} alt="24x7 Care" className="w-12 h-12" />
                <div>
                  <h3 className="font-semibold">24x7 care assistant</h3>
                  <p className="text-gray-600 text-sm">
                    Dedicated support to help your child deal in any health emergency
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-4 flex-1 border border-gray-100">
              <div className="flex gap-4">
                <img src={Right2} alt="Health Card" className="w-12 h-12" />
                <div>
                  <h3 className="font-semibold">Health Card & App Access</h3>
                  <p className="text-gray-600 text-sm">
                    A health card enabling cashless treatments across network hospitals and access through a dedicated app to avail benefits
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="bg-white shadow-lg rounded-xl p-4 border border-gray-100">
            <div className="flex gap-4">
              <img src={RightBig} alt="Specialist Support" className="w-12 h-12" />
              <div>
                <h3 className="font-semibold">Specialist Support</h3>
                <p className="text-gray-600 text-sm">
                  Your child's health is never left to guesswork. Every Mayaa Wellness plan includes personalised care backed by a network of{" "}
                  <strong>experienced doctors, medical specialists, and wellness experts.</strong> From general health concerns to specialised support for mental wellness, nutrition, or chronic conditions — our expert panel ensures your child receives the right care, at the right time, no matter where they are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-lg md:text-xl text-[#073B4C] mb-6">
          Give Your Child the <strong>Health Support</strong> You Wish You Had
        </p>
        <button
          onClick={handleAdvisorClick}
          className="bg-gradient-to-r from-[#06D6A0] to-[#06D6A0] hover:opacity-90 text-white font-medium px-6 py-3 rounded-full cursor-pointer"
        >
          Talk to an Advisor
        </button>
      </div>
    </div>
  );
};

export default Working;
