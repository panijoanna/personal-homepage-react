import styled, { css } from "styled-components";
import { ReactComponent as ToggleIcon } from "../Icons/sun.svg";

export const ThemeButton = styled.button`
  background: ${({ theme }) => theme.color.toggler};
  border: 1px solid ${({ theme }) => theme.color.themeBorder};
  width: 47px;
  height: 25px;
  border-radius: 30px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    margin: 10px 10px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.iphoneDevice}px) {
    display: flex;
    align-items: center;
  }
`;

export const ThemeToggleIcon = styled(ToggleIcon)`
  display: flex;
  color: ${({ theme }) => theme.color.themeSun};
  background-color: ${({ theme }) => theme.color.themeBackground};
  border-radius: 50%;
  width: 18px;
  height: 18px;
  transition: 0.3s;

  ${({ currenttheme }) =>
    currenttheme === "dark" &&
    css`
      transform: translateX(15px);
    `}
`;

export const ThemeWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: flex;
    justify-content: flex-end;
    order: -1;
  }
`;
