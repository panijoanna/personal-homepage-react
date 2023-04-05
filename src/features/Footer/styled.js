import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 135vh;
  padding: 50px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    width: 100%;
    padding: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletDevice}px) {
    margin: auto;
    width: 80%;
    align-items: start;
  }
`;

export const FooterContainer = styled.div``;
