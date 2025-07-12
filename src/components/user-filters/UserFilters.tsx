'use client';

import { AlignRight, Bell, ChevronDown, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import styles from './filterOptions/filter.module.scss';
import { FilterMainComp } from "../filterMainOptionComp/FilterMainComp";
import { BellIcon, HeaderLogoOne } from "../svgComp/AllSvgComp";
import { SideBar } from "../sideBarComp/SideBar";
import Image from "next/image";

export function UserFilters() {
  const [open, setOpen] = useState(false);
  const [openSideNav, setOpenSideNav] = useState(false);

  function handleOpenNavBarOnMobile() {
    setOpen(!open);
  }

  function hadleToggle() {
    setOpenSideNav(!openSideNav)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div onClick={hadleToggle} className={styles.logo}>
            <HeaderLogoOne />
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
            <BellIcon />
            <div className={styles.profileGroup}>
              <Image
                className="rounded-full"
                src={'/86d7f2b572489965cfe49416e536ab3ac00e669a.png'}
                height={10}
                width={25}
                alt="/svg"
              />
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
              <Bell className={styles.bellIcon} />
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
          <div className={`${openSideNav ? 'block' : 'hidden'} fixed w-[95%] overflow-x-hidden top-16 z-40 h-[100vh]`}>
            <SideBar />
          </div>

          <div className="w-[95%] m-auto">
            <FilterMainComp />
          </div>
        </div>

        {/* desktop */}

        <div className="hidden lg:flex">
          <div className={styles.sidebarWrapper}>
            <SideBar />
          </div>

          <div className="ml-[229px] w-[calc(95%-200px)]  overflow-x-hidden">
            <FilterMainComp />
          </div>
        </div>

      </main>
    </div>
  );
}