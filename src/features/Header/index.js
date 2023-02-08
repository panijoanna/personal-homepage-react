import photo from "./photo.jpg";
import {
  Image,
  StyledParagraph,
  Button,
  Container,
  Link,
  HeadingTitle,
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
        <HeadingTitle>Joanna Panimasz</HeadingTitle>
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
