import styled from "styled-components";
import { ReactComponent as ErrorIcons } from "../Icons/error.svg";

export const ErrorMessage = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.color.heading};
  font-weight: ${({ theme }) => theme.fontWeights.large};
  line-height: 29px;
  margin: 0;
  padding-top: 23px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ErrorIcon = styled(ErrorIcons)`
  color: ${({ theme }) => theme.color.heading};
`;
