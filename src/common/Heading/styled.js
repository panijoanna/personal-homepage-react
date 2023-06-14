import styled, { css } from "styled-components";

export const StyledHeading = styled.h2`
  display: flex;
  justify-content: flex-start;
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.05em;
  margin: 0;
  padding: 13px 0 8px 0;
  color: ${({ theme }) => theme.color.heading};

  ${({ underline }) =>
    underline &&
    css`
      border-bottom: solid ${({ theme }) => theme.color.line};
    `}
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
  }
`;
