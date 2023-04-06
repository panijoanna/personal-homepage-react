import styled from "styled-components";
import { Link } from "react-router-dom";

export const PortfolioSection = styled.section`
  margin: 0 auto;

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
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    grid-template-columns: 1fr;
    margin: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletDevice}px) {
    grid-template-columns: 1fr;
  }
`;

export const PortfolioHeading = styled.h3`
  color: ${({ theme }) => theme.color.blue};
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.large};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 18px;
    padding-top: 20px;
  }
`;

export const PortfolioParagraph = styled.p`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 5%;
  color: ${({ theme }) => theme.color.gray};
  margin-top: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 16px;
    flex-direction: column;
    align-items: start;
  }
`;

export const Tile = styled.div`
  color: ${({ theme }) => theme.color.white};
  width: 95vh;
  height: 390px;
  border: 6px solid ${({ theme }) => theme.color.athensGray};
  box-shadow: 0px -2px 50px ${({ theme }) => theme.color.athensGray};
    0px 16px 58px ${({ theme }) => theme.color.lightGray};
  border-radius: 4px;
  padding: 56px;

  &:hover {
    border: 6px solid ${({ theme }) => theme.color.tropicalBlue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    margin: 0 32px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    padding: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletDevice}px) {
    margin: auto;
    width: 80%;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.blue};
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 140%;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 12px;
  }
`;
