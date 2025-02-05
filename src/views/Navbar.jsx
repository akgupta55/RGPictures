import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold">ChitraGeek</h1>
      <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars className="text-2xl cursor-pointer" />
      </div>
      <ul className={`md:flex gap-6 hidden`}>
        <li>
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-blue-500">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
