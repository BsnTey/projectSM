import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/header/Header";
import AppAccounts from "./components/appAccounts/AppAccounts";

const App = () => {
  return (
    <Router>
      <div className="App">
        <main>
          <Header />
          {/* <Routes>
            <Route path="/" element={<Header />} />
          </Routes> */}
          <AppAccounts />
        </main>
      </div>
    </Router>
  );
};

export default App;
