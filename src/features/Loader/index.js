import Paragraph from "../../common/Paragraph";
import { Icon } from "./styled";
import { Wrapper } from "../../common/Wrapper/styled";

const Loader = () => {
  return (
    <Wrapper>
      <Paragraph body="Please, wait, projects are being loaded..." />
      <Icon />
    </Wrapper>
  );
};

export default Loader;
