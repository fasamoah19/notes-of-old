import { Database } from "@/types/supabase";

/** Artist Supabase Object */
export type Artist = Database["public"]["Tables"]["artists"]["Row"];
