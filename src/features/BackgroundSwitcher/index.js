import { ThemeButton, ThemeWrapper, Toggle, ThemeTitle } from "./styled";

const BackgroundSwitcher = () => {
  return (
    <ThemeWrapper>
      <ThemeTitle>light mode</ThemeTitle>
      <ThemeButton>
        <Toggle />
      </ThemeButton>
    </ThemeWrapper>
  );
};

export default BackgroundSwitcher;
