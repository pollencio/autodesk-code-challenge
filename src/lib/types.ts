export enum Sex {
  M = "M",
  F = "F",
}

export enum Zone {
  Rural = "RURAL",
  Urban = "URBAN",
}

export enum ItemDniType {
  AS = "AS",
  CC = "CC",
  CD = "CD",
  CE = "CE",
  CN = "CN",
  DE = "DE",
  MS = "MS",
  PA = "PA",
  PE = "PE",
  PT = "PT",
  RC = "RC",
  SC = "SC",
  TI = "TI",
}

export type Item = {
  id: string;
  birthDate: Date;
  dniNumber: string;
  dniType: ItemDniType;
  firstName: string;
  lastName: string;
  fullName: string;
  sex: Sex;
  countryId: string;
  age: number;

  territorialZone?: Zone;
  municipalityId?: string;
  originCountryId?: string;
};

export type CreateItem = Omit<Item, "id">;
