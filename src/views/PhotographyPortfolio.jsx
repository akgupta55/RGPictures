import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const portfolioImages = [
  "/img1.jpeg",
  "/img2.jpeg",
  "/img3.jpeg",
  "/img5.jpeg",
  "/img4.jpeg",
  "/img6.jpeg",
  "/img7.jpeg",
  "/img8.jpeg",
  "/img9.jpeg",
  "/img10.jpeg",
];

export default function PhotographyPortfolio() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the image is in view
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen p-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-500 mb-12">
          Photography Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
