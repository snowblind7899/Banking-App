import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Home';
import LoginPage from './pages/Login';
import MainMenuPage from './pages/MainMenu';
import TransactionPage from './pages/Transaction';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/home" element={<MainMenuPage/>}/>
          <Route exact path="/transactions" element={<TransactionPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App
