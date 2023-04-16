import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/header/Header";

import AppAccounts from "./pages/appAccounts/AppAccounts";
import AddAccount from "./components/addAccount/AddAccount";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AppAccounts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
