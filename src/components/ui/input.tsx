import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import * as React from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";

const inputVariants = cva(
  "flex h-10 w-full border border-input px-3.5 py-2.5 font-semibold transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-foreground/40 text-[13px]",
  {
    variants: {
      type: {
        default:
          "bg-background rounded-lg file:border-0 file:bg-transparent file:text-[13px] file:font-medium file:text-foreground",
        search: "bg-slate-50 rounded-full",
      },
    },
    defaultVariants: {
      type: "default",
    },
  },
);

export type InputProps = React.ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const typeVariant = type === "search" ? "search" : "default";

    return (
      <input
        type={type}
        className={cn(inputVariants({ type: typeVariant }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

interface InputFormFieldProps<T extends FieldValues>
  extends Omit<InputProps, "form"> {
  form: UseFormReturn<T>;
  label: string;
  name: Path<T>;
  inputClassName?: string;
}

export function InputFormField<T extends FieldValues>({
  form,
  label,
  name,
  className,
  inputClassName,
  ...props
}: InputFormFieldProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input className={inputClassName} {...field} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
