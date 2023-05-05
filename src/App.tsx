import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GuardedRoute from "./components/guardedRoute/GuardedRoute";
import Header from "./components/header/Header";
import AppMenu from "./components/appMenu/AppMenu";
import AppAccounts from "./pages/appAccounts/AppAccounts";
import Profile from "./pages/profile/Profile";
import "./App.css";

const App = () => {
  const isAuthenticated = true;
  const { t } = useTranslation();
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="app-body container">
          <h1 className="app-title app-body__title">{t("listAcc")}</h1>
          <div className="app-body__section">
            <AppMenu />
            <Routes>
              <Route element={<GuardedRoute isRouteAccessible={isAuthenticated} />}>
                <Route path={"/"} element={<AppAccounts />} />
                <Route path={"/profile"} element={<Profile />} />
                <Route path={"/calculator"} element={<Profile />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
