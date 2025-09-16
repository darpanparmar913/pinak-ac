import React from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaLinkedinIn,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";

const FooterSection = () => {
    return (
        <footer className="bg-[#050c2a] text-white py-10 px-5 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Company Info */}
                <div>
                    <div className="flex items-center gap-3 text-2xl font-bold">
                        <img
                            src="/piank-logo.png"
                            alt="logo"
                            className="w-8 h-8"
                        />
                        <span className="text-[#ffffff]">Pinak Air Conditioner</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        We provide expert air conditioner repair, installation, and maintenance services with a commitment to quality, reliability, and customer satisfaction. Stay cool and comfortable year-round with our trusted HVAC solutions.
                    </p>
                </div>

                {/* Get In Touch */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
                    <ul className="text-sm text-gray-300 space-y-3">
                        <li className="flex items-start gap-2">
                            <FaMapMarkerAlt className="mt-1 w-10" />
                            <span>Shop No: 5, Rameshwar Shopping Center, Nr. D-mart Mall, Vanmali Junction, Yogichowk, Surat - 395010.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt /> <span>+91 777 888 0306</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope /> <span>pinakrefrigeration@gmail.com</span>
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
                {/* <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="text-sm text-gray-300 space-y-3">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Our Services</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div> */}
            </div>

            {/* Social Icons */}
            <div className="flex justify-center mt-10 gap-4">
                <a
                    href={'https://www.instagram.com/pinak_air_conditioner_05?igsh=cm5oaTZtZmZxbnN5'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors cursor-pointer">
                    <FaInstagram className="text-white" size={16} />
                </a>
                <a
                    href={'https://www.facebook.com/share/1KmMGiERdY'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors cursor-pointer">
                    <FaFacebookF className="text-white" size={16} />
                </a>
                <a
                    href={'https://web.whatsapp.com/send?phone=917778880306&text=Hello Sir, Available.'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors cursor-pointer">
                    <FaWhatsapp className="text-white" size={16} />
                </a>
            </div>
        </footer>
    );
};

export default FooterSection;