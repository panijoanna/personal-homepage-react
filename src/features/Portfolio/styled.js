import styled from "styled-components";

export const PortfolioContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 52vh;
  margin: 0 auto;
  padding-top: 72px;
`;

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  margin: 0 auto;
`;

export const PortfolioHeading = styled.h3`
  color: ${({ theme }) => theme.color.blue};
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
`;

export const PortfolioParagraph = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.gray};
`;

export const PortfolioBox = styled.div`
  color: ${({ theme }) => theme.color.white};
  width: 95vh;
  height: 322px;
  border: 6px solid ${({ theme }) => theme.color.athensGray};
  box-shadow: 0px -2px 50px ${({ theme }) => theme.color.athensGray};
    0px 16px 58px ${({ theme }) => theme.color.lightGray};
  border-radius: 4px;

  &:hover {
    border: 6px solid ${({ theme }) => theme.color.tropicalBlue};
  }
`;
