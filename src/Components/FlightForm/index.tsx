import "./index.css";
import { FaLocationArrow, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import * as client from "./client";
import TicketTypeForm from "../TicketTypeForm";

enum CabinClasses {
    Economy = "Economy",
    PremiumEconomy = "Premium Economy",
    BusinessClass = "Business Class",
    FirstClass = "First Class"
}

function FlightForm({ ticketCollapsed, setTicketCollapsed, searchResults, setSearchResults }:
    { ticketCollapsed: boolean, setTicketCollapsed: React.Dispatch<React.SetStateAction<boolean>>, searchResults: never[], setSearchResults: React.Dispatch<React.SetStateAction<never[]>> }) {
    const [tripType, setTripType] = useState("One-Way");
    const [startAirport, setStartAirport] = useState("");
    const [destAirport, setDestAirport] = useState("");
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [cabinClass, setCabinClass] = useState(CabinClasses.Economy);
    const [resultClicked, setResultClicked] = useState(false);

    const searchStartAirports = async () => {
        try {
            const response = await client.getAirports(startAirport);
            console.log(response.data);
        } catch (error) {
            console.log("startAirport failed:", error);
        }
    }

    const searchDestAirports = async () => {
        try {
            const response = await client.getAirports(destAirport);
            console.log(response.data);
        } catch (error) {
            console.log("startAirport failed:", error);
        }
    }

    const handleStartBlur = () => {
        !resultClicked && setStartAirport("");
    }

    const handleDestBlur = () => {
        !resultClicked && setDestAirport("");
    }

    useEffect(() => {
        // Function to perform debounce
        const delaySearch = setTimeout(() => {
            searchStartAirports();
            searchDestAirports();
        }, 500); // Adjust delay as needed

        // Cleanup function to clear timeout on component unmount or when searchTerm changes
        return () => clearTimeout(delaySearch);
    }, [startAirport]);

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
                            <input type="text" value={startAirport} onChange={(e) => setStartAirport(e.target.value)} autoComplete="off" onBlur={handleStartBlur} id="flight-search-from" placeholder="From" />
                        </div>
                        <div className="to-search-container">
                            <FaLocationArrow />
                            <input type="text" value={destAirport} onChange={(e) => setDestAirport(e.target.value)} autoComplete="off"  onBlur={handleDestBlur} id="flight-search-to" placeholder="To" />
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
                            <button onClick={() => setTicketCollapsed(!ticketCollapsed)} className="ticket-type-collapse-button">{cabinClass}</button>
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