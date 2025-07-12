'use client';

import { AlignRight, Bell, ChevronDown, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import styles from './user-details-style/user.module.scss';
import { SideNavTwo } from "../sideBarTwo/sideNavTwo";
import { UserCompDetails } from "../userComp/UserCompDetails";
import { HeaderLogoOne } from "../svgComp/AllSvgComp";
import Image from "next/image";

export function UserDetailsComp() {
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
            <Bell className={styles.bellIcon} />
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
          <div className={`${openSideNav ? 'block' : 'hidden'} absolute w-[95%] overflow-x-hidden z-40 top-20`}>
            <SideNavTwo />
          </div>

          <div>
            <UserCompDetails />
          </div>
        </div>

        {/* desktop */}

        <div className="hidden lg:block">
          <div className={styles.layoutWrapper}>
            <div className={styles.sidebarWrapper}>
              <SideNavTwo />
            </div>

            <div className={styles.contentWrapper}>
              <UserCompDetails />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}