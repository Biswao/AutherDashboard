import { HeaderProps } from "@/app/utils/interfaces/types";
import { FaBars, FaWallet } from "react-icons/fa"; // Importing FontAwesome burger icon
import "./Header.css"

export default function Header({ isOpen, toggleSidebar }: HeaderProps) {
  return (
    <>
      <div className="container-fluid p-2" style={{ background: "#364D60" }}>
        <div className="row" style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="col-lg-4 HeaderAuhtorLogo ">
            <img src="./assets/images/logooForAuthor.png" style={{ width: '248px', display: "inline-block" }} alt="Logo" />
            <button
              onClick={toggleSidebar}
              className="text-white btn p-0 focus:outline-none"
            >
              <FaBars size={24} /> {/* Burger menu icon */}
            </button>
          </div>
          <div className="col-lg-8">
            <div className="text-white" style={{ float: 'right' }}>
              <FaWallet size={20} className="me-2" style={{ display: "inline-block" }} /> {/* Wallet icon */}
              <span>$ 0.00</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
