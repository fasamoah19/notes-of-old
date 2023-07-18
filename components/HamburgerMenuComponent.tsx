import { Dispatch, SetStateAction } from "react";

/** Necessary props for the application */
type HamburgerMenuProps = {
  openSideBar: boolean;
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
};

/**
 * Hamburger Menu Component
 *
 * @returns HamburgerMenu
 */
export default function HamburgerMenu({
  openSideBar,
  setOpenSideBar,
}: HamburgerMenuProps) {
  const genericHamburgerLine = `h-0.5 w-7 my-0.5 rounded-full bg-black transition ease transform duration-300`;

  return (
    <button
      className="flex flex-col h-12 w-12 justify-center items-center group z-50"
      onClick={() => setOpenSideBar(!openSideBar)}
    >
      <div
        className={`${genericHamburgerLine} ${
          openSideBar
            ? "rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          openSideBar ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          openSideBar
            ? "-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
}
