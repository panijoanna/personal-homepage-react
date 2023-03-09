import styled from "styled-components";

export const PortfolioBox = styled.div`
  color: ${({ theme }) => theme.color.white};
  width: 592px;
  height: 322px;
  border: 6px solid ${({ theme }) => theme.color.athensGray};
  box-shadow: 0px -2px 50px ${({ theme }) => theme.color.athensGray};
    0px 16px 58px ${({ theme }) => theme.color.lightGray};
  border-radius: 4px;
`;
