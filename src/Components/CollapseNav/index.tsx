import "./index.css";
import { Link, useLocation } from "react-router-dom";
function CollapseNav() {
    const { pathname } = useLocation();
    return (
        <div className="collapse-nav-container">
            <Link to="Dashboard" className={`nav-link ${pathname.includes("Dashboard") ? "active" : ""}`}>Dashboard</Link>
            <Link to="Flights" className={`nav-link ${pathname.includes("Flights") ? "active" : ""}`}>Flights</Link>
            <Link to="Stays" className={`nav-link ${pathname.includes("Stays") ? "active" : ""}`}>Stays</Link>
            <Link to="Settings" className={`nav-link ${pathname.includes("Settings") ? "active" : ""}`}>Settings</Link>
            <Link to="/" className="nav-link">Log In</Link>
        </div>
    );
}
export default CollapseNav;