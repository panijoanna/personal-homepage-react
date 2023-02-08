import styled, { css } from "styled-components";

export const StyledParagraph = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ color }) => color};
  max-width: 600px;

  ${({ primary }) =>
    primary &&
    css`
      color: #252525;
    `}
`;
