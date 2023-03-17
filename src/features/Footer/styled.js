import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  width: 135vh;
  margin-top: 20vh;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 100%;
    width: 270px;
    margin: 50px auto;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    height: 450px;
  }
`;

export const FooterContainer = styled.div``;
