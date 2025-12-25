// Navbar.jsx - Fixed Click-based Dropdown
"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "@/components/Logo/Logo";


export const Navbar = ({ children, className, onClick }) => {
  return (
    <div className={cn(styles.navbar, className)} onClick={onClick}>
      {children}
    </div>
  );
};

export const NavBody = ({ children, className }) => {
  return (
    <div className={cn(styles.navBody, className)}>
      {children}
    </div>
  );
};

export const NavItems = ({ items, className, onItemClick, desktopDropdownOpen, onDropdownToggle }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className={cn(styles.navItems, className)}
    >
      {items.map((item, idx) => (
        <div key={`link-${idx}`} className={styles.navItemWrapper}>
          {item.children ? (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onDropdownToggle(item.name);
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className={styles.navItem}
                style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 0" }}
              >
                {hovered === idx && (
                  <div className={styles.navItemHover} />
                )}
                <span className={styles.navItemText}>{item.name}</span>
                <IconChevronDown
                  size={16}
                  className={cn(styles.chevronIcon, {
                    [styles.chevronOpen]: desktopDropdownOpen === item.name,
                  })}
                />
              </button>

              {desktopDropdownOpen === item.name && (
                <div className={styles.dropdown} onClick={(e) => e.stopPropagation()}>
                  <a
                    href={item.link}
                    onClick={(e) => {
                      e.preventDefault();
                      onItemClick();
                      window.location.href = item.link;
                    }}
                    className={styles.dropdownItem}
                    style={{ fontWeight: "600", borderBottom: "1px solid rgba(0, 255, 156, 0.2)" }}
                  >
                    <span className={styles.dropdownItemText}>
                       {item.name}
                    </span>
                  </a>
                  {item.children.map((child, childIdx) => (
                    <a
                      key={`child-${childIdx}`}
                      href={child.link}
                      onClick={(e) => {
                        onItemClick();
                      }}
                      className={styles.dropdownItem}
                    >
                      <span className={styles.dropdownItemText}>
                        {child.name}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <a
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onClick={onItemClick}
              className={styles.navItem}
              href={item.link}
            >
              {hovered === idx && (
                <div className={styles.navItemHover} />
              )}
              <span className={styles.navItemText}>{item.name}</span>
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export const MobileNav = ({ children, className }) => {
  return (
    <div className={cn(styles.mobileNav, className)}>
      {children}
    </div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div className={cn(styles.mobileNavHeader, className)}>
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen, onClose }) => {
  return (
    isOpen && (
      <div className={cn(styles.mobileNavMenu, className)}>
        {children}
      </div>
    )
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  return isOpen ? (
    <IconX className={styles.mobileNavToggleIcon} onClick={onClick} />
  ) : (
    <IconMenu2 className={styles.mobileNavToggleIcon} onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a href="/" className={styles.navbarLogo}>
      <Logo />
    </a>
  );
};
