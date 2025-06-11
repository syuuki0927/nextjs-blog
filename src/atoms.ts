import { atom } from "jotai";

export enum SortOrder {
  Acscending,
  Descending,
}

export const sortOrderAtom = atom(SortOrder.Descending);
