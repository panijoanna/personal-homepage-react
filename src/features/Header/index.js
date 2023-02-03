import photo from "./photo.jpg";
import {
  MainParagraph,
  Image,
  Heading,
  Paragraph,
  Button,
  Container,
  Link,
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
        <Link href="mailto:p.joanna93@gmail.com">
          <Button>Hire me</Button>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default Header;
