import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GuardedRoute from "./components/guardedRoute/GuardedRoute";
import Header from "./components/header/Header";
import AppAccounts from "./pages/appAccounts/AppAccounts";
import "./App.css";

const App = () => {
  const isAuthenticated = true;
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route element={<GuardedRoute isRouteAccessible={isAuthenticated} redirectRoute="/login" />}>
            <Route path={"/"} element={<AppAccounts />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
