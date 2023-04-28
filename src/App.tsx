import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GuardedRoute from "./components/guardedRoute/GuardedRoute";
import Header from "./components/header/Header";
import AppAccounts from "./pages/appAccounts/AppAccounts";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route element={<GuardedRoute />}>
            <Route path={"/"} element={<AppAccounts />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
