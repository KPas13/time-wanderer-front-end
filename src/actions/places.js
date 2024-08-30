import axios from "axios";

export const places = async () => {
    try {
        const response = await axios.get("https://time-wanderer-api.vercel.app/places/place");
        console.log(response.data);
        return response.data;
    } catch (e) {
        alert(e);
    }
}