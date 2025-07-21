import React from "react";

const services = [
  {
    image: "/images/indoor-unit-service.jpg",
    icon: "/images/indoor-unit-service.png",
    title: "AC Service",
  },
  {
    image: "/images/gas-fuel.jpg",
    icon: "/images/gas-fuel.png",
    title: "Gas Charging / Refilling",
  },
  {
    image: "/images/ac-install-uninstall.jpg",
    icon: "/images/ac-install-uninstall.png",
    title: "AC Installation	& Uninstallation",
  },
  {
    image: "/images/ac-compressor.png",
    icon: "/images/compressor-replacement.png",
    title: "Compressor Replacement",
  },{
    image: "/images/fan-motor-repair-replacement.webp",
    icon: "/images/fan-motor-repair-replacement.png",
    title: "Fan Motor Repair/Replacement",
  },
  {
    image: "/images/split-ac-water-jet-pump-service.jpg",
    icon: "/images/jet-pump-service.png",
    title: "Jet Pump Service",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-[27px] md:text-[40px] font-bold text-[#030637]">
          We Provide professional <br /> Services
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-100 shadow-sm">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover"
            />
            <div className="flex items-center px-4 py-4 bg-white border-t-2 border-gray-100">
              <div className="bg-orange-500 p-3 rounded-sm">
                <img
                  src={service.icon}
                  alt="icon"
                  className="w-6 h-6"
                />
              </div>
              <h3 className="ml-4 text-[#030637] font-bold text-lg">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;