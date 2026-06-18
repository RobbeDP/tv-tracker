"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthCard } from "@/components/auth/auth-card";
import { useAuth } from "@/components/auth/auth-provider";
import { SubmitButton } from "@/components/ui/button";
import { FormError } from "@/components/ui/form-error";
import { TextField } from "@/components/ui/text-field";
import { loginSchema, type LoginValues } from "@/lib/validations/auth";

const SIGN_IN_FAILED_MESSAGE =
  "We couldn't sign you in. Please check your details and try again.";

export function LoginForm() {
  const router = useRouter();
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit({ email, password }: LoginValues) {
    const result = await signIn(email, password);

    if (!result.ok) {
      setError("root", { message: SIGN_IN_FAILED_MESSAGE });
      return;
    }

    router.replace("/");
    router.refresh();
  }

  return (
    <AuthCard
      title="Welcome back"
      description="Sign in to track your shows."
      footer={{ prompt: "No account yet?", href: "/register", linkLabel: "Create one" }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          error={errors.email?.message}
          {...register("email")}
        />
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          error={errors.password?.message}
          {...register("password")}
        />
        <FormError message={errors.root?.message} />
        <SubmitButton pending={isSubmitting}>Sign in</SubmitButton>
      </form>
    </AuthCard>
  );
}
