import { SectionHeader, StyledSection, Heading } from "./styled";

const Section = ({ title }) => {
  return (
    <StyledSection>
      <SectionHeader>
        <Heading>{title}</Heading>
      </SectionHeader>
    </StyledSection>
  );
};

export default Section;
