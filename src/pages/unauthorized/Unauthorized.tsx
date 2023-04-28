import { Portal } from "../../components/portal/Portal";
import Login from "../../components/login/Login";
import "./unauthorized.scss";

const Unauthorized = () => {
  return <Portal children={<Login />} />;
};

export default Unauthorized;
