import GithubIcon from "../Icons/GithubIcon";
import Heading from "../../common/Heading";
import Paragraph from "../../common/Paragraph";
import { PortfolioContainer } from "./styled";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <GithubIcon color="#0366D6" size="40" />
      <Heading title="Portfolio" />
      <Paragraph body="My recent projects" />
    </PortfolioContainer>
  );
};

export default Portfolio;
