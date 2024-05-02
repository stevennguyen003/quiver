import "./index.css";
import { FaLocationArrow, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import TicketTypeForm from "../TicketTypeForm";

enum CabinClasses {
    Economy = "Economy",
    PremiumEconomy= "Premium Economy",
    BusinessClass = "Business Class",
    FirstClass = "First Class"
}

function FlightForm({ ticketCollapsed, setTicketCollapsed }: { ticketCollapsed: boolean, setTicketCollapsed: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [tripType, setTripType] = useState("One-Way");
    const [startAiport, setStartAirport] = useState("");
    const [destAirport, setDestAirport] = useState("");
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [cabinClass, setCabinClass] = useState(CabinClasses.Economy);
    return (
        <>
            <div className="flight-search-container">
                <form>
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
                                <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} id="depart-flight-date" />
                            </div>
                            <div className={`vertical-divider ${tripType === "One-Way" ? "d-none" : ""}`}></div>
                            <div className={`return-flight-container ${tripType === "One-Way" ? "d-none" : ""}`}>
                                <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} id="return-flight-date" />
                            </div>
                        </div>
                        <div className={`ticket-type-container ${tripType === "One-Way" ? "ticket-type-one-way" : ""}`}>
                            {ticketCollapsed ? <FaChevronUp /> : <FaChevronDown />}
                            <button onClick={() => setTicketCollapsed(!ticketCollapsed)} className="ticket-type-collapse-button">Test</button>
                            {!ticketCollapsed && <TicketTypeForm tripType={tripType} cabinClass={cabinClass} setCabinClass={setCabinClass} />}
                        </div>
                    </div>
                    <button className={`btn btn-primary ${tripType === "One-Way" ? "btn-one-way" : ""}`}>Find Flights</button>
                </form>
            </div>
        </>
    );
}
export default FlightForm;