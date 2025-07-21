import React, { useState } from "react";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="text-sm font-medium">
            {/* Top Bar */}
            <div className="bg-[#275588] text-white flex justify-between px-4 md:px-16 py-2 text-xs">
                <div className="flex gap-4 items-center">
                    <span className="flex items-center gap-1">
                        <FaPhoneAlt /> +91 777 888 0306
                    </span>
                    <span className="flex items-center gap-1">
                        <FaEnvelope /> info@example.com
                    </span>
                </div>
                <div className="hidden sm:flex gap-3">
                    <a href="#" className="hover:underline">
                        Home
                    </a>
                    <span>/</span>
                    <a href="#" className="hover:underline">
                        Terms
                    </a>
                    <span>/</span>
                    <a href="#" className="hover:underline">
                        Privacy
                    </a>
                    <span>/</span>
                    <a href="#" className="hover:underline">
                        Support
                    </a>
                </div>
            </div>

            {/* Main Header */}
            <div className="flex justify-between items-center py-4 px-4 md:px-16 bg-white shadow relative">
                {/* Logo */}
                <div className="flex items-center gap-2 text-[20px] sm:text-[24px] font-bold text-[#030637]">
                    <img
                        src="/images/service-logo.png"
                        alt="logo"
                        className="w-8 h-8"
                    />
                    <span className="text-[#030637]">Pinak Air Conditioner</span>
                </div>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="transition-all duration-500">
                        {menuOpen ? (
                            <FaTimes size={24} className="text-[#030637]" />
                        ) : (
                            <FaBars size={24} className="text-[#030637]" />
                        )}
                    </button>
                </div>

                {/* Full Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <nav className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                        <ul className="flex gap-4">
                            <li>
                                <a href="#" className="text-orange-500">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-orange-500">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-orange-500">
                                    Our Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-orange-500">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Social Icons */}
                    <div className="flex gap-3">
                        <IconButton icon={<FaFacebookF />} />
                        <IconButton icon={<FaTwitter />} />
                        <IconButton icon={<FaLinkedinIn />} />
                        <IconButton icon={<FaInstagram />} />
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-gray-50 py-4 px-6 md:hidden z-10 shadow transition-all duration-500">
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="#" className="text-orange-500">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-orange-500">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-orange-500">
                                    Our Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-orange-500">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                        <div className="flex gap-3 mt-3">
                            <IconButton icon={<FaFacebookF />} />
                            <IconButton icon={<FaTwitter />} />
                            <IconButton icon={<FaLinkedinIn />} />
                            <IconButton icon={<FaInstagram />} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const IconButton = ({ icon }) => (
    <div className="w-8 h-8 bg-gray-100 text-orange-500 flex items-center justify-center rounded-full hover:bg-orange-100">
        {icon}
    </div>
);

export default Header;
