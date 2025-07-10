'use client';

import { AlignRight, Bell, ChevronDown, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { SideBar } from "../sideBarComp/SideBar";
import styles from './navStyle/nav.module.scss';
import { MainComp } from "../main/MainComp";

export function Header() {
  const [open, setOpen] = useState(false);
  const [openSideNav, setOpenSideNav] = useState(false);

  function handleOpenNavBarOnMobile() {
    alert();
    setOpen(!open);
  }

  function hadleToggle() {
    alert();
    setOpenSideNav(!openSideNav)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div onClick={hadleToggle} className={styles.logo}>
            <img src="/lend-logo.PNG.png" alt="" />
          </div>

          <div className={styles.desktopSearch}>
            <div className={styles.searchWrapper}>
              <Input placeholder="Search for anything" className={styles.searchInput} />
              <Button size="sm" className={styles.searchButton}>
                <Search className={styles.searchIcon} />
              </Button>
            </div>
          </div>

          <div className={styles.rightSection}>
            <Button variant="ghost" size="sm" className={styles.docsButton}>
              Docs
            </Button>
            <Bell className={styles.bellIcon} />
            <div className={styles.profileGroup}>
              <div className={styles.profileAvatar}></div>
              <div className={styles.profileName}>
                <span>Adedeji</span>
                <ChevronDown className={styles.dropdownIcon} />
              </div>
            </div>
          </div>

          <div onClick={handleOpenNavBarOnMobile} className={styles.mobileMenuIcon}>
            <AlignRight />
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className={` ${open ? styles.mobileMenuOpen : styles.mobileMenuClosed}`}>
          <div className={styles.mobileMenu}>
            <div className={styles.mobileGroup}>
              <Button variant="ghost" size="icon">
                <Bell className={styles.bellIcon} />
              </Button>
              <span className={styles.docs}>Docs</span>
            </div>

            <div className={styles.mobileGroup}>
              <div className={styles.profileAvatar}></div>
              <div className={styles.profileName}>
                <span>Adedeji</span>
                <ChevronDown className={styles.dropdownIcon} />
              </div>
            </div>

            <div className={styles.searchWrapper}>
              <Input placeholder="Search for anything" className={styles.searchInput} />
              <Button size="sm" className={styles.searchButton}>
                <Search className={styles.searchIcon} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className={styles.main}>
        {/* mobile */}
        <div className="block lg:hidden">
          <div className={`${openSideNav ? 'block' : 'hidden'} absolute w-[95%] overflow-x-hidden z-40`}>
            <SideBar />
          </div>

          <div>
            <MainComp />
          </div>
        </div>

        {/* desktop */}

        <div className="hidden lg:flex w-full gap-1.5">
          <div className="w-[250px]">
            <SideBar />
          </div>

          <div className="flex-1 pr-7">
            <MainComp />
          </div>
        </div>

      </main>
    </div>
  );
}