import { Navigate, Outlet } from "react-router-dom";
interface IGuardedRouteProps {
  isRouteAccessible?: boolean;
}
const GuardedRoute: IGuardedRouteProps = ({ isRouteAccessible = false }): JSX.Element => {
  return isRouteAccessible ? <Outlet /> : <Navigate to="/login" replace />;
};

export default GuardedRoute;
