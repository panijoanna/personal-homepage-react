import { ItemList, List, SectionContainer, StyledSection } from "./styled";
import { StyledHeading } from "../Heading/styled";

const Section = ({ title, array }) => {
  return (
    <StyledSection>
      <StyledHeading underline>{title}</StyledHeading>
      <SectionContainer>
        <List>
          {array.map((element) => (
            <ItemList key={element}>{element}</ItemList>
          ))}
        </List>
      </SectionContainer>
    </StyledSection>
  );
};

export default Section;
