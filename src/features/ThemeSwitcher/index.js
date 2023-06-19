import { useContext } from "react";
import { ThemeButton, ThemeWrapper, ThemeToggleIcon } from "./styled";
import { ThemeContext } from "styled-components";

const ThemeSwitcher = () => {
  const { theme, themeToggler } = useContext(ThemeContext);

  return (
    <ThemeWrapper>
      <ThemeButton onClick={themeToggler}>
        <ThemeToggleIcon move />
      </ThemeButton>
    </ThemeWrapper>
  );
};

export default ThemeSwitcher;
