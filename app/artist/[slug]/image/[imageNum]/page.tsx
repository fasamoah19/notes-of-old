import LongBlueLineAnimate from "@/components/LongBlueLineAnimate";
import { Artist } from "@/lib/constants";
import {
  getArtistBySlug,
  getSlug,
  splitArtistName,
} from "@/lib/helperFunctions";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import MoreImagesComponent from "@/components/MoreImagesComponent";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

/** Props necessary for the component */
type SelectedImagePageProps = {
  params: { slug: string; imageNum: string };
};

/**
 * Generates metadata for the selected image page
 * 
 * @param param0 SelectedImagePageProps
 * @param parent Prior metadata from previous pages
 * @returns Metadata
 */
export async function generateMetadata(
  { params }: SelectedImagePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { artist, error } = await getArtistBySlug(params.slug);

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${artist?.name} Image ${params.imageNum}`,
    description: `${artist?.name} Image ${params.imageNum} download.`,
    openGraph: {
      images: [artist?.image_links?.[0] ?? '', ...previousImages]
    }
  }
}

/**
 * Selected Image Page
 *
 * @param param0 SelectedImagePageProps
 * @returns SelectedImagePage
 */
export default async function SelectedImagePage({
  params,
}: SelectedImagePageProps) {
  const imageNum = params.imageNum;

  const { artist, error } = await getArtistBySlug(params.slug);
  const { firstName, restOfName } = splitArtistName(artist?.name!);

  return (
    <div>
      <div className="hidden md:block">
        <DesktopDesign
          artist={artist!}
          firstName={firstName!}
          restOfName={restOfName!}
          imageNum={imageNum}
        />
      </div>
      <div className="block md:hidden">
        <MobileDesign
          firstName={firstName!}
          restOfName={restOfName!}
          artist={artist!}
          imageNum={imageNum}
        />
      </div>
    </div>
  );
}

/** Props used for the Mobile and Desktop designs */
type MobileAndDesktopDesignProps = {
  firstName: string;
  restOfName: string;
  artist: Artist;
  imageNum: string;
};

/**
 * Desktop design for the Selected Image Page
 *
 * @param param0 MobileAndDesktopDesignProps
 * @returns DesktopDesign
 */
function DesktopDesign({
  firstName,
  restOfName,
  artist,
  imageNum,
}: MobileAndDesktopDesignProps) {
  return (
    <div className="block space-y-32">
      <div className="absolute w-full top-72">
        <LongBlueLineAnimate
          placement={"justify-start"}
          lineType={"blue-line-long"}
        />
      </div>

      <div className="flex flex-row mt-40 max-w-6xl mx-16 xl:mx-auto items-start space-x-6">
        <div className="flex flex-col space-y-6 items-center">
          {/** Selected Image */}
          <Image
            src={`${artist?.image_links?.[parseInt(imageNum) - 1]}`}
            height={500}
            width={500}
            alt={`${artist?.name} Image`}
            className="z-10 shadow-lg"
          />
          <p className="text-gray-500 text-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex-grow"></div>
        <div className="flex flex-col space-y-32 w-1/2 items-end">
          {/** Artist name */}
          <Link
            href={`/artist/${getSlug(`${firstName} ${restOfName}`)}`}
            className="flex flex-row space-x-3 md:text-4xl lg:text-5xl font-bold hover:cursor-pointer"
          >
            <h3 className="text-primary">{firstName}</h3>
            <h3>{restOfName}</h3>
          </Link>
          <p className="text-right text-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </p>
          {/** Download Button */}
          <CustomButton text="Download" />
        </div>
      </div>
      <LongBlueLineAnimate
        placement={"justify-end"}
        lineType={"blue-line-long"}
      />
      {/** More Images Section */}
      <div className="flex flex-col mt-40 max-w-6xl mx-16 xl:mx-auto items-start space-x-6">
        <div className="flex flex-row space-x-3 md:text-4xl lg:text-5xl font-bold">
          <h3 className="text-primary">More</h3>
          <h3>Images</h3>
        </div>
      </div>
      <MoreImagesComponent
        imageLinks={artist.image_links!}
        firstName={firstName}
        restOfName={restOfName}
      />
    </div>
  );
}

/**
 * Mobile design for the Selected Image Page
 *
 * @param param0 MobileAndDesktopDesignProps
 * @returns MobileDesign component
 */
function MobileDesign({
  firstName,
  restOfName,
  artist,
  imageNum,
}: MobileAndDesktopDesignProps) {
  return (
    <div className="block space-y-12 mt-20 mx-16">
      {/** Artist Name */}
      <Link
        href={`/artist/${getSlug(`${firstName} ${restOfName}`)}`}
        className="flex flex-row space-x-3 text-5xl font-bold hover:cursor-pointer"
      >
        <h3 className="text-primary">{firstName}</h3>
        <h3>{restOfName}</h3>
      </Link>
      <LongBlueLineAnimate
        placement="justify-start"
        lineType={"blue-line-long"}
      />
      {/** Selected Image */}
      <div className="flex flex-col space-y-6 items-center">
        <Image
          src={`${artist?.image_links?.[parseInt(imageNum) - 1]}`}
          height={500}
          width={500}
          alt={`${artist?.name} Image`}
        />
        <p className="text-gray-500 text-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <p className="text-center text-sm font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna.
      </p>
      {/** Download Button */}
      <div className="flex flex-row justify-center">
        <CustomButton text="Download" />
      </div>
      <LongBlueLineAnimate
        placement="justify-end"
        lineType={"blue-line-full"}
      />
      {/** More Images Section */}
      <div className="flex flex-col mt-40 max-w-6xl items-start space-x-6">
        <div className="flex flex-row space-x-3 text-5xl font-bold">
          <h3 className="text-primary">More</h3>
          <h3>Images</h3>
        </div>
      </div>
      <MoreImagesComponent
        imageLinks={artist.image_links!}
        firstName={firstName}
        restOfName={restOfName}
      />
    </div>
  );
}
