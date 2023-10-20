import { api } from "./apiService";

import { PalestranteData } from "../interfaces/PalestranteData";

export const createPalestrante = async (palestranteData: PalestranteData) => {
    const response = await api.post("/palestrante", palestranteData);
    return response.data;
};

export const getAllPalestrante = async () => {
    const response = await api.get("/palestrante");
    return response.data;
};

export const getPalestrante = async (palestranteId: string) => {
    const response = await api.get(`/palestrante/${palestranteId}`);
    return response.data;
};

export const updatePalestrante = async (palestranteId: string, updatedData: PalestranteData) => {
    const response = await api.patch(`/palestrante/${palestranteId}`, updatedData);
    return response.data;
};

export const deletePalestrante = async (palestranteId: string) => {
    const response = await api.delete(`/palestrante/${palestranteId}`);
    return response.data;
};