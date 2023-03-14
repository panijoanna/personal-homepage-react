import { ThemeButton, ThemeWrapper, Toggle, ThemeTitle } from "./styled";

const ModeButton = () => {
  return (
    <ThemeWrapper>
      <ThemeTitle>light mode</ThemeTitle>
      <ThemeButton>
        <Toggle />
      </ThemeButton>
    </ThemeWrapper>
  );
};

export default ModeButton;
