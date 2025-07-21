import React from "react";

const reasons = [
  {
    icon: "/images/why-choose-icon-1.png", // Use your local icon or external URL
    title: "Trusted Service Center",
    desc: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.",
  },
  {
    icon: "/images/why-choose-icon-2.png",
    title: "Reasonable Price",
    desc: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.",
  },
  {
    icon: "/images/why-choose-icon-3.png",
    title: "24/7 Supports",
    desc: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Text Content */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-[27px] md:text-[40px] font-bold text-[#030637] mb-4">
            Few Reasons Why People <br /> Choosing Us!
          </h2>
          <p className="text-[#7F8499] text-[16px] md:text-[18px] mb-8">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>

          {/* Reason Cards */}
          <div className="space-y-6">
            {reasons.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="bg-orange-500 p-6 rounded-full w-20 h-20 flex items-center justify-center shrink-0">
                  <img src={item.icon} alt={item.title} className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#030637] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#7F8499] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src="/images/air-conditioner-img.jpg"
            alt="AC Cool Air"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;