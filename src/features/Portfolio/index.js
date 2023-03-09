import GithubIcon from "../Icons/GithubIcon";
import Heading from "../../common/Heading";
import Paragraph from "../../common/Paragraph";
import { PortfolioContainer } from "./styled";
import Container from "../../common/Container";
import { Wrap } from "./styled";
import PortfolioHeading from "../../common/PortfolioHeading";
import Error from "../Error";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

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
    <>
      <PortfolioContainer>
        <GithubIcon color="#0366D6" size="40" />
        <Heading title="Portfolio" />
        <Paragraph body="My recent projects" />
      </PortfolioContainer>
      <Wrap>
        <Container>
          <PortfolioHeading title="Movies Browser" />
        </Container>
      </Wrap>
    </>
  );
};

export default Portfolio;
