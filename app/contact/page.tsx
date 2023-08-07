import Image from "next/image";
import banner from "@/public/contact-us-banner.png";
import { Metadata } from "next";
import ContactElements from "@/components/ContactElements";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us at Notes of Old.",
}

/**
 * Contact Page
 *
 * @returns Contact component
 */
export default function Contact() {

  return (
    <div className="block space-y-12 mt-40 max-w-6xl mx-16 xl:mx-auto">
      <div className="flex flex-col items-start gap-y-7">
        <div className="flex flex-row text-5xl md:text-4xl lg:text-5xl font-bold space-x-2">
          <h3 className="text-primary">Contact</h3>
          <h3>Us</h3>
        </div>
        <Image src={banner} height={300} alt="Contact page banner" />
      </div>

      <ContactElements />
    </div>
  );
}
