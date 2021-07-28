import axios from "axios";
export const GetService = async () => {
    const response = await axios.get("https://react-movies-app.free.beeceptor.com/movies");
    return response.data;
}