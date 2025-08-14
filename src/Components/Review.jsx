import React from "react";
import Ellipse1 from "../assets/Ellipse1.webp";
import Ellipse2 from "../assets/Ellipse2.webp";
import Ellipse3 from "../assets/Ellipse3.webp";
import Ellipse4 from "../assets/Ellipse4.webp";
import Ellipse5 from "../assets/Ellipse5.webp";
import Ellipse6 from "../assets/Ellipse6.webp";
import Ellipse7 from "../assets/Ellipse7.webp";

const reviews = [
  {
    img: Ellipse1,
    name: "Ramesh Chopra",
    location: "Parent, Pune",
    text: "We were skeptical. Then my daughter used the plan within 10 days. Doctor, therapy, checkup — all sorted."
  },
  {
    img: Ellipse2,
    name: "Sunita",
    location: "Parent, Chandigarh",
    text: "I was constantly worried about my son falling sick in a new city. With Mayaa, he had doctor access immediately."
  },
  {
    img: Ellipse3,
    name: "Priya",
    location: "Parent, Jaipur",
    text: "My daughter had her first anxiety episode during exams. I didn’t know who to call. The mental health support in the Mayaa plan stepped in when we couldn’t. Grateful."
  },
  {
    img: Ellipse4,
    name: "Ashok",
    location: "Parent, Delhi",
    text: "One call to Mayaa, and we had a full body check-up and more for my son in his hostel. No stress, no delays. This is real care."
  },
  {
    img: Ellipse5,
    name: "Deepak",
    location: "Parent, Ludhiana",
    text: "My son is not great at telling us when something’s wrong. Mayaa caught an early health issue during a routine check-up. Now I feel safer."
  },
  {
    img: Ellipse6,
    name: "Nirmala",
    location: "Parent, Indore",
    text: "I thought these plans were just marketing talk. But when my daughter had a bad throat and fever, Mayaa helped us get tests done the same day. We got the results and treatment without wasting time."
  },
  {
    img: Ellipse7,
    name: "Neena",
    location: "Parent, Lucknow",
    text: "The first month of college, my son called because he was sick. We used the Mayaa consult line — it worked like magic. No running around, no stress for him or me."
  },
];

const Review = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-400 to-teal-500 py-12 overflow-hidden">
      <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mb-8 leading-snug">
        Read Honest Reviews of what <br className="hidden sm:block" /> Customers Say About Us!
      </h2>

      {/* Row 1 - moves right */}
      <div className="flex overflow-hidden">
        <div className="flex animate-scroll-right">
          {[...reviews.slice(0, 4), ...reviews.slice(0, 4)].map((review, i) => (
            <div
              key={i}
              className="bg-white w-64 sm:w-72 h-auto sm:h-48 p-4 rounded-lg shadow-md mx-2 sm:mx-4 flex-shrink-0"
            >
              <div className="flex items-center mb-2">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold text-sm sm:text-base">{review.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - moves left */}
      <div className="flex overflow-hidden mt-6">
        <div className="flex animate-scroll-left">
          {[...reviews.slice(4), ...reviews.slice(4)].map((review, i) => (
            <div
              key={i}
              className="bg-white w-64 sm:w-72 h-auto sm:h-48 p-4 rounded-lg shadow-md mx-2 sm:mx-4 flex-shrink-0"
            >
              <div className="flex items-center mb-2">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold text-sm sm:text-base">{review.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
