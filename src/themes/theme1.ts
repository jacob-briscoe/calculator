import { type DefaultTheme } from "styled-components";

export const theme1: Readonly<DefaultTheme> = {
  id: 1,
  backgrounds: {
    main: "var(--very-dark-desaturated-blue)",
    toggleKeypad: "var(--lighter-very-dark-desaturated-blue)",
    screen: "var(--light-very-dark-desaturated-blue)",
  },
  keys: {
    background: "var(--desaturated-dark-blue)",
    shadow: "var(--darker-desaturated-dark-blue)",
    backgroundToggle: "var(--red)",
    darkShadow: "var(--dark-red)",
    lightBackground: "var(--light-grayish-orange)",
    lightShadow: "var(--grayish-orange)",
  },
  text: {
    appName: "var(--white)",
    themeToggle: "var(--white)",
    display: "var(--white)",
    equalsKey: "var(--white)",
    functionKey: "var(--white)",
    numericKey: "var(--very-dark-grayish-blue)",
  },
};
