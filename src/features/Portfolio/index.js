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
import useRepos from "./useRepos";
import { StyledLink } from "./styled";
import Loader from "../Loader";
import Error from "../Error";
import { GithubIcon } from "./styled";

const Portfolio = () => {
  const { repos, isLoading, error } = useRepos();

  return (
    <PortfolioSection>
      <TitleContainer>
        <GithubIcon />
        <Heading title="Portfolio" />
        <Paragraph body="My recent projects" />
      </TitleContainer>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <SkillsContainer>
          {repos.map((repo) => (
            <Tile key={repo.id}>
              <PortfolioHeading>{repo.name}</PortfolioHeading>
              <br />
              <PortfolioParagraph>{repo.description}</PortfolioParagraph>
              <br />
              <PortfolioParagraph>
                Demo:
                <StyledLink
                  to={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.homepage}
                </StyledLink>
              </PortfolioParagraph>
              <PortfolioParagraph>
                Code:
                <StyledLink
                  to={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.html_url}
                </StyledLink>
              </PortfolioParagraph>
            </Tile>
          ))}
        </SkillsContainer>
      )}
    </PortfolioSection>
  );
};

export default Portfolio;
