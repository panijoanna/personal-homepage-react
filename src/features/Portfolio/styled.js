import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../Icons/github.svg";

export const PortfolioSection = styled.section`
  margin: 0 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletDevice}px) {
    margin: auto;
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    padding: 10px;
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletDevice}px) {
    grid-template-columns: 1fr;
  }
`;

export const PortfolioHeading = styled.h3`
  color: ${({ theme }) => theme.color.portfolioHeading};
  font-size: ${({ theme }) => theme.fontSizes.large};
  line-height: 29px;
  letter-spacing: 0.05em;
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.large};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const PortfolioParagraph = styled.p`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 25px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.text};
  margin-top: 12px;
  gap: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    flex-direction: column;
    align-items: start;
    margin: 0 auto;
    gap: 10px;
    padding-bottom: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletDevice}px) {
    margin: 0;
  }
`;

export const Tile = styled.div`
  width: 100%;
  border: 6px solid ${({ theme }) => theme.color.border};
  box-shadow: 0px -2px 50px ${({ theme }) => theme.color.primaryShadow};
  0px 16px 58px ${({ theme }) => theme.color.secondaryShadow};
  border-radius: 4px;
  padding: 56px;
  transition: 0.4s;

  &:hover {
    border: 6px solid ${({ theme }) => theme.color.tileHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    padding: 24px;
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletDevice}px) {
    margin: auto;
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.maxDevice}px) {
    margin: 0 auto;
    padding: 30px;
   }

   @media (max-width: ${({ theme }) => theme.breakpoint.smallDevice}px) {
    padding: 10px;
    margin: 10px;
   }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.link};
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 140%;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxsmall};
  }
`;

export const GithubIcon = styled(Icon)`
  width: 40px;
  color: ${({ theme }) => theme.color.button};
  height: 40px;
`;
