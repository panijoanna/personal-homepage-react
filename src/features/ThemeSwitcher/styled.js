import styled, { css } from "styled-components";
import { ReactComponent as ToggleIcon } from "../Icons/sun.svg";

export const ThemeButton = styled.button`
  color: ${({ theme }) => theme.color.mercury};
  border: 1px solid ${({ theme }) => theme.color.gray};
  width: 47px;
  height: 25px;
  border-radius: 30px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    margin: 10px 10px 0;
  }
`;

export const ThemeToggleIcon = styled(ToggleIcon)`
  display: flex;
  color: white;
  background-color: ${({ theme }) => theme.color.gray};
  border-radius: 50%;
  width: 18px;
  height: 18px;
  transition: 0.3s;

  ${({ move }) =>
    move &&
    css`
      transform: translateX(20px);
    `}
`;

export const ThemeWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: flex;
    justify-content: flex-end;
    order: -1;
  }
`;
