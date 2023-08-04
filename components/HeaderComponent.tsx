"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenuComponent";
import { Dispatch, SetStateAction, useState } from "react";
import MenuSideBar from "./MenuSidebar";

/**
 * Header component
 *
 * @returns Header
 */
export default function Header() {
  const pathname = usePathname();
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  return (
    <header className="mt-6 max-w-6xl mx-16 xl:mx-auto">
      <div className="flex flex-row items-center">
        {/** Logo */}
        <Link
          href={"/"}
          className="flex flex-row font-black text-xl md:text-2xl"
        >
          <p className="text-primary">notes</p>
          <p>&nbsp;</p>
          <p>of old</p>
        </Link>

        {/** Spacer */}
        <div className="flex-grow"></div>

        {/** Header links */}
        <DesktopHeaderLinks pathname={pathname} />
        <MobileHeaderLinks
          pathname={pathname}
          openSideBar={openSideBar}
          setOpenSideBar={setOpenSideBar}
        />
      </div>
    </header>
  );
}

/** Necessary props for the Desktop and Mobile Header Links */
type HeaderLinksProps = {
  pathname: string;
};

/**
 * Header Link design used for Desktops
 * 
 * @param param0 HeaderLinksProps
 * @returns DesktopHeaderLinks
 */
function DesktopHeaderLinks({ pathname }: HeaderLinksProps) {
  return (
    <nav className="hidden md:flex flex-row font-bold text-sm gap-x-8 lg:gap-x-16">
      <Link
        href={"/"}
        className={pathname == "/" ? "text-primary" : "text-black"}
      >
        home
      </Link>
      <Link
        href={"/contact"}
        className={
          pathname.startsWith("/contact") ? "text-primary" : "text-black"
        }
      >
        contact
      </Link>
      <Link
        href={"/about"}
        className={
          pathname.startsWith("/about") ? "text-primary" : "text-black"
        }
      >
        about us
      </Link>
    </nav>
  );
}

/** Props necessary for the Mobile Header Links */
type MobileHeaderLinksProps = HeaderLinksProps & {
  openSideBar: boolean;
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
};

/**
 * Header Links used for Mobile screens
 * 
 * @param param0 MobileHeaderLinksProps
 * @returns MobileHeaderLinks
 */
function MobileHeaderLinks({
  pathname,
  openSideBar,
  setOpenSideBar,
}: MobileHeaderLinksProps) {
  return (
    <div className="md:hidden flex">
      <HamburgerMenu
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
      />
      <MenuSideBar pathname={pathname} openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
    </div>
  );
}
