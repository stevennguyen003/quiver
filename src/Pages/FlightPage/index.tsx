import "./index.css"
import { useState } from "react";
import FlightForm from "../../Components/FlightForm";
import TicketTypeForm from "../../Components/TicketTypeForm";
function FlightPage() {
    const [ticketCollapsed, setTicketCollapsed] = useState(true);
    return (
        <div className="flight-page-container">
            <FlightForm ticketCollapsed={ticketCollapsed} setTicketCollapsed={setTicketCollapsed}/>
        </div>
    );
}
export default FlightPage;