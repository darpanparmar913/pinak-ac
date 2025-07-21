import React from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";

const FooterSection = () => {
    return (
        <footer className="bg-[#050c2a] text-white py-10 px-5 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Company Info */}
                <div>
                    <div className="flex items-center gap-3 text-2xl font-bold">
                        <img
                            src="/images/service-logo.png"
                            alt="logo"
                            className="w-8 h-8"
                        />
                        <span className="text-[#ffffff]">Pinak Air Conditioner</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                        ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor diam
                        ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                        sit.
                    </p>
                </div>

                {/* Get In Touch */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
                    <ul className="text-sm text-gray-300 space-y-3">
                        <li className="flex items-start gap-2">
                            <FaMapMarkerAlt className="mt-1 w-10" />
                            <span>Shop No: 5, Rameshwar A+Shopping Center, Nr, D-mart Mall, Vanmali Junction, Yogichowk, Surat - 395010.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt /> <span>+91 777 888 0306</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope /> <span>info@example.com</span>
                        </li>
                    </ul>
                </div>

                {/* Our Services */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                    <ul className="text-sm text-gray-300 space-y-3">
                        <li>AC Service</li>
                        <li>Gas Charging / Refilling</li>
                        <li>AC Installation & Uninstallation</li>
                        <li>Compressor Replacement</li>
                        <li>Fan Motor Repair/Replacement</li>
                        <li>Jet Pump Service</li>
                    </ul>
                </div>

                {/* Quick Links & Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="text-sm text-gray-300 space-y-3">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Our Services</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center mt-10 gap-4">
                {[FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn].map((Icon, index) => (
                    <div
                        key={index}
                        className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors cursor-pointer"
                    >
                        <Icon className="text-white" size={16} />
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default FooterSection;