import styled from "styled-components";

export const ThemeButton = styled.button`
  color: ${({ theme }) => theme.color.mercury};
  border: 1px solid ${({ theme }) => theme.color.gray};
  width: 47px;
  height: 25px;
  border-radius: 30px;
`;
