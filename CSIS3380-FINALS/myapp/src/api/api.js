import axios from "axios";

const instance = axios.create({
    baseURL: "https://csis-3380-finals-server.vercel.app",
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;
