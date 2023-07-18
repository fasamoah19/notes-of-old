import { supabase } from "@/lib";
import { Database } from "@/types/supabase";
import Image from "next/image";

type Artist = Database["public"]["Tables"]["artists"]["Row"];

export default async function Home() {
  const { data: artist, error } = await supabase
    .from("artists")
    .select()
    .order("id")
    .limit(1)
    .single();

  return (
    <main className="pl-4 pt-4">
      <p>{artist?.name}</p>
      <Image
        src={`${artist?.image_links?.[0] ?? "#"}`}
        alt={`${artist?.name} Image - Image No: 1`}
        width={400}
        height={400}
      />
      <p>{artist?.bio}</p>
      <p>{artist?.dob}</p>
    </main>
  );
}
