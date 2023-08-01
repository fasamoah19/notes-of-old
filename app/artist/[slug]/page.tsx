import Image from "next/image";
import LongBlueLineAnimate from "@/components/LongBlueLineAnimate";
import { Artist } from "@/lib/constants";
import MoreImagesComponent from "@/components/MoreImagesComponent";
import { getArtistBySlug, splitArtistName } from "@/lib/helperFunctions";

type SelectedArtistPageProps = {
  params: { slug: string };
};

type MobileAndDesktopDesignProps = {
  firstName: string;
  restOfName: string;
  artist: Artist;
};

/**
 * Selected Artist Page
 *
 * @param param0 SelectedArtistPageProps
 * @returns SelectedArtistPage
 */
export default async function SelectedArtistPage({
  params,
}: SelectedArtistPageProps) {
  const { artist, error } = await getArtistBySlug(params.slug);
  const { firstName, restOfName } = splitArtistName(artist?.name!);

  if (error) return <div>Received an unexpected error</div>;
  return (
    <div>
      <div className="hidden md:block">
        <DesktopDesign
          firstName={firstName!}
          restOfName={restOfName!}
          artist={artist!}
        />
      </div>
      <div className="block md:hidden">
        <MobileDesign
          firstName={firstName!}
          restOfName={restOfName!}
          artist={artist!}
        />
      </div>
    </div>
  );
}

/**
 * Desktop design of the Selected Artist Page
 *
 * @param param0 MobileAndDesktopDesignProps
 * @returns DesktopDesign component
 */
function DesktopDesign({
  firstName,
  restOfName,
  artist,
}: MobileAndDesktopDesignProps) {
  return (
    <div className="block space-y-32">
      <div className="flex flex-row mt-40 max-w-6xl mx-16 xl:mx-auto items-center space-x-6">
        <div className="flex flex-col space-y-6 items-center">
          <Image
            src={`${artist?.image_links?.[2]}`}
            height={500}
            width={500}
            alt={`${artist?.name} Image`}
            className="shadow-lg"
          />
          <p className="text-gray-500 text-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex-grow"></div>
        <div className="flex flex-col space-y-8 w-1/2 items-end">
          {/** Artist name */}
          <div className="flex flex-row space-x-3 md:text-4xl lg:text-5xl font-bold">
            <h3 className="text-primary">{firstName}</h3>
            <h3>{restOfName}</h3>
          </div>
          {/** Artist Bio */}
          <p className="text-right text-sm font-light">{artist?.bio}</p>
        </div>
      </div>

      {/** Blue Line */}
      <LongBlueLineAnimate
        placement="justify-start"
        lineType={"blue-line-long"}
      />
      <div className="flex flex-row mt-40 max-w-6xl mx-16 xl:mx-auto items-center space-x-6">
        <div className="flex flex-col space-y-8 w-1/2 items-start">
          {/** Artist name */}
          <div className="flex flex-row space-x-3 md:text-4xl lg:text-5xl font-bold">
            <h3 className="text-primary">Lorem</h3>
            <h3>Ipsum</h3>
          </div>
          {/** Artist Bio */}
          <p className="text-left text-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </p>
        </div>

        <div className="flex-grow"></div>
        <div className="flex flex-col space-y-6 items-center">
          <Image
            src={`${artist?.image_links?.[7]}`}
            height={500}
            width={500}
            alt={`${artist?.name} Image`}
            className="shadow-lg"
          />
          <p className="text-gray-500 text-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <LongBlueLineAnimate
        placement="justify-end"
        lineType={"blue-line-long"}
      />
      <MoreImagesComponent
        imageLinks={artist.image_links!}
        firstName={firstName}
        restOfName={restOfName}
      />
    </div>
  );
}

/**
 * Mobile design of the Selected Artist Page
 *
 * @param param0 MobileAndDesktopDesignProps
 * @returns MobileDesign Component
 */
function MobileDesign({
  firstName,
  restOfName,
  artist,
}: MobileAndDesktopDesignProps) {
  return (
    <div className="block space-y-12 mt-20 mx-16">
      <div className="flex flex-row space-x-3 text-5xl font-bold">
        <h3 className="text-primary">{firstName}</h3>
        <h3>{restOfName}</h3>
      </div>
      <LongBlueLineAnimate
        placement="justify-start"
        lineType={"blue-line-long"}
      />
      <div className="flex flex-col space-y-6 items-center">
        <Image
          src={`${artist?.image_links?.[2]}`}
          height={500}
          width={500}
          alt={`${artist?.name} Image`}
        />
        <p className="text-gray-500 text-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <p className="text-left text-sm font-light">{artist?.bio}</p>
      <LongBlueLineAnimate
        placement="justify-end"
        lineType={"blue-line-long"}
      />
      <div className="flex flex-row space-x-3 text-5xl font-bold w-full justify-end">
        <h3 className="text-primary">Lorem</h3>
        <h3>Ipsum</h3>
      </div>
      <div className="flex flex-col space-y-6 items-center">
        <Image
          src={`${artist?.image_links?.[7]}`}
          height={500}
          width={500}
          alt={`${artist?.name} Image`}
        />
        <p className="text-gray-500 text-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <LongBlueLineAnimate
        placement="justify-start"
        lineType={"blue-line-full"}
      />
      <MoreImagesComponent
        imageLinks={artist.image_links!}
        firstName={firstName}
        restOfName={restOfName}
      />
    </div>
  );
}
