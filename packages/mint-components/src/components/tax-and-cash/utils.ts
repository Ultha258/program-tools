import { TaxDocumentType } from "./sqm-tax-and-cash/data";

export const objectIsFull = (obj: Record<string, unknown>) => {
  return !Object.keys(obj).find((k) => obj[k] == undefined);
};

export const taxTypeToName = (taxType: TaxDocumentType) => {
  switch (taxType) {
    case "W9":
      return "W9";
    case "W8BEN":
      return "W8-BEN";
    case "W8BENE":
      return "W8-BEN-E";
    default:
      return "";
  }
};
