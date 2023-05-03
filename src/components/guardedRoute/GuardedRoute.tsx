import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
interface IGuardedRouteProps {
  redirectRoute?: string;
}
const GuardedRoute = ({ redirectRoute = "/auth" }: IGuardedRouteProps): JSX.Element => {
  const currentUser = useSelector(selectUser);

  return currentUser ? <Outlet /> : <Navigate to={redirectRoute} replace />;
};

export default GuardedRoute;
