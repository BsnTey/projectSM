// import { ReactElement } from "react";
// import { Route, useNavigate, Navigate } from "react-router-dom";

// interface IGuardedRouteProps {
//   isAuthenticated: boolean;
//   path: string;
//   element: ReactElement;
// }

// const GuardedRoute: React.FC<IGuardedRouteProps> = ({ isAuthenticated, path, element }) => {
//   const navigate = useNavigate();
//   if (isAuthenticated) {
//     return <Route path={path} element={element} />;
//   }
//   return <Navigate to="/login" />;
// };

// export default GuardedRoute;
import { Navigate, Outlet } from "react-router-dom";

interface GuardedRouteProps {
  isRouteAccessible?: boolean;
  redirectRoute?: string;
}
const GuardedRoute = ({ isRouteAccessible = false, redirectRoute = "/" }: GuardedRouteProps): JSX.Element => {
  console.log("outlent");
  return isRouteAccessible ? <Outlet /> : <Navigate to={redirectRoute} replace />;
};

export default GuardedRoute;
