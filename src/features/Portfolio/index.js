import GithubIcon from "../Icons/GithubIcon";
import Heading from "../../common/Heading";
import { Wrapper } from "../../common/Wrapper/styled";
import Paragraph from "../../common/Paragraph";

const Portfolio = () => {
  return (
    <Wrapper>
      <GithubIcon />
      <Heading title="Portfolio" />
      <Paragraph body="My recent projects" />
    </Wrapper>
  );
};

export default Portfolio;
