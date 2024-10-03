import GlobalStyle from "./GlobalStyle";
import { AppThemeProvider } from "./providers";
import { Calculator } from "./screens/Calculator";

export default function App() {
  return (
    <>
      <AppThemeProvider>
        <GlobalStyle />
        <Calculator />
      </AppThemeProvider>
    </>
  );
}
