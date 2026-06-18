import { z } from "zod";

const emailValidation = z.email("Enter a valid email address");

const passwordValidation = z.string().min(1, "Password is required")

// TODO: setup proper password validation
const newPasswordValidation = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[a-zA-Z]/, "Password must contain at least one letter")
  .regex(/[0-9]/, "Password must contain at least one number");

export const loginSchema = z.object({
  email: emailValidation,
  password: passwordValidation
});

export const registerSchema = z.object({
  email: emailValidation,
  password: newPasswordValidation
});

export type LoginValues = z.infer<typeof loginSchema>;
export type RegisterValues = z.infer<typeof registerSchema>;
