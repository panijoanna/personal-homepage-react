import styled from "styled-components";

export const ErrorMessage = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.color.mineShaft};
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
