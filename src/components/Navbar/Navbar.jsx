// Navbar.jsx - Hover-based Dropdown with Grid Children
"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX, IconPlus } from "@tabler/icons-react";
import React, { useState, useRef } from "react";
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
  const [active, setActive] = useState(null);
  const leaveTimers = useRef({});

  const handleWrapperEnter = (itemName) => {
    if (leaveTimers.current[itemName]) {
      clearTimeout(leaveTimers.current[itemName]);
      leaveTimers.current[itemName] = null;
    }
    onDropdownToggle(itemName);
  };

  const handleWrapperLeave = (itemName) => {
    leaveTimers.current[itemName] = setTimeout(() => {
      onDropdownToggle("__close__");
    }, 120);
  };

  const handleDropdownEnter = (itemName) => {
    if (leaveTimers.current[itemName]) {
      clearTimeout(leaveTimers.current[itemName]);
      leaveTimers.current[itemName] = null;
    }
  };

  // Whether a given idx should show the underline
  const isUnderlined = (idx) => hovered === idx || (hovered === null && active === idx);

  return (
    <div className={cn(styles.navItems, className)}>
      {items.map((item, idx) => (
        <div
          key={`link-${idx}`}
          className={styles.navItemWrapper}
          onMouseEnter={() => item.children ? handleWrapperEnter(item.name) : null}
          onMouseLeave={() => item.children ? handleWrapperLeave(item.name) : null}
        >
          {item.children ? (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActive(idx);
                  onDropdownToggle(item.name);
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  styles.navItem,
                  hovered === idx ? styles.navItemHovered : "",
                  isUnderlined(idx) ? styles.navItemActive : ""
                )}
                style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 0" }}
              >
                <span className={styles.navItemText}>{item.name}</span>
                <IconPlus
                  size={15}
                  className={cn(styles.chevronIcon, {
                    [styles.chevronOpen]: desktopDropdownOpen === item.name,
                  })}
                />
                <span className={cn(styles.navUnderline, isUnderlined(idx) ? styles.navUnderlineVisible : "")} />
              </button>

              {desktopDropdownOpen === item.name && (
                <div
                  className={styles.dropdown}
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={() => handleDropdownEnter(item.name)}
                  onMouseLeave={() => handleWrapperLeave(item.name)}
                >
                  {/* Section header — links to the parent page */}
                  <div className={styles.dropdownHeader}>
                    <a
                      href={item.link}
                      onClick={(e) => {
                        e.preventDefault();
                        onItemClick();
                        window.location.href = item.link;
                      }}
                      className={styles.dropdownHeaderLink}
                    >
                      <span>Explore {item.name}</span>
                      <span className={styles.dropdownHeaderArrow}>→</span>
                    </a>
                  </div>

                  {/* Children in a grid */}
                  <div className={styles.dropdownItemsGrid}>
                    {item.children.map((child, childIdx) => (
                      <a
                        key={`child-${childIdx}`}
                        href={child.link}
                        onClick={() => { setActive(idx); onItemClick(); }}
                        className={styles.dropdownItem}
                      >
                        <span className={styles.dropdownItemDot} />
                        <span className={styles.dropdownItemText}>{child.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <a
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => { setActive(idx); onItemClick(); }}
              className={cn(
                styles.navItem,
                hovered === idx ? styles.navItemHovered : "",
                isUnderlined(idx) ? styles.navItemActive : ""
              )}
              href={item.link}
            >
              <span className={styles.navItemText}>{item.name}</span>
              <span className={cn(styles.navUnderline, isUnderlined(idx) ? styles.navUnderlineVisible : "")} />
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