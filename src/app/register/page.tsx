import { RegisterForm } from "@/components/auth/register-form";
import { RequireAnonymous } from "@/components/auth/require-anonymous";

export default function RegisterPage() {
  return (
    <RequireAnonymous>
      <RegisterForm />
    </RequireAnonymous>
  );
}
