import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./HeaderManuscript.css";
import menu from "@/app/component/HeaderManuscript/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoS from "@/app/utils/testi/logo16.png";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { MdPadding } from "react-icons/md";

function Navbar2025() {
  const [activeTab1, setActiveTab1] = useState<string>("");
  const [activeTab2, setActiveTab2] = useState<string>("");
  const [newNavBar2, setNewNavBar2] = useState<boolean>(false);
  const [newNavBar1, setNewNavBar1] = useState<boolean>(false);
  const [lastMenu, setLastMenu] = useState<boolean>(false);
  const [lastMenuItems, setLastMenuItems] = useState<number>(0);

  const [mainNavItem, setMainNavItem] = useState<number>(5);

  useEffect(() => {
    const test = () => {
      const tabsNewAnim = document.getElementById("navbarSupportedContent");
      const activeItemNewAnim = tabsNewAnim?.querySelector(".active");
      if (activeItemNewAnim) {
        const activeWidthNewAnimHeight = activeItemNewAnim.clientHeight;
        const activeWidthNewAnimWidth = activeItemNewAnim.clientWidth;
        const itemPosNewAnimTop = (activeItemNewAnim as HTMLElement).offsetTop;
        const itemPosNewAnimLeft = (activeItemNewAnim as HTMLElement)
          .offsetLeft;

        const horiSelector = document.querySelector(
          ".hori-selector"
        ) as HTMLElement;
        if (horiSelector) {
          horiSelector.style.top = `${itemPosNewAnimTop}px`;
          horiSelector.style.left = `${itemPosNewAnimLeft}px`;
          horiSelector.style.height = `${activeWidthNewAnimHeight}px`;
          horiSelector.style.width = `${activeWidthNewAnimWidth}px`;
        }
      }

      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const li = target.closest("li");
        if (li) {
          const allLi = tabsNewAnim?.querySelectorAll("li");
          allLi?.forEach((item) => item.classList.remove("active"));
          li.classList.add("active");

          const activeWidthNewAnimHeight = li.clientHeight;
          const activeWidthNewAnimWidth = li.clientWidth;
          const itemPosNewAnimTop = (li as HTMLElement).offsetTop;
          const itemPosNewAnimLeft = (li as HTMLElement).offsetLeft;

          const horiSelector = document.querySelector(
            ".hori-selector"
          ) as HTMLElement;
          if (horiSelector) {
            horiSelector.style.top = `${itemPosNewAnimTop}px`;
            horiSelector.style.left = `${itemPosNewAnimLeft}px`;
            horiSelector.style.height = `${activeWidthNewAnimHeight}px`;
            horiSelector.style.width = `${activeWidthNewAnimWidth}px`;
          }
        }
      };

      tabsNewAnim?.addEventListener("click", handleClick);
      return () => {
        tabsNewAnim?.removeEventListener("click", handleClick);
      };
    };

    test();
    window.addEventListener("resize", test);
    return () => {
      window.removeEventListener("resize", test);
    };
  }, []);

  return (
    <div className="navbar2025">
      <div className="header_top_menu pt-2 pb-2 bg_color">
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-7 col-sm-7">
              <div className="header_top_menu_address">
                <div className="header_top_menu_address_inner">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone"></i>+91-904-002-3003 (IN){" "}
                        <i
                          className="fa fa-phone"
                          style={{ marginLeft: "8px" }}
                        ></i>
                        +91-923-730-4004 (IN){" "}
                        <i
                          className="fa fa-phone"
                          style={{ marginLeft: "8px" }}
                        ></i>
                        +1 (646)916-3476 (USA)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3">
              <div className="header_top_menu_icon">
                <div className="header_top_menu_icon_inner">
                  <ul
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginBottom: "0rem",
                    }}
                  >
                    <li>
                      <a
                        href="https://www.facebook.com/Manuscriptedit"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          style={{ color: "white" }}
                          icon={faFacebook}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/i/flow/login?redirect_after_login=%2Fmanuscriptedit"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          style={{ color: "white" }}
                          icon={faTwitter}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/manuscriptedit/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          style={{ color: "white" }}
                          icon={faInstagram}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@manuscriptedit."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          style={{ color: "white" }}
                          icon={faYoutube}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-sm-2">
              <Link href={"/Discount"}>
                <button
                  className="BtnDiscount"
                  style={{
                    width: "200px",
                    borderRadius: "6px",
                    border: "none",
                    color: "#5161ce",
                    background: "white",
                  }}
                >
                  Discount & Offers
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <header className="nav-container">
        <div className="nav-logo logo">
          <Link href="https://manuscriptedit.com">
            <img src={LogoS.src} alt="Company Logo" />
          </Link>
        </div>

        <nav className="nav-menu">
          <ul className="UpDown" style={{ marginBottom: "0rem" }}>
            <li>
              <Link
                href="https://manuscriptedit.com/EditingOverview/"
                onClick={() => {
                  setActiveTab1(menu[0].subMenu[0]?.label || "");
                  setActiveTab2(menu[0].subMenu[0]?.subMenu?.[0]?.label || "");
                  setNewNavBar2(true);
                  setNewNavBar1(true);
                  setMainNavItem(0);
                  setLastMenu(true);
                }}
                className={mainNavItem === 0 ? "nav-menuSelected" : ""}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                href="https://manuscriptedit.com/QualityDelivery"
                onClick={() => {
                  setActiveTab1(menu[1].subMenu[0]?.label || "");
                  setNewNavBar2(true);
                  setNewNavBar1(true);
                  setMainNavItem(1);
                  setLastMenu(false);
                }}
                className={mainNavItem === 1 ? "nav-menuSelected" : ""}
              >
                QUALITY
              </Link>
            </li>
            <li>
              <Link
                href="https://manuscriptedit.com/Prices"
                onClick={() => {
                  setActiveTab1(menu[2].subMenu[0]?.label || "");
                  setNewNavBar2(true);
                  setNewNavBar1(true);
                  setMainNavItem(2);
                  setLastMenu(false);
                }}
                className={mainNavItem === 2 ? "nav-menuSelected" : ""}
              >
                PRICE CALCULATOR
              </Link>
            </li>
            <li>
              <Link
                href="https://manuscriptedit.com/EditorialPanel"
                onClick={() => {
                  setActiveTab1(menu[3].subMenu[0]?.label || "");
                  setNewNavBar2(true);
                  setNewNavBar1(true);
                  setMainNavItem(3);
                  setLastMenu(false);
                }}
                className={mainNavItem === 3 ? "nav-menuSelected" : ""}
              >
                EDITOR
              </Link>
            </li>
            <li>
              <Link
                href="https://manuscriptedit.com/About"
                onClick={() => {
                  setActiveTab1(menu[4].subMenu[0]?.label || "");
                  setNewNavBar2(true);
                  setNewNavBar1(true);
                  setMainNavItem(4);
                  setLastMenu(false);
                }}
                className={mainNavItem === 4 ? "nav-menuSelected" : ""}
              >
                ABOUT US
              </Link>
            </li>
          </ul>
        </nav>

        <div className="nav-buttons">
          <Link
            href="https://manuscriptedit.com/AuthorDashboard/"
            className="navButtonz"
          >
            Sign Up | Sign In
          </Link>
          <Link href="https://manuscriptedit.com/QuotationNew" className="navButtonz">
            Request A Quote
          </Link>
        </div>
      </header>

      <div className="navbar2">
        <div
          className="container-fluid"
          style={{ display: newNavBar2 ? "" : "none" }}
        >
          <ul className="ItemForHover" style={{ alignItems: "center" }}>
            {mainNavItem !== 5
              ? menu[mainNavItem].subMenu.map((item, index) => (
                  <li
                    key={index}
                    className={
                      activeTab1 === menu[mainNavItem].subMenu[index]?.label
                        ? "tabSelected"
                        : ""
                    }
                    onClick={() => {
                      setActiveTab1(
                        menu[mainNavItem].subMenu[index]?.label || ""
                      );
                      setActiveTab2(
                        menu[0].subMenu[index]?.subMenu?.[0]?.label || ""
                      );
                      setLastMenuItems(index);
                      setLastMenu(true);
                    }}
                  >
                    {menu[mainNavItem]?.subMenu[index]?.link ? (
                      <Link
                        href={menu[mainNavItem]?.subMenu[index]?.link || ""}
                        className="menuAnchor"
                      >
                        {menu[mainNavItem]?.subMenu[index]?.label}
                      </Link>
                    ) : (
                      <span>
                        {menu[mainNavItem]?.subMenu[index]?.label ||
                          "Invalid Link"}
                      </span>
                    )}
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
      <div className="navbar3">
        <div className="container-fluid">
          <ul
            className="itemsForHover"
            style={{ display: mainNavItem !== 0 ? "none" : "" }}
          >
            {lastMenu && menu[0]?.subMenu[lastMenuItems]?.subMenu
              ? menu[0].subMenu[lastMenuItems].subMenu.map((item, index) => (
                  <li
                    key={index}
                    className={
                      activeTab2 ===
                      (menu[0]?.subMenu[lastMenuItems]?.subMenu?.[index]
                        ?.label || "")
                        ? "tabSelected2"
                        : ""
                    }
                    onClick={() =>
                      setActiveTab2(
                        menu[0]?.subMenu[lastMenuItems]?.subMenu?.[index]
                          ?.label || ""
                      )
                    }
                  >
                    {item?.link ? (
                      <Link href={item.link} className="menuAnchor">
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label || "Invalid Link"}</span>
                    )}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar2025;
