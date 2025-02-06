import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state

  return (
    <nav className="bg-white shadow-md p-4 md:px-20 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-xl font-bold">RG-Pictures</h1>

      {/* Hamburger Icon (visible on mobile screens) */}
      <div
        className="md:hidden cursor-pointer text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </div>

      {/* Navigation Menu */}
      <ul
        className={`absolute top-15 left-0 w-full bg-white md:static md:w-auto md:flex md:gap-6 ${
          menuOpen ? "block" : "hidden"
        } md:block transition-all duration-300`}
      >
        <li className="p-4 md:p-0">
          <a href="#" className="hover:text-blue-500 block">
            Home
          </a>
        </li>
        <li className="p-4 md:p-0">
          <a href="#about" className="hover:text-blue-500 block">
            About
          </a>
        </li>

        {/* Services Dropdown */}
        <li
          className="relative p-4 md:p-0 group"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="hover:text-blue-500 flex items-center gap-1 md:w-auto">
            Services{" "}
            {dropdownOpen ? (
              <MdKeyboardArrowUp className="text-xl" />
            ) : (
              <MdKeyboardArrowDown className="text-xl" />
            )}
          </button>

          {/* Dropdown Menu (Always Visible on Mobile, Hover on Desktop) */}
          <ul
            className={`md:absolute left-0 w-full md:mt-5 md:w-48 bg-white transition-all duration-300 md:opacity-0 md:invisible group-hover:opacity-100 group-hover:visible md:block ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a
                href="#baby-photography"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Baby Photography
              </a>
            </li>
            <li>
              <a
                href="#maternity-photography"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Maternity Photography
              </a>
            </li>
            <li>
              <a
                href="#pre-wedding-photography"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Pre Wedding Photography
              </a>
            </li>
            <li>
              <a
                href="#event-photography"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Event Photography
              </a>
            </li>
            <li>
              <a
                href="#product-photography"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Product Photography
              </a>
            </li>
          </ul>
        </li>

        <li className="p-4 md:p-0">
          <a href="#contact" className="hover:text-blue-500 block">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
