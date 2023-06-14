import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 12px 16px;
  gap: 16px;
  font-family: "Inter";
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.buttonText};
  border: none;
  border-radius: 4px;
  margin-top: 15px;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
