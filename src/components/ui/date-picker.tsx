import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { DayPickerSingleProps } from "react-day-picker";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";

interface DatePickerProps extends Partial<DayPickerSingleProps> {
  value?: Date;
  onChange?(value?: Date): void;
  placeholder?: string;
  className?: string;
  modal?: boolean;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Pick a date",
  className,
  modal = false,
  ...props
}: DatePickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen} modal={modal}>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            className={cn("w-48 justify-between px-3.5 font-normal", className)}
          >
            <span className={cn("truncate", { "opacity-40": !value })}>
              {value ? format(value, "PP") : placeholder}
            </span>
            <CalendarIcon className={cn("mr-2 text-foreground opacity-40")} />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          selected={value}
          onSelect={(value) => {
            onChange?.(value);
            setOpen(false);
          }}
          initialFocus
          {...props}
          mode="single"
        />
      </PopoverContent>
    </Popover>
  );
}

interface DateFormFieldProps<T extends FieldValues>
  extends Partial<DayPickerSingleProps> {
  form: UseFormReturn<T>;
  label: string;
  name: Path<T>;
  placeholder?: string;
  className?: string;
  modal?: boolean;
  onChange?(value?: Date): void;
}

export function DateFormField<T extends FieldValues>({
  form,
  label,
  name,
  onChange,
  className,
  ...props
}: DateFormFieldProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <DatePicker
            value={field.value}
            onChange={(value) => {
              field.onChange(value);
              onChange?.(value);
            }}
            className="w-full"
            {...props}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
