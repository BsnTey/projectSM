import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import AppAccounts from './components/appAccounts/AppAccounts';
import AppMenu from './components/appMenu/AppMenu';
import AddAccount from './components/addAccount/AddAccount';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <AddAccount />
        <main className="app-body container">
          <h1 className="app-title app-body__title">Список аккаунтов</h1>
          <div className="app-body__section">
            <AppMenu />
            <Routes>
              <Route path="/" element={<AppAccounts />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
