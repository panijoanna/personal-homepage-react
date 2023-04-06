import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ color }) => color};
  max-width: 600px;
  margin: 0 auto;
  padding: 12px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 16px;
  }
`;

export const UppercaseParagraph = styled(StyledParagraph)`
  font-weight: ${({ theme }) => theme.fontWeights.large};
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.gray};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 16px;
  }
`;

export const EmailParagraph = styled(StyledParagraph)`
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  width: 30px;
  margin: 0;
  color: ${({ theme }) => theme.color.mineShaft};

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 18px;
  }
`;
