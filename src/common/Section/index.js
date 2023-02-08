import { StyledSection } from "./styled";
import { StyledHeading } from "../Heading/styled";

const Section = ({ title }) => {
  return (
    <StyledSection>
      <StyledHeading>{title}</StyledHeading>
    </StyledSection>
  );
};

export default Section;
