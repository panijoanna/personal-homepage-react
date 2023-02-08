import GithubIcon from "../Icons/GithubIcon";
import Heading from "../../common/Heading";
import { Wrapper } from "../../common/Wrapper/styled";
import Paragraph from "../../common/Paragraph";

const Portfolio = () => {
  return (
    <Wrapper>
      <GithubIcon color="#0366D6" size="40" />
      <Heading title="Portfolio" />
      <Paragraph body="My recent projects" />
    </Wrapper>
  );
};

export default Portfolio;
