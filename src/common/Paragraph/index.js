import { StyledParagraph } from "./styled";

const Paragraph = ({ body, color }) => {
  return <StyledParagraph color={color}>{body}</StyledParagraph>;
};

export default Paragraph;
