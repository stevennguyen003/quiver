import "./index.css";
import { FaLocationArrow, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
function FlightForm() {
    const [startLocation, setStartLocation] = useState("");
    const [tripType, setTripType] = useState("One-Way");
    const [collapsed, setCollapsed] = useState(true);
    return (
        <div className="flight-search-container">
            <div className="trip-type-container">
                <span onClick={() => setTripType("Round-Trip")} className={`${tripType === "Round-Trip" ? "selected-trip" : ""}`}>Round-Trip</span>
                <span onClick={() => setTripType("One-Way")} className={`${tripType === "One-Way" ? "selected-trip" : ""}`}>One-Way</span>
            </div>
            <div className="location-search-container">
                <div className="from-search-container">
                    <FaLocationArrow />
                    <input type="text" id="flight-search-from" placeholder="From" />
                </div>
                <div className="to-search-container">
                    <FaLocationArrow />
                    <input type="text" id="flight-search-to" placeholder="To" />
                </div>
            </div>
            <div className={`collapse-flex-container ${tripType === "One-Way" ? "collapse-one-way" : ""}`}>
                <div className={`date-search-container ${tripType === "One-Way" ? "data-search-one-way" : ""}`}>
                    <div className="depart-flight-container">
                        <input type="date" id="depart-flight-date" />
                    </div>
                    <div className={`vertical-divider ${tripType === "One-Way" ? "d-none" : ""}`}></div>
                    <div className={`return-flight-container ${tripType === "One-Way" ? "d-none" : ""}`}>
                        <input type="date" id="return-flight-date" />
                    </div>
                </div>
                <div className="ticket-type-container">
                    {collapsed ? <FaChevronUp /> : <FaChevronDown />}
                    <button onClick={() => setCollapsed(!collapsed)} className="ticket-type-collapse-button">Test</button>
                </div>
            </div>
            <button className={`btn btn-primary ${tripType === "One-Way" ? "btn-one-way" : ""}`}>Find Flights</button>
        </div>
    );
}
export default FlightForm;