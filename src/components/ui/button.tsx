import type { ButtonHTMLAttributes } from "react";

import { Spinner } from "@/components/ui/spinner";

type Variant = "primary" | "secondary" | "ghost";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300",
  secondary:
    "border border-zinc-300 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900",
  ghost:
    "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={`${baseClasses} px-4 py-2 ${variantClasses[variant]} ${className ?? ""}`}
      {...props}
    />
  );
}

type SubmitButtonProps = Omit<ButtonProps, "type"> & {
  pending?: boolean;
};

export function SubmitButton({
  pending = false,
  disabled,
  children,
  className,
  ...props
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={pending || disabled}
      className={`w-full ${className ?? ""}`}
      {...props}
    >
      {pending ? <Spinner className="text-current" /> : children}
    </Button>
  );
}

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function IconButton({
  variant = "ghost",
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={`${baseClasses} p-2 ${variantClasses[variant]} ${className ?? ""}`}
      {...props}
    />
  );
}
