import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Ravibhai Visavadiya",
    image: "/images/team-1.jpg",
  },
  {
    name: "Manishbhai Bariya",
    image: "/images/team-1.jpg",
  },
  {
    name: "Yagnikbhai Vyas",
    image: "/images/team-1.jpg",
  },
  {
    name: "Chiragbhai Ansari",
    image: "/images/team-1.jpg",
  },
  {
    name: "Bitubhai Singh",
    image: "/images/team-1.jpg",
  },
  {
    name: "Ranjeetbhai Chorasiya",
    image: "/images/team-1.jpg",
  },
  {
    name: "Sivambhai Goswami",
    image: "/images/team-1.jpg",
  },
  {
    name: "Susilbhai Kumar",
    image: "/images/team-1.jpg",
  },
];

const TeamSlider = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-[#030637] leading-snug">
          Meet Our Professional <br />
          Team Members
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 2500 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="!px-4"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 shadow-lg rounded overflow-hidden mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <div className="text-center py-4 bg-white">
                <h3 className="text-lg font-bold text-[#030637]">
                  {member.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeamSlider;
