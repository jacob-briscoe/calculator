import type { DefaultTheme } from "styled-components";
import { theme1 } from "./theme1";
import { theme2 } from "./theme2";
import { theme3 } from "./theme3";

export const THEMES: ReadonlyArray<DefaultTheme> = [theme1, theme2, theme3];

export const [initialTheme] = THEMES;

export function themeIDs() {
  return THEMES.map((theme) => theme.id);
}

export function findTheme(themeID: number) {
  return THEMES.find((theme) => theme.id === themeID);
}
