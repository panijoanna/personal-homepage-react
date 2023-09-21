import styled from "styled-components";
import { animated } from "react-spring";

export const StyledHeader = styled(animated.header)`
  display: flex;
  padding: 100px;
  width: 100%;
  justify-content: center;
  margin-left: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletDevice}px) {
    padding: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    padding: 20px;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.maxDevice}px) {
    padding: 80px;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  margin-bottom: 0;
  display: flex;
  max-width: 300px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    max-width: 200px;
    margin: 0;
    display: flex;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletDevice}px) {
    max-width: 40%;
    height: 50%;
    margin-top: 30px;
  }
`;

export const StyledParagraph = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.large};
  font-size: ${({ theme }) => theme.fontSizes.xxsmall};
  line-height: 130%;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
  }
`;

export const HeadingTitle = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  line-height: 46px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.heading};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    text-align: flex-start;
  }
`;

export const Container = styled.div`
  padding: 20px 0 40px 66px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    padding-left: 0;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.maxDevice}px) {
    width: 80%;
  }
`;
