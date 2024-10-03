import type { DefaultTheme } from "styled-components";

export const theme3: Readonly<DefaultTheme> = {
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
    appName: "var(--light-yellow)",
    themeToggle: "var(--light-yellow)",
    display: "var(--light-yellow)",
    equalsKey: "var(--very-dark-blue)",
    functionKey: "var(--white)",
    numericKey: "var(--light-yellow)",
  },
};
