import { useState } from "react";
import { ThemeButton, ThemeWrapper, ThemeToggleIcon } from "./styled";

const ThemeSwitcher = () => {
  const [changeTheme, setChangeTheme] = useState(false);

  const handleClick = () => {
    setChangeTheme(!changeTheme);
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
