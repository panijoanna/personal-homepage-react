import { useState, useContext } from "react";
import { ThemeButton, ThemeWrapper, ThemeToggleIcon } from "./styled";
import { ThemeContext } from "styled-components";

const ThemeSwitcher = () => {
  const [changeTheme, setChangeTheme] = useState(false);
  const { themeToggler } = useContext(ThemeContext);

  const handleClick = () => {
    setChangeTheme(!changeTheme);
    themeToggler();
  };

  return (
    <ThemeWrapper>
      <ThemeButton onClick={handleClick}>
        <ThemeToggleIcon move={changeTheme} />
      </ThemeButton>
    </ThemeWrapper>
  );
};

export default ThemeSwitcher;
