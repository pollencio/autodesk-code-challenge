import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormProps } from "react-hook-form";
import { z } from "zod";
import { ItemPriority, ItemStatus } from "./types";

export enum MESSAGES {
  Required = "Required",
  Invalid = "Invalid",
  EqualOrGreaterThanZero = "It must be equal or greater than zero",
  OnlyIntegers = "It must be a whole number",
}

const RequiredError = { required_error: MESSAGES.Required };
const NameString = z
  .string(RequiredError)
  .min(2, { message: "Min. 2 characters" })
  .max(50, { message: "Max. 50 characters" });
const PositiveNumber = z.coerce
  .number({
    ...RequiredError,
    invalid_type_error: MESSAGES.Invalid,
  })
  .nonnegative(MESSAGES.EqualOrGreaterThanZero);

const createItemFormSchema = z.object({
  refNumber: PositiveNumber,
  rev: z.coerce.number(),
  name: NameString,
  category: NameString,
  status: z.nativeEnum(ItemStatus),
  priority: z.nativeEnum(ItemPriority),
  package: NameString,
  sellerName: NameString,
  dueDate: z.date().optional(),
  isApproved: z.boolean().optional(),
});

export type CreateItemFormType = z.infer<typeof createItemFormSchema>;

export const createItemFormOptions: UseFormProps<CreateItemFormType> = {
  resolver: zodResolver(createItemFormSchema),
  defaultValues: {
    rev: 0,
    name: "",
    category: "",
    status: ItemStatus.Pending,
    priority: ItemPriority.Low,
    package: "",
    sellerName: "",
    dueDate: undefined,
    isApproved: false,
  },
};
