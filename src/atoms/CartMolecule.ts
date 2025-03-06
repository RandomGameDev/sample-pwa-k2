import { molecule } from "bunshi";
import { atom } from "jotai";

export const CartMolecule = molecule(() => {
  const cartAtom = atom<number[]>([]);

  return {
    cartAtom,
  };
});
