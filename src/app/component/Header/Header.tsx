import { useState } from "react";
import { HeaderProps } from "@/app/utils/interfaces/types";
import { FaBars, FaWallet } from "react-icons/fa";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation'

export default function Header({ isOpen, toggleSidebar, initials }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter()

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const logoutHandler = () => {
    localStorage.clear()
    router.push('/Auth')
  }

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
              {initials}
              <span className="ms-1">&#9662;</span>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute block shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto" style={{ minWidth: '100px' }}>
                <span className="dropdown-item"><FontAwesomeIcon icon={faUser} className="me-2" />Profile</span>
                <span className="dropdown-item"><FontAwesomeIcon icon={faCog} className="me-2" />Settings</span>
                <span onClick={logoutHandler} className="dropdown-item"><FontAwesomeIcon icon={faSignOutAlt} className="me-2" />Logout</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
