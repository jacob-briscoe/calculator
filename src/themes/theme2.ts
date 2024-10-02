import type { DefaultTheme } from "styled-components";

export const theme2: DefaultTheme = {
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
    dark: "var(--very-dark-grayish-yellow)",
    veryLight: "var(--white)",
    light: "var(--white)",
  },
};
