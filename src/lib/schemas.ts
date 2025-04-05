import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormProps } from "react-hook-form";
import { z } from "zod";
import { ItemPriority, ItemStatus } from "./types";

const createItemFormSchema = z.object({
  refNumber: z.coerce.number(),
  rev: z.coerce.number(),
  name: z.string(),
  category: z.string(),
  status: z.nativeEnum(ItemStatus),
  priority: z.nativeEnum(ItemPriority),
  package: z.string(),
  sellerName: z.string(),
  dueDate: z.date().optional(),
  isApproved: z.boolean().optional(),
});

export type CreateItemFormType = z.infer<typeof createItemFormSchema>;

export const createItemFormOptions: UseFormProps<CreateItemFormType> = {
  resolver: zodResolver(createItemFormSchema),
  defaultValues: {
    refNumber: 0,
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
