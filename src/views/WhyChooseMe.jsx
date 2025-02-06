import { div } from "framer-motion/client";
import React from "react";
import {
  FaStar,
  FaCamera,
  FaRocket,
  FaMoneyBillWave,
  FaEdit,
  FaLightbulb,
  FaHeadset,
  FaGift,
} from "react-icons/fa";

export const whyChooseMe = [
  {
    title: "10-Star Rated & Top-Rated by Customer Reviews",
    icon: <FaStar />,
    desc: "Trusted by happy clients with outstanding feedback.",
  },
  {
    title: "Hassle-Free Photoshoot",
    icon: <FaCamera />,
    desc: "Enjoy a seamless and stress-free photography experience.",
  },
  {
    title: "Fast Delivery",
    icon: <FaRocket />,
    desc: "Get your professionally edited photos quickly without long waiting times.",
  },
  {
    title: "Pocket-Friendly Packages",
    icon: <FaMoneyBillWave />,
    desc: "High-quality photography at affordable prices.",
  },
  {
    title: "Editing Included",
    icon: <FaEdit />,
    desc: "All photos come with expert editing—no extra charges!",
  },
  {
    title: "Creative Storytelling Approach",
    icon: <FaLightbulb />,
    desc: "Capturing moments with an artistic touch to tell your unique story.",
  },
  {
    title: "Exceptional Customer Service",
    icon: <FaHeadset />,
    desc: "Personalized support and smooth communication from start to finish.",
  },
  {
    title: "Customized Photography Packages",
    icon: <FaGift />,
    desc: "Tailored to your needs—perfect for any occasion!",
  },
];

const WhyChooseMe = () => {
  return (
    <div className="py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-500 w-full">
        Why Choose Us?
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 sm:px-8 py-5">
        {whyChooseMe.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-3 p-4 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="text-4xl text-black">{item.icon}</div>
            <h3 className="text-lg font-semibold ">{item.title}</h3>
            <p className="text-sm ">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WhyChooseMe;
