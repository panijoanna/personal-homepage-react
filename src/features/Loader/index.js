import Paragraph from "../../common/Paragraph";
import { Icon } from "./styled";
import { LoadingWrapper } from "./styled";

const Loader = () => {
  return (
    <LoadingWrapper>
      <Paragraph body="Please, wait, projects are being loaded..." />
      <Icon />
    </LoadingWrapper>
  );
};

export default Loader;
