import Wrapper from "../../components/Wrapper.component";
import { useLocation } from "react-router-dom";
import { getPaths } from "../../assets/Utility/Utility.components";

const TrendingPage = () => {
  const { pathname } = useLocation();
  const { currentPath } = getPaths(pathname);
  return <Wrapper currentPath={currentPath} />;
};

export default TrendingPage;
