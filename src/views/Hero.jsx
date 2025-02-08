import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

const heroSlides = [
  {
    image: "/hero1.JPG",
    text: "Capture Your Precious Moments with ChitraGeek",
  },
  { image: "/hero2.JPG", text: "Turning Your Memories into Timeless Art" },
  { image: "/hero3.jpg", text: "Every Picture Tells a Beautiful Story" },
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
              className="h-96 w-full object-fit-"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}
