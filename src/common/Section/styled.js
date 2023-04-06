import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  gap: 8px;
  width: 80%;
  max-width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  margin: 10px auto;
  box-shadow: 0px -2px 50px ${({ theme }) => theme.color.athensGray},
    0px 16px 58px ${({ theme }) => theme.color.lightGray};
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 18px;
    margin: auto;
  }
`;

export const SectionContainer = styled.div``;

export const List = styled.ul`
  padding-left: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemList = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.gray};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 14px;
  }
`;
