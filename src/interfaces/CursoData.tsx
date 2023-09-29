import { PalestranteData } from "./PalestranteData";
import { TipoEvento } from "./TipoEvento";

export interface CursoData {

    idCurso: number;
    nomeCurso: string;
    dataCurso: string;
    tempoInicio: null | string;
    tempoFinalizacao: null | string;
    palestrante: PalestranteData;
    palestranteId: number;
    participante: number;
    tipoEvento: TipoEvento;
    observacao: string;
    arrecadacao: number;

}