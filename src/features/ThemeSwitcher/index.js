import { useState } from "react";
import { ThemeButton, ThemeWrapper, ThemeToggleIcon } from "./styled";

const ThemeSwitcher = () => {
  const [darkTheme, setDarktheme] = useState(false);

  const handleClick = () => {
    setDarktheme(!darkTheme);
  };

  return (
    <ThemeWrapper>
      <ThemeButton onClick={handleClick}>
        <ThemeToggleIcon move={darkTheme} />
      </ThemeButton>
    </ThemeWrapper>
  );
};

export default ThemeSwitcher;
