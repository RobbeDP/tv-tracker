import type { User } from "@supabase/supabase-js";

export type AuthResult = { ok: boolean };

export type AuthStateListener = (user: User | null) => void;

export interface AuthService {
  getCurrentUser(): Promise<User | null>;
  onAuthStateChange(listener: AuthStateListener): () => void;
  signIn(email: string, password: string): Promise<AuthResult>;
  signUp(email: string, password: string): Promise<AuthResult>;
  signOut(): Promise<void>;
}
