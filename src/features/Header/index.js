import photo from "./photo.jpg";
import {
  Image,
  Button,
  Container,
  Link,
  HeadingTitle,
  StyledHeader,
} from "./styled";
import MessageIcon from "../Icons/MessageIcon";
import Paragraph from "../../common/Paragraph/index";
import { UppercaseParagraph } from "../../common/Paragraph/styled";

const Header = () => {
  return (
    <StyledHeader>
      <Image src={photo} alt="Joanna Panimasz" />
      <Container>
        <UppercaseParagraph>This is</UppercaseParagraph>
        <HeadingTitle>Joanna Panimasz</HeadingTitle>
        <Paragraph
          body="
          👩‍💻Passionate about Frontend technologies (React). Frontend is always
          evolving and presents new challenges, which makes it an exciting and
          rewarding field to be in.🚀"
          color="#6E7E91"
        />
        <Link href="mailto:p.joanna93@gmail.com">
          <Button>
            <MessageIcon />
            Hire me
          </Button>
        </Link>
      </Container>
    </StyledHeader>
  );
};

export default Header;
