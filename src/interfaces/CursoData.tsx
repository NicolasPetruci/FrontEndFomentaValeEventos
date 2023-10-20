import { PalestranteData } from "./PalestranteData";
import { TipoEvento } from "./TipoEvento";

export interface CursoData {

    idCurso?: number;
    nomeCurso: string;
    dataCurso?: string;
    tempoInicio?: null | string;
    tempoFinalizacao?: null | string;
    palestrante: PalestranteData[];
    participante: number;
    tipoEvento?: TipoEvento;
    descricaoCurso: string;
    observacao: string;
    arrecadacao: number;

}