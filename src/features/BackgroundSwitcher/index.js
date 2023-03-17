import { ThemeButton, ThemeWrapper, Toggle, ThemeTitle } from "./styled";

const BackgroundSwitcher = () => {
  return (
    <ThemeWrapper>
      <ThemeButton>
        <Toggle />
      </ThemeButton>
    </ThemeWrapper>
  );
};

export default BackgroundSwitcher;
