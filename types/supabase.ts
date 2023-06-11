export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          address: string | null
          bio: string | null
          contact: number | null
          created_at: string | null
          date_of_birth: string | null
          first_name: string
          last_name: string
          updated_at: string | null
          user_id: string
          username: string | null
        }
        Insert: {
          address?: string | null
          bio?: string | null
          contact?: number | null
          created_at?: string | null
          date_of_birth?: string | null
          first_name: string
          last_name: string
          updated_at?: string | null
          user_id: string
          username?: string | null
        }
        Update: {
          address?: string | null
          bio?: string | null
          contact?: number | null
          created_at?: string | null
          date_of_birth?: string | null
          first_name?: string
          last_name?: string
          updated_at?: string | null
          user_id?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      properties: {
        Row: {
          address: string | null
          area: number | null
          bathrooms: number | null
          bedrooms: number | null
          city: string | null
          country: string | null
          created_at: string | null
          description: string | null
          id: string
          images: string | null
          price: number | null
          state: string | null
          title: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          address?: string | null
          area?: number | null
          bathrooms?: number | null
          bedrooms?: number | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          description?: string | null
          id: string
          images?: string | null
          price?: number | null
          state?: string | null
          title?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          address?: string | null
          area?: number | null
          bathrooms?: number | null
          bedrooms?: number | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          images?: string | null
          price?: number | null
          state?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string
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
