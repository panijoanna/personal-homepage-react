import styled from "styled-components";
import { ReactComponent as Github } from "../Icons/github.svg";
import { ReactComponent as Linkedin } from "../Icons/linkedin.svg";

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

export const GithubIcon = styled(Github)`
  width: 48px;
  height: 48px;
  margin: 56px 24px 0 0;
  color: ${({ theme }) => theme.color.mineShaft};

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }
`;

export const LinkedinIcon = styled(Linkedin)`
  width: 48px;
  color: ${({ theme }) => theme.color.mineShaft};

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }
`;
