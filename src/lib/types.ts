export enum ItemStatus {
  "Pending" = "Pending",
  "Delivering" = "Delivering",
  "Lost" = "Lost",
  "Closed" = "Closed",
}

export enum ItemPriority {
  "Low" = "Low",
  "Medium" = "Medium",
  "High" = "High",
}

export type Item = {
  id: string;
  refNumber: number;
  rev: number;
  name: string;
  category: string;
  status: ItemStatus;
  priority: ItemPriority;
  package: string;
  sellerName: string;
  dueDate: Date;
  isApproved: false;
};

export type CreateItem = Omit<Item, "id">;
