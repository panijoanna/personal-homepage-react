import styled from "styled-components";
import {ReactComponent as LoaderIcon} from "./loaderIcon.svg";

export const Icon = styled(LoaderIcon)`
  animation: rotate 1s linear infinite;

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
`;
