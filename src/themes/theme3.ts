import type { DefaultTheme } from "styled-components";

export const theme3: DefaultTheme = {
  id: 3,
  backgrounds: {
    main: "var(--very-dark-violet)",
    toggleKeypad: "var(--darker-very-dark-violet)",
    screen: "var(--darker-very-dark-violet)",
  },
  keys: {
    background: "var(--dark-violet)",
    shadow: "var(--vivid-magenta)",
    backgroundToggle: "var(--pure-cyan-key-bg-toggle)",
    darkShadow: "var(--soft-cyan-key-shadow)",
    lightBackground: "var(--lighter-very-dark-violet)",
    lightShadow: "var(--dark-magenta)",
  },
  text: {
    dark: "var(--very-dark-blue)",
    light: "var(--light-yellow)",
    veryLight: "var(--white)",
  },
};
