import React from "react";
import careImg from "../assets/Care.webp";
import tataImg from "../assets/TATA_AIG.webp";
import bajajImg from "../assets/Bajaj.webp";

const ReviewOverview = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-8 lg:px-0 mt-25">
      {/* Top text */}
      <h2 className="text-center text-[#0A2E36] text-sm md:text-base lg:text-lg font-medium mb-4">
        Your Health, Our Reach - Backed by a Strong Nationwide Presence
      </h2>

      {/* Green strip */}
      <div
        className="w-full max-w-[1179px] flex flex-wrap justify-around items-center text-white rounded-lg"
        style={{ backgroundColor: "#31B07B", height: "139.75px" }}
      >
        <div className="flex flex-col items-center px-4 my-2">
          <span className="text-[22px] md:text-[26px] lg:text-[32px] font-bold">
            20,000+
          </span>
          <span className="text-sm md:text-base">Network Hospitals</span>
        </div>
        <div className="flex flex-col items-center px-4 my-2">
          <span className="text-[22px] md:text-[26px] lg:text-[32px] font-bold">
            32,000+
          </span>
          <span className="text-sm md:text-base">Doctors Empaneled</span>
        </div>
        <div className="flex flex-col items-center px-4 my-2">
          <span className="text-[22px] md:text-[26px] lg:text-[32px] font-bold">
            2477
          </span>
          <span className="text-sm md:text-base">Diagnostic Centers</span>
        </div>
        <div className="flex flex-col items-center px-4 my-2">
          <span className="text-[22px] md:text-[26px] lg:text-[32px] font-bold">
            9000+
          </span>
          <span className="text-sm md:text-base">Pin-codes Services</span>
        </div>
      </div>

      {/* Bottom text */}
      <h3 className="text-center text-[#0A2E36] text-sm md:text-base mt-6 mb-4">
        Backed by the trust and assurance of the top insurers
      </h3>

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
        <img
          src={careImg}
          alt="Care Health Insurance"
          style={{ height: "87.06px", width: "122.37px" }}
          className="object-contain"
        />
        <img
          src={tataImg}
          alt="TATA AIG Insurance"
          style={{ height: "109.4px", width: "109.4px" }}
          className="object-contain"
        />
        <img
          src={bajajImg}
          alt="Bajaj Allianz"
          style={{ height: "21.43px", width: "167.8px" }}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ReviewOverview;
