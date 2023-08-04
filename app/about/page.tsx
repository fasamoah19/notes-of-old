"use client";

import CustomButton from "@/components/CustomButton";
import LongBlueLineAnimate from "@/components/LongBlueLineAnimate";
import Image from "next/image";
import Link from "next/link";

/**
 * About Us Page
 *
 * @returns AboutPage component
 */
export default function AboutPage() {
  const aliceLink =
    "https://nozoovsgwamdhvmmujlx.supabase.co/storage/v1/object/public/artist-images/alice-coltrane-5.jpeg";
  const theloniusLink =
    "https://nozoovsgwamdhvmmujlx.supabase.co/storage/v1/object/public/artist-images/thelonius-monk-3.webp";
  return (
    <div>
      <div className="hidden md:block">
        <DesktopDesign aliceLink={aliceLink} theloniusLink={theloniusLink} />
      </div>
      <div className="block md:hidden">
        <MobileDesign aliceLink={aliceLink} theloniusLink={theloniusLink} />
      </div>
    </div>
  );
}
/** Props necessary for the Mobile and Desktop designs
 * of the about us page
 */
type DesktopAndMobileDesignProps = {
  aliceLink: string;
  theloniusLink: string;
};

/**
 * Desktop design for the About Us page
 *
 * @param param0 DesktopAndMobileDesignProps
 * @returns DesktopDesign component
 */
function DesktopDesign({
  aliceLink,
  theloniusLink,
}: DesktopAndMobileDesignProps) {
  return (
    <div className="block space-y-32">
      {/** Blue Line Alice Section */}
      <div className="absolute w-full top-56 z-0">
        <LongBlueLineAnimate
          placement={"justify-start"}
          lineType={"blue-line-long"}
        />
      </div>
      {/** Text about the site */}
      <div className="flex flex-row mt-40 max-w-6xl mx-16 xl:mx-auto items-center space-x-6">
        <div className="flex flex-col space-y-6 items-center">
          <p className="text-left text-sm font-light w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue.
          </p>
        </div>

        <div className="flex-grow"></div>
        {/** Alice Coltrane Image */}
        <div className="flex flex-col space-y-6 items-center z-10">
          <Image
            src={aliceLink}
            height={500}
            width={500}
            alt={"Alice Image"}
            className="shadow-lg"
          />
        </div>
      </div>
      {/** Highlighted Text */}
      <div className="flex flex-row mt-40 mx-16 xl:mx-auto justify-center">
        <p className="font-bold text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      {/** Blue Line */}
      <LongBlueLineAnimate
        placement={"justify-end"}
        lineType={"blue-line-long"}
      />
      {/** Blue Line Thelonius Section */}
      <div className="absolute w-full top-[815px] z-0">
        <LongBlueLineAnimate
          placement={"justify-start"}
          lineType={"blue-line-long"}
        />
      </div>
      {/** Second portion */}
      <div className="flex flex-row mt-40 max-w-6xl mx-16 xl:mx-auto items-start space-x-6">
        {/** Thelonius Monk Image */}
        <div className="flex flex-col space-y-6 items-center z-10">
          <Image
            src={theloniusLink}
            height={500}
            width={500}
            alt={"Thelonius Image"}
            className="shadow-lg"
          />
        </div>
        <div className="flex-grow"></div>
        <div className="flex flex-col space-y-6 items-center">
          <p className="text-left text-sm font-light w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </p>
          <div className="my-14"></div>
          <p className="text-left text-sm font-light w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id.Lorem ipsum dolor sit amet,
          </p>
        </div>
      </div>
      <LongBlueLineAnimate
        placement={"justify-end"}
        lineType={"blue-line-long"}
      />
      {/** Contact Us button */}
      <div className="flex flex-row mt-40 mx-16 xl:mx-auto justify-center">
        <Link href={"/contact"}>
          <CustomButton text="Contact Us" />
        </Link>
      </div>
    </div>
  );
}

/**
 * Mobile Design for the About Us Page
 *
 * @param param0 DesktopAndMobileDesignProps
 * @returns MobileDesign component
 */
function MobileDesign({
  aliceLink,
  theloniusLink,
}: DesktopAndMobileDesignProps) {
  return (
    <div className="block space-y-12 mt-20 mx-16">
      {/** Title */}
      <div className="flex flex-row space-x-3 text-5xl font-bold">
        <h3 className="text-primary">About</h3>
        <h3>Us</h3>
      </div>
      {/** About us text */}
      <p className="text-left text-sm font-light w-[400px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus. Nullam quis imperdiet augue.
      </p>
      {/** Alice Coltrane Image */}
      <Image
        src={aliceLink}
        height={500}
        width={500}
        alt={`Alice Coltrane Image`}
      />
      {/** Blue Line */}
      <LongBlueLineAnimate
        placement="justify-start"
        lineType={"blue-line-long"}
      />
      {/** Highlighted/Bolded text */}
      <div className="flex flex-row w-full justify-center">
        <p className="font-bold text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      {/** Blue line */}
      <div className="flex flex-row justify-end">
        <div className="blue-line-short"></div>
      </div>
      {/** More About Us text */}
      <p className="text-left text-sm font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna.
      </p>
      {/** Thelonius Monk Image */}
      <Image
        src={theloniusLink}
        height={500}
        width={500}
        alt={`Thelonius Monk Image`}
      />
      {/** More About Us text */}
      <p className="text-left text-sm font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
        suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
        ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
        Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
        iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit
        amet,
      </p>
      {/** Blue Line */}
      <LongBlueLineAnimate
        placement="justify-start"
        lineType={"blue-line-full"}
      />
      {/** Contact Us button */}
      <div className="flex flex-row justify-center">
        <Link href={"/contact"}>
          <CustomButton text="Contact Us" />
        </Link>
      </div>
    </div>
  );
}
