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
    FaWhatsapp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const naviagte = useNavigate();

    const handleClick = () => {
        naviagte('/services');
    }

    return (
        <div className="text-sm font-medium">
            {/* Top Bar */}
            <div className="bg-[#275588] text-white flex justify-between px-4 md:px-16 py-2 text-xs">
                <div className="flex gap-4 items-center">
                    <span className="flex items-center gap-1">
                        <FaPhoneAlt /> +91 777 888 0306
                    </span>
                    <span className="flex items-center gap-1">
                        <FaEnvelope /> pinakrefrigeration@gmail.com
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
                                <a href="/" className="text-orange-500">
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
                        <a
                            href={'https://www.instagram.com/pinak_air_conditioner_05?igsh=cm5oaTZtZmZxbnN5'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-full hover:bg-orange-100 cursor-pointer">
                            <FaInstagram className="text-[#e93c7d]" size={16} />
                        </a>
                        <a
                            href={'https://www.facebook.com/share/1KmMGiERdY'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-full hover:bg-orange-100 cursor-pointer">
                            <FaFacebookF className="text-[#2c64f6]" size={16} />
                        </a>
                        <a
                            href={'https://web.whatsapp.com/send?phone=917778880306&text=Hello Sir, Available.'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-full hover:bg-orange-100 cursor-pointer">
                            <FaWhatsapp className="text-[#61d467]" size={16} />
                        </a>
                    </div>
                    <div>
                        <button onClick={handleClick} className="px-6 py-3 bg-orange-500 text-white text-sm md:text-base font-semibold rounded-full shadow-lg hover:bg-orange-600 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                            Book Service Now
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-gray-50 py-4 px-6 md:hidden z-10 shadow transition-all duration-500">
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="/" className="text-orange-500">
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
                            <a
                                href={'https://www.instagram.com/pinak_air_conditioner_05?igsh=cm5oaTZtZmZxbnN5'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-full hover:bg-orange-100 cursor-pointer">
                                <FaInstagram className="text-[#e93c7d]" size={16} />
                            </a>
                            <a
                                href={'https://www.facebook.com/share/1KmMGiERdY'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-full hover:bg-orange-100 cursor-pointer">
                                <FaFacebookF className="text-[#2c64f6]" size={16} />
                            </a>
                            <a
                                href={'https://web.whatsapp.com/send?phone=917778880306&text=Hello Sir, Available.'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-full hover:bg-orange-100 cursor-pointer">
                                <FaWhatsapp className="text-[#61d467]" size={16} />
                            </a>
                        </div>
                        <div>
                            <button onClick={handleClick} className="px-6 py-3 mt-3 bg-orange-500 text-white text-sm md:text-base font-semibold rounded-full shadow-lg hover:bg-orange-600 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                Book Service Now
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
