import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ServiceCenter = () => {
    return (
        <section className="py-16 px-4 md:px-16 bg-white">
            <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-center">
                {/* Left Content */}
                <div className="lg:w-1/2">
                    <h2 className="text-[27px] md:text-[45px] font-bold text-[#030637] mb-6">
                        Welcome To Best Cooling & Heating Service Center
                    </h2>

                    {/* Features */}
                    <div className="flex gap-10 mb-4">
                        <div className="flex items-center gap-3">
                            <img src="/images/expert-technician.png" alt="expert technician" />
                            <span className="text-[20px] font-semibold text-[#030637]">Expert Technician</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="/images/best-quality-services.png" alt="expert technician" />
                            <span className="text-[20px] font-semibold text-[#030637]">Best Quality Services</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#7F8499] text-[16px] sm:text-[18px] mb-6">
                        At Best Cooling & Heating Service Center, we are committed to keeping your home comfortable all year round. 
                        Our expert team provides fast, reliable, and affordable solutions for all your air conditioning and heating needs.
                    </p>

                    <hr className="border-gray-200 mb-6" />

                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-orange-500 text-white rounded-full p-4">
                                <FaPhoneAlt />
                            </div>
                            <span className="text-[#030637] font-semibold text-[16px] sm:text-[18px]">+91 777 888 0306</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-orange-500 text-white rounded-full p-4">
                                <FaEnvelope />
                            </div>
                            <span className="text-[#030637] font-semibold text-[16px] sm:text-[18px]">pinakrefrigeration@gmail.com</span>
                        </div>
                    </div>
                </div>

                {/* Right Images */}
                <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-2xl">
                    <img
                        src="https://themewagon.github.io/aircon/img/about-1.jpg"
                        alt="AC Work 1"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://themewagon.github.io/aircon/img/about-2.jpg"
                        alt="AC Work 2"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://themewagon.github.io/aircon/img/about-3.jpg"
                        alt="Remote"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://themewagon.github.io/aircon/img/about-4.jpg"
                        alt="AC Repair"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
};

export default ServiceCenter;