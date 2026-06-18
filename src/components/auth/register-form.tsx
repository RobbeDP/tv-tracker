"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthCard } from "@/components/auth/auth-card";
import { useAuth } from "@/components/auth/auth-provider";
import { SubmitButton } from "@/components/ui/button";
import { FormError } from "@/components/ui/form-error";
import { TextField } from "@/components/ui/text-field";
import { registerSchema, type RegisterValues } from "@/lib/validations/auth";

const SIGN_UP_FAILED_MESSAGE =
  "We couldn't create your account. Please try again.";

export function RegisterForm() {
  const router = useRouter();
  const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit({ email, password }: RegisterValues) {
    const result = await signUp(email, password);

    if (!result.ok) {
      setError("root", { message: SIGN_UP_FAILED_MESSAGE });
      return;
    }

    router.replace("/");
    router.refresh();
  }

  return (
    <AuthCard
      title="Create your account"
      description="Register to start tracking your shows."
      footer={{ prompt: "Already have an account?", href: "/login", linkLabel: "Sign in" }}
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
          autoComplete="new-password"
          error={errors.password?.message}
          hint="At least 8 characters, with a letter and a number."
          {...register("password")}
        />
        <FormError message={errors.root?.message} />
        <SubmitButton pending={isSubmitting}>Create account</SubmitButton>
      </form>
    </AuthCard>
  );
}
