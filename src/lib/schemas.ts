import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormProps } from "react-hook-form";
import { z } from "zod";

const createItemFormSchema = z.object({});

export type CreateItemFormType = z.infer<typeof createItemFormSchema>;

export const createItemFormOptions: UseFormProps<CreateItemFormType> = {
  resolver: zodResolver(createItemFormSchema),
  defaultValues: {},
};
