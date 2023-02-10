import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 190vh;
  background-color: #ffffff;
  margin: 0 auto;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;

export const SectionContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const List = styled.ul`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 8px;
`;

export const ItemList = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #6e7e91;
`;
