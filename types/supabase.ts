export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      artists: {
        Row: {
          bio: string | null
          created_at: string | null
          dob: string | null
          id: number
          image_links: string[] | null
          name: string | null
          slug: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          dob?: string | null
          id?: number
          image_links?: string[] | null
          name?: string | null
          slug?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          dob?: string | null
          id?: number
          image_links?: string[] | null
          name?: string | null
          slug?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
