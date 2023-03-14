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
