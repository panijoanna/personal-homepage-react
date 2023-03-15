import styled from "styled-components";
import { Link } from "react-router-dom";

export const PortfolioSection = styled.section`
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 52vh;
  padding-top: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    padding: 0;
    height: 230px;
    justify-content: center;
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 100%;
    width: 270px;
    align-items: center;
  }
`;

export const PortfolioHeading = styled.h3`
  color: ${({ theme }) => theme.color.blue};
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 16px;
    letter-spacing: 0.02rem;
  }
`;

export const PortfolioParagraph = styled.p`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 5%;
  color: ${({ theme }) => theme.color.gray};
  margin-top: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 14px;
    line-height: 17px;
    display: flex;
    letter-spacing: 0.05em;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0;
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
   padding: 20px;
   display: flex;
   flex-wrap: wrap;
   max-width: 100%;
   }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.blue};
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    max-width: 100%;
    letter-spacing: 0.01rem;
    font-size: 12px;
  }
`;
