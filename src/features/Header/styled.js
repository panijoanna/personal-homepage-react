import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  padding: 100px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    padding: 20px;
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletDevice}px) {
    padding: 40px;
    margin-top: 20px;
  }
`;

export const Image = styled.img`
  max-width: 300px;
  border-radius: 50%;
  margin: 0 auto;
  width: 80%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    padding: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletDevice}px) {
    padding: 20px 0;
  }
`;

export const StyledParagraph = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.large};
  font-size: ${({ theme }) => theme.fontSizes.xxsmall};
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.gray};
`;

export const HeadingTitle = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  line-height: 46px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.mineShaft};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const Container = styled.div`
  padding-left: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    padding: 0;
  }
`;
