import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.text};
  max-width: 600px;
  margin: 0 auto;
  padding: 12px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
  }
`;

export const UppercaseParagraph = styled(StyledParagraph)`
  font-weight: ${({ theme }) => theme.fontWeights.large};
  font-size: ${({ theme }) => theme.fontSizes.xxsmall};
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
  }
`;

export const EmailParagraph = styled(StyledParagraph)`
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  line-height: 39px;
  letter-spacing: 0.05em;
  width: 30px;
  margin: 0;
  color: ${({ theme }) => theme.color.heading};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.link};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const SecondaryParagraph = styled(StyledParagraph)`
  color: ${({ theme }) => theme.color.heading};
`;
