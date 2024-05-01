import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Navigation from './Components/Navigation';
import LandingPage from './Pages/LandingPage';
import FlightPage from "./Pages/FlightPage";
import Dashboard from "./Pages/Dashboard";
import './App.css';

function App() {
  return (
    <div className="page-container">
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Stays" element={<h1>Stays</h1>} />
          <Route path="/Flights" element={<FlightPage />} />
          <Route path="/Settings" element={<h1>Settings</h1>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
