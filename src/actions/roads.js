import axios from "axios";

export const roads = async () => {
    try {
        const response = await axios.get("https://time-wanderer-api.vercel.app/roads/");
        console.log(response.data);
        return response.data;
    } catch (e) {
        alert(e);
    }
}