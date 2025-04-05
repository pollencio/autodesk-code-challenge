import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export function CreateItemModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>Create item</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create item</DialogTitle>
          <DialogDescription>Create item</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
