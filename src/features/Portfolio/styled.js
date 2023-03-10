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
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
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
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.blue};
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.05em;
`;
