import "./index.css"
import { FaPlus } from "react-icons/fa";

enum CabinClasses {
    Economy = "Economy",
    PremiumEconomy = "Premium Economy",
    BusinessClass = "Business Class",
    FirstClass = "First Class"
}

function TicketTypeForm({ tripType, cabinClass, setCabinClass }: { tripType: string, cabinClass: CabinClasses, setCabinClass: React.Dispatch<React.SetStateAction<CabinClasses>> }) {
    return (
        <div className={`ticket-type-form-container ${tripType !== "One-Way" ? "one-way" : ""}`}>
            <label htmlFor="cabin-class-select"><b>Cabin Class</b></label>
            <select value={cabinClass} defaultValue={CabinClasses.Economy} onChange={(e) => setCabinClass(e.target.value as CabinClasses)} id="cabin-class-select" className="form-select" aria-label="Default select example">
                <option value={CabinClasses.Economy}>Economy</option>
                <option value={CabinClasses.PremiumEconomy}>Premium Economy</option>
                <option value={CabinClasses.BusinessClass}>Business Class</option>
                <option value={CabinClasses.FirstClass}>First Class</option>
            </select>
            <label htmlFor=""><b>Travelers</b></label>
            <div className="traveler-count-container">
                <div className="type-container">
                    <p>0 adults</p>
                </div>
                <div className="type-container">
                    <p>0 seniors</p>
                </div>
            </div>
        </div>
    );
}
export default TicketTypeForm