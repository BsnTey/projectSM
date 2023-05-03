import { Navigate, Outlet } from "react-router-dom";

interface GuardedRouteProps {
  isRouteAccessible?: boolean;
  redirectRoute?: string;
}
const GuardedRoute = ({ isRouteAccessible = false }: GuardedRouteProps): JSX.Element => {
  return isRouteAccessible ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default GuardedRoute;
