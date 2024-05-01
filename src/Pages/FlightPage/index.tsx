import "./index.css"
import FlightForm from "../../Components/FlightForm";
function FlightPage() {
    return (
        <div className="flight-page-container">
            <div className="header-container">
                <span>Where</span>
                <span>Do</span>
                <span>You</span>
                <span>Want</span>
                <span>To</span>
                <span>Go?</span>
            </div>
            <FlightForm />
        </div>
    );
}
export default FlightPage;