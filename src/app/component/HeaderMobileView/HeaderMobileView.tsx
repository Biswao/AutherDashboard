import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import LogoS from "@/app/utils/testi/logo16.png";
import { menuMobile } from "@/app/component/HeaderManuscript/Menu";
import "./HeaderManuscript.css";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMain, setActiveMain] = useState<number | null>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="mobile-navbar">
      <div className="mobile-top-bar">
        <Link href="/">
          <img src={LogoS.src} alt="Logo" className="mobile-logo" />
        </Link>
        <button onClick={toggleMenu} className="hamburger-btn">
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu-items">
          <ul>
            {menuMobile.map((item, i) => (
              <li key={i}>
                {item.subMenu ? (
                  <button
                    onClick={() => setActiveMain(activeMain === i ? null : i)}
                    className="dropdown-toggle-btn"
                  >
                    {item.label || `Menu ${i + 1}`}
                    <span className={`arrow ${activeMain === i ? "open" : ""}`}>
                      ▼
                    </span>
                  </button>
                ) : (
                  <Link
                    href={item.link || "#"}
                    onClick={() => setMenuOpen(false)}
                    className="main-menu-link"
                  >
                    {item.label || `Menu ${i + 1}`}
                  </Link>
                )}

                {item.subMenu && i === activeMain && (
                  <ul className="mobile-submenu open">
                    {item.subMenu.map((sub, j) => (
                      <li key={j}>
                        {sub.link ? (
                         <p className="decorrr" onClick={() => window.location.href = String(sub.link)}><span>{sub.label}</span><span>→</span></p>
                        ) : (
                          <span>{sub.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="mobile-social-icons">
            <a href="https://www.facebook.com/Manuscriptedit" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://x.com/manuscriptedit" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/manuscriptedit/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com/@manuscriptedit." target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>

          <div className="mobile-nav-actions">
            <Link href="https://manuscriptedit.com/QuotationNew" className="mobile-action-link">
              Request A Quote
            </Link>
            
            {/* <Link href="/Discount" className="mobile-action-link">
              Discount & Offers
            </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
