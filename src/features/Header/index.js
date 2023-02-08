import photo from "./photo.jpg";
import {
  Image,
  Heading,
  StyledParagraph,
  Button,
  Container,
  Link,
} from "./styled";
import { Wrapper } from "../../common/Wrapper/styled.js";
import MessageIcon from "../Icons/MessageIcon";
import Paragraph from "../../common/Paragraph/index";

const Header = () => {
  return (
    <Wrapper>
      <Image src={photo} alt="Joanna Panimasz" />
      <Container>
        <StyledParagraph>This is</StyledParagraph>
        <Heading>Joanna Panimasz</Heading>
        <Paragraph
          body="
          👩‍💻Passionate about Frontend technologies (React). Frontend is always
          evolving and presents new challenges, which makes it an exciting and
          rewarding field to be in.🚀"
        />
        <Link href="mailto:p.joanna93@gmail.com">
          <Button>
            <MessageIcon />
            Hire me
          </Button>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default Header;
