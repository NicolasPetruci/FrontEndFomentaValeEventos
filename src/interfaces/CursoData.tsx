import { PalestranteData } from "./PalestranteData";
import { TipoEvento } from "./TipoEvento";

export interface CursoData {

    idCurso?: number;
    nomeCurso: string;
    dataCurso?: string;
    tempoInicio?: string;
    tempoFinalizacao?: string;
    palestrante: PalestranteData[];
    participante: number;
    tipoEvento: TipoEvento;
    descricaoCurso: string;
    observacao: string;
    arrecadacao: number;

}