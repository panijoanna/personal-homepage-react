import Header from "../features/Header";
import Portfolio from "../features/Portfolio";
import { Wrapper } from "../common/Wrapper/styled";
import Footer from "../features/Footer";
import Skills from "../features/Skills";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { themeLight, themeDark } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeContext } from "styled-components";
import { saveThemeInLocalStorage } from "../features/ThemeSwitcher/themeLocalStorage";
import { getTasksFromLocalStorage } from "../features/ThemeSwitcher/themeLocalStorage";

function App() {
  const [theme, setTheme] = useState(getTasksFromLocalStorage());

  useEffect(() => {
    saveThemeInLocalStorage(theme);
  }, [theme]);

  const themeToggler = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
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
