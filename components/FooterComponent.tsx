import Link from "next/link";

/**
 * Footer component
 * 
 * @returns Footer
 */
export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-footerColor">
      <div className="flex flex-col md:flex-row mx-16 my-8 items-center">
        {/** Links */}
        <div className="flex flex-col gap-y-8 font-bold text-sm">
          <Link
            href={"#"}
            className={
              "text-black hover:text-primary transition-all duration-200"
            }
          >
            home
          </Link>
          <Link
            href={"#"}
            className={
              "text-black hover:text-primary transition-all duration-200"
            }
          >
            contact
          </Link>
          <Link
            href={"#"}
            className={
              "text-black hover:text-primary transition-all duration-200"
            }
          >
            about us
          </Link>
        </div>

        {/** Spacer */}
        <div className="flex flex-grow py-6 md:py-0">
          <p className="md:hidden font-extralight italic text-sm">Gallery Art for Jazz Artists of the 50s, 60s and 70s</p>
        </div>

        {/** Logo */}
        <div className="flex flex-row font-black text-2xl items-end">
          <p className="text-lg">©</p>
          <p>&nbsp;</p>
          <p className="text-primary">notes</p>
          <p>&nbsp;</p>
          <p>of old</p>
        </div>
      </div>
    </footer>
  );
}
