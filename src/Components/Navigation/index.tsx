import "./index.css";
import { FaBars, FaPaperPlane } from "react-icons/fa";
import { ActionFunction, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import CollapseNav from "../CollapseNav";
function Navigation({ collapsed, setCollapsed }: {collapsed: boolean, setCollapsed: React.Dispatch<React.SetStateAction<boolean>>}) {
    const { pathname } = useLocation();
    return (
        <>
            <div className="navigation-component-container">
                <div className="navigation-content-container">
                    <div className="nav-logo-section">
                        <Link to="/" className={`nav-link ${pathname.includes("/") ? "active" : ""}`}><FaPaperPlane /></Link>
                    </div>
                    <div className="nav-content-section">
                        <Link to="Dashboard" className={`nav-link ${pathname.includes("Dashboard") ? "active" : ""}`}>Dashboard</Link>
                        <Link to="Flights" className={`nav-link ${pathname.includes("Flights") ? "active" : ""}`}>Flights</Link>
                        <Link to="Stays" className={`nav-link ${pathname.includes("Stays") ? "active" : ""}`}>Stays</Link>
                        <Link to="Settings" className={`nav-link ${pathname.includes("Settings") ? "active" : ""}`}>Settings</Link>
                    </div>
                    <div className="nav-login-section">
                        <Link to="/" className="nav-link">Log In</Link>
                    </div>
                    <div className="nav-login-dropdown">
                        <FaBars onClick={() => setCollapsed(!collapsed)}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navigation;