import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Expert AC Installation for Home & Office",
    desc: "Our technicians ensure quick and efficient air conditioner installation with complete safety and satisfaction. We install all major brands with precision and care.",
    image: "/images/slider-img-1.jpg", // Replace with your image URL
  },
  {
    id: 1,
    title: "Commercial AC Solutions",
    desc: "We offer large-scale AC installation, maintenance, and servicing for commercial properties. Create a comfortable workspace with our tailored cooling systems.",
    image: "/images/slider-img-2.jpg", // Replace with your image URL
  },
  {
    id: 2,
    title: "Reliable AC Repair & Maintenance",
    desc: "Stay cool year-round with our fast and affordable repair services. From minor fixes to major repairs, we keep your AC running like new.",
    image: "/images/slider-img-3.jpg", // Replace with your image URL
  },
  {
    id: 3,
    title: "24/7 Emergency AC Service",
    desc: "Facing an AC breakdown? Our emergency response team is just a call away—any time, any day.",
    image: "/images/slider-img-4.jpg", // Replace with your image URL
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        // navigation
        loop
        autoplay={{ delay: 4000 }}
        className="w-full h-[80vh] md:h-[90vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(10,10,30,0.8), rgba(10,10,30,0.4)), url(${slide.image})`,
              }}
            >
              <div className="text-center px-5 md:px-20 max-w-3xl text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
                  {slide.title}
                </h1>
                <p className="mb-6 text-base md:text-lg text-gray-300">
                  {slide.desc}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded shadow transition">
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
