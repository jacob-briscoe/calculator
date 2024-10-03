import { useContext } from "react";
import { AppThemeContext } from "../providers/AppThemeProvider";

export function useAppTheme() {
  return useContext(AppThemeContext);
}
