import Header from "../features/Header";
import Portfolio from "../features/Portfolio";
import { Wrapper } from "../common/Wrapper/styled";
import Footer from "../features/Footer";
import Skills from "../features/Skills";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themeLight, themeDark } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeContext } from "styled-components";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <Skills />
          <Portfolio />
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
