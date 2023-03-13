import { ErrorContainer, ErrorMessage, ErrorParagraph } from "./styled";
import ErrorIcon from "../Icons/ErrorIcon";
import { Button } from "../../common/Button/styled";
import { Link } from "../../common/Link/styled";

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorIcon />
      <ErrorMessage>Ooops! Something went wrong...</ErrorMessage>
      <ErrorParagraph>
        Sorry, failed to load Github projects.
        <br />
        You can check them directly on Github.
      </ErrorParagraph>
      <Link href="https://github.com/panijoanna">
        <Button>Go to Github</Button>
      </Link>
    </ErrorContainer>
  );
};

export default Error;
