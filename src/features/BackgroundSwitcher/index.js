import { ThemeButton, ThemeWrapper, Toggle } from "./styled";

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
