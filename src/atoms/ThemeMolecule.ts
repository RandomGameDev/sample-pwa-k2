import { molecule } from "bunshi";
import { atomWithStorage } from "jotai/utils";

export const ThemeMolecule = molecule(() => {
  const themeAtom = atomWithStorage("theme", "system", undefined, {
    getOnInit: true,
  });

  return {
    themeAtom,
  };
});
