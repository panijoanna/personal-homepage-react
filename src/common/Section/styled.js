import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  gap: 8px;
  width: 190vh;
  background-color: ${({ theme }) => theme.color.white};
  margin: 0 auto;
  box-shadow: 0px -2px 50px ${({ theme }) => theme.color.athensGray},
    0px 16px 58px ${({ theme }) => theme.color.lightGray};
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 16px;
    gap: 12px;
    max-width: 100%;
    width: 270px;
    margin: 0 auto;
  }
`;

export const SectionContainer = styled.div``;

export const List = styled.ul`
  padding-left: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ItemList = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.gray};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 14px;
  }
`;
