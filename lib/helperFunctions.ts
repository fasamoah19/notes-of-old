import { Artist } from "./constants";

/**
 * Shuffles the items in an array
 * 
 * @param array Any array
 * @returns Shuffled array
 */
export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

/**
 * Takes an array of artist objects, takes all the image links for each artist
 * (nine per artist), shuffles them and splits them into arrays to be utilized 
 * depending on the screen size.
 * 
 * Min 1280px = Three columns
 * Min 768px = Two Columns
 * Less than 768px = One Column
 * 
 * @param artists Array of artist objects from Supabase
 * @returns Three arrays of the image links split.
 */
export const generateImageLinkColumns = (artists: Artist[]) => {
  let links: string[] = [];

  artists?.map((artist) => {
    // links.push(...artist.image_links!);
    links.push(artist.image_links?.[5] ?? "")
  });

  const shuffedLinks = shuffleArray(links);

  let copyForThirds: string[] = [...shuffedLinks];
  const threePartIndex = Math.ceil(copyForThirds.length / 3);

  const thirdsLastColumn = copyForThirds.splice(-threePartIndex);
  const thirdsSecondColumn = copyForThirds.splice(-threePartIndex);
  const thirdsFirstColumn = copyForThirds;

  const copyofThirdsLastColumn = [...thirdsLastColumn]

  const secondsLastColumnAddition = copyofThirdsLastColumn.splice(-Math.ceil(copyofThirdsLastColumn.length / 2))
  const secondsFirstColumnAddition = copyofThirdsLastColumn

  const threeColumns = {
    "1": thirdsFirstColumn,
    "2": thirdsSecondColumn,
    "3": thirdsLastColumn,
  };

  const twoColumns = {
    "1": [...thirdsFirstColumn, ...secondsFirstColumnAddition],
    "2": [...thirdsSecondColumn, ...secondsLastColumnAddition],
  };

  return { singleColumn: shuffedLinks, twoColumns, threeColumns };
}

/**
 * Retrieve's the artist name from the image link
 * 
 * @param link Image Link
 * @returns Artist Name string
 */
export const configureArtistNameFromLink = (link: string) => {
  const artistNameArr = link
    .split("artist-images/")[1]
    .split(".")[0]
    .match(/[a-zA-Z]+/g);
  const artistName = artistNameArr
    ?.slice(0, artistNameArr.length)
    .join()
    .replaceAll(",", " ")
    .split(" ");

  let finalName = "";
  artistName?.map((name) => {
    finalName = finalName + name.charAt(0).toUpperCase() + name.slice(1) + " ";
  });

  return finalName.trim();
};