import {
  EmailParagraph,
  UppercaseParagraph,
} from "../../common/Paragraph/styled";
import { StyledFooter, FooterContainer } from "./styled";
import Paragraph from "../../common/Paragraph";
import { Link } from "../../common/Link/styled";
import { GithubIcon, LinkedinIcon } from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <UppercaseParagraph>Let's talk</UppercaseParagraph>
        <EmailParagraph>p.joanna93@gmail.com</EmailParagraph>
        <Paragraph body="I am a dedicated and passionate developer ready to tackle new challenges and bring creative solutions to your projects. Don't hesitate to contact me if you're in need of a hard-working and innovative developer to help bring ideas to life." />
        <Link
          href="https://github.com/panijoanna"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/joanna-panimasz-90408724b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </Link>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
