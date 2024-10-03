import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    id: number;
    backgrounds: {
      main: string;
      toggleKeypad: string;
      screen: string;
    };
    keys: {
      background: string;
      shadow: string;
      backgroundToggle: string;
      darkShadow: string;
      lightBackground: string;
      lightShadow: string;
    };
    text: {
      appName: string;
      themeToggle: string;
      display: string;
      numericKey: string;
      functionKey: string;
      equalsKey: string;
    };
  }
}
