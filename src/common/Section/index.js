import { SectionHeader, StyledSection } from "./styled";
import { StyledHeading } from "../Heading/styled";

const Section = ({ title }) => {
  return (
    <StyledSection>
      <SectionHeader>
        <StyledHeading>{title}</StyledHeading>
      </SectionHeader>
    </StyledSection>
  );
};

export default Section;
