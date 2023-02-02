import photo from "./photo.jpg";
import { MainParagraph, Image, Heading, Paragraph, Button } from "./styled";
import { Wrapper } from "../../common/Wrapper/styled.js";

const Header = () => {
  return (
    <Wrapper>
      <Image src={photo} alt="Joanna Panimasz" />
      <Paragraph>This is</Paragraph>
      <Heading>Joanna Panimasz</Heading>
      <MainParagraph>
        👩‍💻Passionate about Frontend technologies (React). Frontend is always
        evolving and presents new challenges, which makes it an exciting and
        rewarding field to be in.🚀
      </MainParagraph>
      <Button>Hire me</Button>
    </Wrapper>
  );
};

export default Header;
