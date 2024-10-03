import { createContext, useState, type PropsWithChildren } from "react";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import { findTheme, initialTheme, themeIDs } from "../themes";

type AppThemeContext = {
  theme: DefaultTheme;
  themeOptions: ReadonlyArray<number>;
  changeTheme: (themeID: number) => void;
};

const initialAppThemeContext: AppThemeContext = {
  theme: initialTheme,
  themeOptions: themeIDs(),
  changeTheme: () => {},
};

export const AppThemeContext = createContext<AppThemeContext>(
  initialAppThemeContext,
);

export function AppThemeProvider({ children }: PropsWithChildren) {
  const [selectedTheme, setSelectedTheme] =
    useState<DefaultTheme>(initialTheme); // TODOJ: load theme selection from local storage || initialTheme

  const changeTheme = (themeID: number) => {
    const maybeNewTheme = findTheme(themeID);

    if (!maybeNewTheme) {
      console.error(`Theme with ID ${themeID} not found`);
      return;
    }

    const newTheme = maybeNewTheme;

    setSelectedTheme(newTheme);

    // TODOJ: save theme selection to local storage
  };

  const contextValue: AppThemeContext = {
    theme: selectedTheme,
    changeTheme,
    themeOptions: initialAppThemeContext.themeOptions,
  };

  return (
    <AppThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
}
