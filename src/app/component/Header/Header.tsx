import { useState } from "react";
import { HeaderProps } from "@/app/utils/interfaces/types";
import { FaBars, FaWallet } from "react-icons/fa";
import "./Header.css";

export default function Header({ isOpen, toggleSidebar }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="container-fluid p-2" style={{ background: "#364D60" }}>
      <div className="row align-items-center justify-content-between">
        {/* Left section with logo and menu button */}
        <div className="col-lg-4 d-flex align-items-center" style={{gap:'35px'}}>
          <img src="./assets/images/logooForAuthor.png" style={{ width: '248px' , background:'white' , padding:'8px'}} alt="Logo" />
          <button
            onClick={toggleSidebar}
            className="text-white btn p-0 ms-2"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Right section with wallet info and dropdown */}
        <div className="col-lg-8 d-flex justify-content-end align-items-center">
          <div className="text-white d-flex align-items-center">
            <FaWallet size={20} className="me-2" />
            <span>$ 0.00</span>
          </div>

          {/* Dropdown Button */}
          <div className="position-relative ms-4">
            <button
              onClick={toggleDropdown}
              className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px' }}
            >
              IJ
              <span className="ms-1">&#9662;</span>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="dropdown-menu show position-absolute end-0 mt-2 p-2" style={{ minWidth: '100px' }}>
                <a className="dropdown-item" href="#profile">Profile</a>
                <a className="dropdown-item" href="#settings">Settings</a>
                <a className="dropdown-item" href="#logout">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
