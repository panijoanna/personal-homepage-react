import {
  EmailParagraph,
  UppercaseParagraph,
} from "../../common/Paragraph/styled";
import { StyledFooter } from "./styled";
import Paragraph from "../../common/Paragraph";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";

const Footer = () => {
  return (
    <StyledFooter>
      <UppercaseParagraph>Let's talk</UppercaseParagraph>
      <EmailParagraph>p.joanna93@gmail.com</EmailParagraph>
      <Paragraph body="I am a dedicated and passionate developer ready to tackle new challenges and bring creative solutions to your projects. Don't hesitate to contact me if you're in need of a hard-working and innovative developer to help bring ideas to life." />
      <GithubIcon />
      <LinkedinIcon />
    </StyledFooter>
  );
};

export default Footer;
