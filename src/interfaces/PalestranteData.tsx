import { CursoData } from "./CursoData";

export interface PalestranteData {
    idPalestrante?: number;
    eventos: CursoData;
    nomePalestrante: string;
    telefonePalestrante: string;
    emailPalestrante: string;
}