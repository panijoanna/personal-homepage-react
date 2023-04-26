import Paragraph from "../../common/Paragraph";
import { LoadingWrapper} from "./styled";
import { LoaderIcon } from "./styled";

const Loader = () => {
  return (
    <LoadingWrapper>
      <Paragraph body="Please, wait, projects are being loaded..." />
      <LoaderIcon />
    </LoadingWrapper>
  );
};

export default Loader;
