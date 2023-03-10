import GithubIcon from "../Icons/GithubIcon";
import Heading from "../../common/Heading";
import Paragraph from "../../common/Paragraph";
import {
  TitleContainer,
  PortfolioHeading,
  PortfolioParagraph,
  Tile,
  PortfolioSection,
  SkillsContainer,
} from "./styled";
import Error from "../Error";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/panijoanna/repos"
        );
        setRepos(response.data);
      } catch (error) {
        <Error />;
      }
    };
    fetchData();
  }, []);

  return (
    <PortfolioSection>
      <TitleContainer>
        <GithubIcon color="#0366D6" size="40" />
        <Heading title="Portfolio" />
        <Paragraph body="My recent projects" />
      </TitleContainer>
      <SkillsContainer>
        {repos.map((repo) => (
          <Tile key={repo.id}>
            <PortfolioHeading>{repo.name}</PortfolioHeading>
            <PortfolioParagraph>{repo.description}</PortfolioParagraph>
            <PortfolioParagraph>
              Demo:
              <Link href={repo.homepage} target="_blank">
                {repo.homepage}
              </Link>
              <br />
              Code:
              <Link href={repo.html_url} target="_blank">
                {repo.html_url}
              </Link>
            </PortfolioParagraph>
          </Tile>
        ))}
      </SkillsContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
