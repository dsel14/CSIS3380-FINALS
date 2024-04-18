import api from "../api/api";

export const getAllArt = async() => {
    const result = api.get("/art");
    return result;
};

export const oneArt = async(id) => {
    const result = api.get(`/art/${id}`);
    return result;
};

export const addBid = async (id, data) => {
    const result = await api.post(`/art/${id}/bid`, data);
    return result;
};