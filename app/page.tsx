import ImageGrid from "@/components/ImageGrid";
import { supabase } from "@/lib";
import { Artist } from "@/lib/constants";
import { generateImageLinkColumns } from "@/lib/helperFunctions";

/**
 * Home Page
 *
 * @returns Home component
 */
export default async function Home() {
  const { singleColumn, twoColumns, threeColumns } = await getArtistImages();

  return (
    <main className="pt-4 max-w-6xl mx-16 xl:mx-auto">
      <div className="flex justify-center my-10">
        <p className="font-extralight italic text-sm">
          Gallery Art for Jazz Artists of the 50s, 60s and 70s
        </p>
      </div>
      <ImageGrid singleColumn={singleColumn} twoColumns={twoColumns} threeColumns={threeColumns} />
    </main>
  );
}

/** Retrieve's the artist images  */
async function getArtistImages() {
  const { data: artists, error } = await supabase.from("artists").select();
  return generateImageLinkColumns(artists as Artist[]);
}