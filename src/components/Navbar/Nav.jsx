"use client";

import { useState, useRef, useEffect } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
} from "./Navbar";
import LanguageSwitcherWrapper from "./LanguageSwitcherWrapper";
import styles from "./Navbar.module.css";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Who We Are", link: "/about" },
  {
    name: "What We Do",
    link: "/services",
    children: [
      { name: "Big Data Solutions", link: "/services/bigdata" },
      { name: "Mobile Application Development", link: "/services/mobile" },
      { name: "Data Integration/Data Governance Services", link: "/services/data" },
      { name: "Custom Development ", link: "/services/custom" },
      { name: "Cyber Security Solutions", link: "/services/cyber" },
      { name: "Supply Chain & Logistics Solutions", link: "/services/supply" },
      { name: "AI Solutions", link: "/services/ai" },
      { name: "Digital Marketing", link: "/services/digital" },

    ],
  },
  {
    name: "Industries Covered",
    link: "/industry",
    children: [
      { name: "Telecom", link: "/industry/telecom" },
      { name: "BFSI", link: "/industry/bfsi" },
      { name: "Healthcare & Life Sciences", link: "/industry/health" },
      { name: "Logistics and Automation", link: "/industry/logistic" },
    ],
  },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(null);

  const navbarRef = useRef(null);

  // ✅ CLOSE DESKTOP DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setDesktopDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleNavItemClick = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
    setDesktopDropdownOpen(null);
  };

  const toggleMobileDropdown = (itemName) => {
    setMobileDropdownOpen((prev) =>
      prev === itemName ? null : itemName
    );
  };

  const toggleDesktopDropdown = (itemName) => {
    // "__close__" is a sentinel sent by hover-leave to close without toggling
    if (itemName === "__close__") {
      setDesktopDropdownOpen(null);
      return;
    }
    setDesktopDropdownOpen((prev) =>
      prev === itemName ? null : itemName
    );
  };

  return (
    <div ref={navbarRef}>
      <Navbar>
        {/* ================= DESKTOP NAV ================= */}
        <NavBody>
          <NavbarLogo />

          <NavItems
            items={navItems}
            onItemClick={handleNavItemClick}
            desktopDropdownOpen={desktopDropdownOpen}
            onDropdownToggle={toggleDesktopDropdown}
          />

          <LanguageSwitcherWrapper />
        </NavBody>

        {/* ================= MOBILE NAV ================= */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <LanguageSwitcherWrapper />
              <MobileNavToggle
                isOpen={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu isOpen={mobileMenuOpen}>
            {navItems.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    {/* Parent item */}
                    <div
                      className={styles.mobileNavItem}
                      onClick={() => toggleMobileDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <span
                        className={`${styles.mobileChevron} ${
                          mobileDropdownOpen === item.name ? styles.rotate : ""
                        }`}
                      >
                        ▼
                      </span>
                    </div>

                    {/* Children */}
                    <div
                      className={`${styles.mobileDropdown} ${
                        mobileDropdownOpen === item.name ? styles.open : ""
                      }`}
                    >
                      <a
                        href={item.link}
                        onClick={handleNavItemClick}
                        className={styles.mobileDropdownItem}
                        style={{ fontWeight: 600 }}
                      >
                        {item.name}
                      </a>

                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.link}
                          onClick={handleNavItemClick}
                          className={styles.mobileDropdownItem}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.link}
                    onClick={handleNavItemClick}
                    className={styles.mobileNavItem}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}