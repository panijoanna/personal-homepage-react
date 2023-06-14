import { ErrorContainer, ErrorMessage, ErrorIcon } from "./styled";
import { Button } from "../../common/Button/styled";
import { Link } from "../../common/Link/styled";
import Paragraph from "../../common/Paragraph/index";

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorIcon />
      <ErrorMessage>Ooops! Something went wrong...</ErrorMessage>
      <Paragraph
        body="
        Failed to load projects.
        Check them directly on Github."
      />
      <Link
        href="https://github.com/panijoanna"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button>Go to Github</Button>
      </Link>
    </ErrorContainer>
  );
};

export default Error;
