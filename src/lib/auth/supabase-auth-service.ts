import { supabase } from "@/lib/supabase/client";
import type { AuthResult, AuthService, AuthStateListener } from "./types";

class SupabaseAuthService implements AuthService {
  async getCurrentUser() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    return session?.user ?? null;
  }

  onAuthStateChange(listener: AuthStateListener): () => void {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      listener(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }

  async signIn(email: string, password: string): Promise<AuthResult> {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return { ok: !error };
  }

  async signUp(email: string, password: string): Promise<AuthResult> {
    const { error } = await supabase.auth.signUp({ email, password });

    return { ok: !error };
  }

  async signOut(): Promise<void> {
    await supabase.auth.signOut();
  }
}

export const authService: AuthService = new SupabaseAuthService();
