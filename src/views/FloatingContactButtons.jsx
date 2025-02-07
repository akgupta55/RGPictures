import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/qr/KM5KLPO44WOGL1" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="text-white" size={24} />
      </a>

      {/* Phone Call Button */}
      <a
        href="tel:+91-7398676607" // Replace with your phone number
        className="bg-blue-500 text-white  w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <FaPhoneAlt className="text-white" size={24} />
      </a>
    </div>
  );
}
