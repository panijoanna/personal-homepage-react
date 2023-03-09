import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 190vh;
`;

export const Image = styled.img`
  border-radius: 50%;
  max-width: 398px;
  padding: 50px;
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
`;

export const Container = styled.div``;

