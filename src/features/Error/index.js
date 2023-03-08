import Heading from "../../common/Heading";
import { ErrorContainer, ErrorMessage } from "./styled";
import ErrorIcon from "../Icons/ErrorIcon";

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorIcon />
      <ErrorMessage>Ooops! Something went wrong...</ErrorMessage>
      <Heading title="Sorry, failed to load Github projects. You can check them directly on Github" />
      <Link href="https://github.com/panijoanna">
        <Button>Go to Github</Button>
      </Link>
    </ErrorContainer>
  );
};

export default Error;
