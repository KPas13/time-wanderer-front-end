import axios from "axios";

export const articles = async () => {
    try{
        const response = await axios.get('https://time-wanderer-api.vercel.app/articles/');
        console.log(response.data);
        return response.data;
    } catch (e) {
        alert(e);
    }
}