import { LoginForm } from "@/components/auth/login-form";
import { RequireAnonymous } from "@/components/auth/require-anonymous";

export default function LoginPage() {
  return (
    <RequireAnonymous>
      <LoginForm />
    </RequireAnonymous>
  );
}
