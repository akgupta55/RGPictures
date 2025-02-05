import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

const heroSlides = [
  {
    image: "/hero1.jpg",
    text: "Capture Your Precious Moments with ChitraGeek",
  },
  { image: "/hero2.gif", text: "Turning Your Memories into Timeless Art" },
  { image: "/hero3.png", text: "Every Picture Tells a Beautiful Story" },
];

export default function Hero() {
  return (
    <header className="relative h-96">
      <Swiper
        modules={[EffectCube, Navigation, Pagination, Autoplay]}
        effect="cube"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={`Hero ${index + 1}`}
              className="h-96 w-full object-fit"
            />
            {/* <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="text-white text-4xl font-bold text-center"
              >
                {slide.text}
              </motion.h1>
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}
