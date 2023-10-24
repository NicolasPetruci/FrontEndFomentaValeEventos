import { api } from "./apiService";

import { CursoData } from "../interfaces/CursoData";

export const createCurso = async (cursoData: CursoData) => {
    const response = await api.post('/curso', cursoData);
    return response.data;
};

export const getAllCursos = async () => {
    const response = await api.get('/curso');
    return await response.data;
};

export const getCurso = async (cursoId: string) => {
    const response = await api.get(`/curso/${cursoId}`);
    return await response.data;
};

export const updateCursoData = async (cursoId: string, updatedData: CursoData) => {
    const response = await api.patch(`/curso/${cursoId}`, updatedData);
    return await response.data;
}

export const deleteCurso = async (cursoId: string) => {
    const response = await api.delete(`/curso/${cursoId}`);
    return await response.data;
}