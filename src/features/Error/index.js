import { ErrorContainer, ErrorMessage } from "./styled";
import { Button } from "../../common/Button/styled";
import { Link } from "../../common/Link/styled";
import { StyledParagraph } from "../../common/Paragraph/styled";
import {ReactComponent as ErrorIcon } from "../Icons/error.svg"

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorIcon />
      <ErrorMessage>Ooops! Something went wrong...</ErrorMessage>
      <StyledParagraph
        body="
        Sorry, failed to load Github projects.
        <br />
        You can check them directly on Github."
      />
      <Link href="https://github.com/panijoanna">
        <Button>Go to Github</Button>
      </Link>
    </ErrorContainer>
  );
};

export default Error;
