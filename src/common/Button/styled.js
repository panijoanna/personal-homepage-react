import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  font-family: "Inter";
  font-weight: 600;
  background: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.athensGray};
  border-radius: 4px;
  margin: 0 auto;
`;
