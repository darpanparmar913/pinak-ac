import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

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
    }, {
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

const ContactUsPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-[27px] md:text-[40px] font-bold text-[#030637]">
                    Get In Touch
                </h2>
                <p className="text-[#7F8499] text-[16px] md:text-[18px] mb-8">
                    We’re always here to help! Reach out to us for any questions, service requests, or <br />
                    expert advice — we’re ready to assist you and ensure your comfort all year round.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                    <div className="bg-[#335484] p-2 rounded-full">
                        <FaLocationDot className="text-[#ffffff]" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-700">Our Address</h3>
                        <p className="text-gray-600">Shop No: 5, Rameshwar Shopping Center, Nr. D-mart Mall, Vanmali Junction, Yogichowk, Surat - 395010.</p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="flex items-start space-x-4">
                    <div className="bg-[#335484] p-2 rounded-full">
                        <IoCall className="text-[#ffffff]" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-700">Our Contact Info</h3>
                        <p className="text-gray-600">+91 777 888 0306</p>
                        <p className="text-gray-600">pinakrefrigeration@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                    title="location-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5942018520236!2d72.88421862597295!3d21.20827348158733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f778128edbb%3A0x7dbaec0638cb7742!2sNilgiri%20Wadi%2C%20Yoginagar%20Society%2C%20Surat%2C%20Gujarat%20395011!5e0!3m2!1sen!2sin!4v1758039082769!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUsPage;