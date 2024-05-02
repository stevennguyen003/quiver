import axios from "axios";
axios.defaults.withCredentials = true;
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const getAirports = async (query: string) => {
    try {
        const url = `${BACKEND_URL}/api/airports/${query.toLowerCase()}`;
        const response = await axios.get(url);
        console.log(response.data.data);
        return response.data; // Return the JSON data from the response
    } catch (error) {
        console.error("Error fetching airports:", error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};
