import { CreateItemFormType } from "@/lib/schemas";
import { UseFormReturn } from "react-hook-form";
import { Form } from "../ui/form";
import { InputFormField } from "../ui/input";

type CreateItemFormProps = {
  form: UseFormReturn<CreateItemFormType>;
};

export function CreateItemForm({ form }: CreateItemFormProps) {
  return (
    <Form {...form}>
      <form className="px-1 space-y-4">
        <InputFormField name="refNumber" label="Ref Number" form={form} />
        <InputFormField name="rev" label="Revision" form={form} />
        <InputFormField name="name" label="Title" form={form} />
        <InputFormField name="category" label="Type" form={form} />
        <InputFormField name="status" label="Status" form={form} />
        <InputFormField name="priority" label="Priority" form={form} />
        <InputFormField name="package" label="Package" form={form} />
        <InputFormField name="sellerName" label="Seller Name" form={form} />
        <InputFormField name="dueDate" label="Due Date" form={form} />
        <InputFormField name="isApproved" label="Is Approved" form={form} />
      </form>
    </Form>
  );
}
