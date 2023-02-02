import photo from "./photo.jpg";
import {
  MainParagraph,
  Image,
  Heading,
  Paragraph,
  Button,
  Container,
} from "./styled";
import { Wrapper } from "../../common/Wrapper/styled.js";

const Header = () => {
  return (
    <Wrapper>
      <Image src={photo} alt="Joanna Panimasz" />
      <Container>
        <Paragraph>This is</Paragraph>
        <Heading>Joanna Panimasz</Heading>
        <MainParagraph>
          👩‍💻Passionate about Frontend technologies (React). Frontend is always
          evolving and presents new challenges, which makes it an exciting and
          rewarding field to be in.🚀
        </MainParagraph>
        <Button>Hire me</Button>
      </Container>
    </Wrapper>
  );
};

export default Header;
