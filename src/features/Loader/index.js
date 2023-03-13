import { StyledParagraph } from "../../common/Paragraph/styled";
import LoaderIcon from "../Icons/LoaderIcon";
import { Wrapper } from "../../common/Wrapper/styled";

const Loader = () => {
  return (
    <Wrapper>
      <StyledParagraph body="Please, wait, projects are being loaded..." />
      <Icon />
    </Wrapper>
  );
};

export default Loader;
