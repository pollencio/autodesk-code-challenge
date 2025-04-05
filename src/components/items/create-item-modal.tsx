import { useItems } from "@/hooks/use-items";
import { createItemFormOptions, CreateItemFormType } from "@/lib/schemas";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button, buttonVariants } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { CreateItemForm } from "./create-item-form";

export function CreateItemModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { createItem } = useItems();
  const form = useForm<CreateItemFormType>(createItemFormOptions);

  function onOpenChange(value: boolean) {
    if (value) {
      setIsOpen(true);
    } else {
      if (isSubmitting) return;

      setIsOpen(false);
      form.reset();
    }
  }

  async function onSubmit(data: CreateItemFormType) {
    setIsSubmitting(true);
    const { error } = await createItem(data);

    if (error) {
      toast.error(error?.message || "There was an error creating the item 🥺");
    } else {
      toast.success("Item created successfully! 🙌");
      setIsOpen(false);
    }

    setIsSubmitting(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger className={buttonVariants()}>
        <Plus />
        Create Item
      </DialogTrigger>
      <DialogContent className="sm:min-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create item</DialogTitle>
          <DialogDescription className="hidden">Create item</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[70vh] p-6 w-full">
          <CreateItemForm form={form} />
        </ScrollArea>
        <DialogFooter>
          <DialogClose
            className={buttonVariants({ variant: "ghost" })}
            disabled={isSubmitting}
          >
            Cancel
          </DialogClose>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            isLoading={isSubmitting}
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
