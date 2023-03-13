import styled from "styled-components";
import LoaderIcon from "../Icons/LoaderIcon";

export const Icon = styled(LoaderIcon)`
  animation: rotete 1s linear infinite;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
