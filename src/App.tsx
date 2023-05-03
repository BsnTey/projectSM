import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GuardedRoute from "./components/guardedRoute/GuardedRoute";
import Header from "./components/header/Header";
import AppAccounts from "./pages/appAccounts/AppAccounts";
import Unauthorized from "./pages/unauthorized/Unauthorized";
import "./App.css";

const App = () => {
  const isAuthenticated = true;
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route element={<GuardedRoute isRouteAccessible={isAuthenticated} />}>
            <Route path={"/"} element={<AppAccounts />} />
          </Route>
          <Route path={"/auth/*"} element={<Unauthorized />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
