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
import { StyledLink } from "./styled";

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
              Demo:{"\n"}
              <StyledLink href={repo.homepage} target="_blank">
                {repo.homepage}
              </StyledLink>
              <br />
              Code:{"\n"}
              <StyledLink href={repo.html_url} target="_blank">
                {repo.html_url}
              </StyledLink>
            </PortfolioParagraph>
          </Tile>
        ))}
      </SkillsContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
