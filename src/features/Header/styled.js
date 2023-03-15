import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 190vh;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 100%;
    width: 270px;
    height: 620px;
    margin: 0 auto;
    font-size: 17px;
    line-height: 140%;
    letter-spacing: 0.05em;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  max-width: 398px;
  padding: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    max-width: 250px;
    width: 130px;
    padding: 0;
  }
`;

export const StyledParagraph = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.gray};
`;

export const HeadingTitle = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.mineShaft};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 22px;
  }
`;

export const Container = styled.div``;
