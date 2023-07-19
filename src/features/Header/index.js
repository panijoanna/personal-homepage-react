import photo from "./photo.jpg";
import { Image, Container, HeadingTitle, StyledHeader } from "./styled";
import Paragraph from "../../common/Paragraph/index";
import { UppercaseParagraph } from "../../common/Paragraph/styled";
import { Button } from "../../common/Button/styled";
import { Link } from "../../common/Link/styled";
import ThemeSwitcher from "../ThemeSwitcher";
import { useAnimations } from "./useAnimations";
import { ReactComponent as MessageIcon } from "../Icons/message.svg";

const Header = () => {
  const { animations } = useAnimations();

  return (
    <StyledHeader style={animations}>
      <Image src={photo} alt="Joanna Panimasz" />
      <Container>
        <UppercaseParagraph>This is</UppercaseParagraph>
        <HeadingTitle>Joanna Panimasz</HeadingTitle>
        <Paragraph
          body="
          My passion for Front-end (React) comes from constantly exploring new technologies, testing them, and acquiring inspiring knowledge that enriches my life."
        />
        <Link href="mailto:p.joanna93@gmail.com">
          <Button>
            <MessageIcon />
            Hire me
          </Button>
        </Link>
      </Container>
      <ThemeSwitcher />
    </StyledHeader>
  );
};

export default Header;
