import styled from "styled-components";

export const StyledHeading = styled.h2`
  display: flex;
  justify-content: flex-start;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.05em;
  margin: 0;
  padding: 13px 0 8px 0;

  ${({ underline }) =>
    underline &&
    css`
      border-bottom: solid ${({ theme }) => theme.color.lightGray};
    `}
`;
