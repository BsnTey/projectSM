import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GuardedRoute from "./components/guardedRoute/GuardedRoute";
import Header from "./components/header/Header";
import AppAccounts from "./pages/appAccounts/AppAccounts";
// import { Modal } from "./components/modal/Modal";
// import FormLogin from "./components/formLogin/FormLogin";
// import Registration from "./components/registration/Registration";
// import Authorization from "./components/authorization/Authorization";
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
          {/* <Route path={"/auth"} element={<Modal children={<FormLogin />} />} />
          <Route path={"/login"} element={<Modal children={<FormLogin children={<Authorization />} />} />} />
          <Route path={"/register"} element={<Modal children={<FormLogin children={<Registration />} />} />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
