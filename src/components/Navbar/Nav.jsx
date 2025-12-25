"use client";

import { useState } from "react";
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
  { name: "About", link: "/about" },
  {
    name: "Services",
    link: "/services",
    children: [
      { name: "Big Data", link: "/services/bigdata" },
      { name: "Data Integration/Data Governance", link: "/services/data" },
      { name: "Metadata Management", link: "/services/meta" },
      { name: "Custom Development", link: "/services/custom" },
      { name: "Industry 4.0", link: "/services/industry" },
    ],
  },
  { 
    name: "Industries", 
    link: "/industry",
    children: [
      { name: "Telecom", link: "/industry/telecom" },
      { name: "BFSI", link: "/industry/bfsi" },
      { name: "Healthcare", link: "/industry/healthcare" },
      { name: "Logistics and Automation", link: "/industry/logistics" },
    ], 
  
  },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(null);

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
    setDesktopDropdownOpen((prev) =>
      prev === itemName ? null : itemName
    );
  };

  return (
    <Navbar onClick={() => setDesktopDropdownOpen(null)}>
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
              onClick={() => setMobileMenuOpen((v) => !v)}
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

                  {/* Children (always rendered, CSS controls height) */}
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
  );
}
