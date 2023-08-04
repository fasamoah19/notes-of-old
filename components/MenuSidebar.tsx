import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

/** Props necessary for the component */
type MenuSideBarProps = {
  pathname: string;
  openSideBar: boolean;
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
};

/**
 * A Sidebar component that displays the header links
 * for a mobile device
 * 
 * @param param0 MenuSideBarProps
 * @returns MenuSideBar
 */
export default function MenuSideBar({
  pathname,
  openSideBar,
  setOpenSideBar
}: MenuSideBarProps) {
  return (
    <div
      className={`flex top-0 right-0 w-[40vw] bg-sideBar py-20 justify-center text-white fixed h-full ease-in-out duration-500 shadow-2xl z-10 ${
        openSideBar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="mt-20 text-2xl flex flex-col font-semibold text-white gap-y-12 items-center">
        <Link
          href={"/"}
          className={pathname == "/" ? "text-black" : "text-white"}
          onClick={() => setOpenSideBar(false)}
        >
          home
        </Link>
        <Link
          href={"/contact"}
          className={
            pathname.startsWith("/contact") ? "text-black" : "text-white"
          }
          onClick={() => setOpenSideBar(false)}
        >
          contact
        </Link>
        <Link
          href={"/about"}
          className={
            pathname.startsWith("/about") ? "text-black" : "text-white"
          }
          onClick={() => setOpenSideBar(false)}
        >
          about us
        </Link>
      </nav>
    </div>
  );
}
