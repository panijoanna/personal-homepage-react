import styled from "styled-components";
import { ReactComponent as ToggleIcon } from "./toggleicon.svg";

export const ThemeButton = styled.button`
  color: ${({ theme }) => theme.color.mercury};
  border: 1px solid ${({ theme }) => theme.color.gray};
  width: 47px;
  height: 25px;
  border-radius: 30px;
`;

export const Toggle = styled(ToggleIcon)`
  display: flex;
  color: white;
  background-color: ${({ theme }) => theme.color.gray};
  border-radius: 50%;
  width: 18px;
  height: 18px;
`;
