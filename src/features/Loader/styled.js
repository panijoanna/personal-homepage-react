import styled from "styled-components";
import { ReactComponent as Icon } from "../Icons/spinner.svg";

export const LoaderIcon = styled(Icon)`
  animation: rotate 1s linear infinite;
  color: ${({ theme }) => theme.color.load};

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 50px;
`;
