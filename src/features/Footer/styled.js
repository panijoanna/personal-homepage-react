import styled from "styled-components";
import { ReactComponent as Github } from "../Icons/github.svg";
import { ReactComponent as Linkedin } from "../Icons/linkedin.svg";

export const StyledFooter = styled.footer`
  display: flex;
  width: 90%;
  margin: auto;
  padding: 120px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    padding: 48px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletDevice}px) {
    width: 90%;
  }
`;

export const FooterContainer = styled.div``;

export const GithubIcon = styled(Github)`
  width: 48px;
  height: 48px;
  margin: 56px 24px 0 0;
  color: ${({ theme }) => theme.color.icon};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.button};
  }
`;

export const LinkedinIcon = styled(Linkedin)`
  width: 48px;
  color: ${({ theme }) => theme.color.icon};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.button};
  }
`;
