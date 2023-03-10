import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ color }) => color};
  max-width: 600px;
  margin: 0 auto;
  padding: 12px 0;
`;

export const UppercaseParagraph = styled(StyledParagraph)`
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.gray};
`;

export const EmailParagraph = styled(StyledParagraph)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.mineShaft};

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }
`;
