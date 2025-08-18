import React from "react";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";

const Trusted = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <section className="py-12" style={{ backgroundColor: "#fdf8f3" }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-3xl text-gray-800 font-juanaMedium">
            Trusted by Top Universities And Colleges
          </h2>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-24">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Brand ${index + 1}`}
              className="object-contain"
              style={{ maxHeight: "120px", maxWidth: "170px" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
