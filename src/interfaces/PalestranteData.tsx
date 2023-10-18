import { CursoData } from "./CursoData";

export interface PalestranteData {
    idPalestrante?: number;
    nomePalestrante: string;
    telefonePalestrante: string;
    emailPalestrante: string;
    cursos?: CursoData;
}