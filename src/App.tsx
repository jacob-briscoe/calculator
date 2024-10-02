import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { theme1 } from "./themes";
import { Calculator } from "./screens/Calculator";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme1}>
        <GlobalStyle />
        <Calculator />
      </ThemeProvider>
    </>
  );
}
