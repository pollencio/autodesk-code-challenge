import { CreateItemFormType } from "@/lib/schemas";
import { UseFormReturn } from "react-hook-form";
import { DateFormField } from "../ui/date-picker";
import { Form } from "../ui/form";
import { InputFormField } from "../ui/input";
import { SelectFormField } from "../ui/select";

type CreateItemFormProps = {
  form: UseFormReturn<CreateItemFormType>;
};

const STATUS_OPTIONS = [
  { label: "Pending", value: "Pending" },
  { label: "In Progress", value: "In Progress" },
  { label: "Closed", value: "Closed" },
];
const PRIORITY_OPTIONS = [
  { label: "High", value: "High" },
  { label: "Medium", value: "Medium" },
  { label: "Low", value: "Low" },
];

export function CreateItemForm({ form }: CreateItemFormProps) {
  return (
    <Form {...form}>
      <form className="px-1 space-y-6">
        <h3>General info</h3>
        <section className="space-y-4">
          <InputFormField name="refNumber" label="Ref Number *" form={form} />
          <DateFormField name="dueDate" label="Due Date" form={form} />
          <InputFormField name="name" label="Title *" form={form} />
          <SelectFormField
            name="status"
            label="Status"
            form={form}
            options={STATUS_OPTIONS}
          />
          <SelectFormField
            name="priority"
            label="Priority *"
            form={form}
            options={PRIORITY_OPTIONS}
          />
          <InputFormField name="category" label="Type *" form={form} />
        </section>
        <h3>Delivery info</h3>
        <section className="space-y-3">
          <InputFormField name="rev" label="Revision" form={form} />
          <InputFormField name="package" label="Package" form={form} />
          <InputFormField name="sellerName" label="Seller Name" form={form} />
        </section>
      </form>
    </Form>
  );
}
