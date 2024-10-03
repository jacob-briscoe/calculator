import type { DefaultTheme } from "styled-components";

export const theme2: Readonly<DefaultTheme> = {
  id: 2,
  backgrounds: {
    main: "var(--light-gray)",
    toggleKeypad: "var(--grayish-red)",
    screen: "var(--very-light-gray)",
  },
  keys: {
    background: "var(--dark-moderate-cyan)",
    shadow: "var(--very-dark-cyan)",
    backgroundToggle: "var(--orange)",
    darkShadow: "var(--dark-orange)",
    lightBackground: "var(--light-grayish-yellow)",
    lightShadow: "var(--dark-grayish-orange)",
  },
  text: {
    appName: "var(--very-dark-grayish-yellow)",
    themeToggle: "var(--very-dark-grayish-yellow)",
    display: "var(--very-dark-grayish-yellow)",
    equalsKey: "var(--white)",
    functionKey: "var(--white)",
    numericKey: "var(--very-dark-grayish-yellow)",
  },
};
