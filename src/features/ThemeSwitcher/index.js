import { useState, useContext, useEffect } from "react";
import { ThemeButton, ThemeWrapper, ThemeToggleIcon } from "./styled";
import { ThemeContext } from "styled-components";
import { getTasksFromLocalStorage } from "./themeLocalStorage";

const ThemeSwitcher = () => {
  const [changeTheme, setChangeTheme] = useState(false);
  const { themeToggler } = useContext(ThemeContext);

  useEffect(() => {
    getTasksFromLocalStorage();
    setChangeTheme(getTasksFromLocalStorage() === "dark");
  }, []);

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
