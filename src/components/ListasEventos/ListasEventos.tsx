import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
  Button,
  Drawer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CursoData } from "../../interfaces/CursoData";
import { deleteCurso, getAllCursos } from "../../services/eventoService";
import { formatarData } from "../../helpers/funcoes";
import React from "react";
import VisualizarEventos from "../VisualizarEvento/VisualizarEvento";

export default function ListasEventos() {
  
  const btnRef = React.useRef(null);

  const [curso, setCurso] = useState<CursoData[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cursoSelecionado, setCursoSelecionado] = useState<CursoData | null>(
    null
  );

  const abrirDrawerConsultar = (curso: CursoData) => {
    setCursoSelecionado(curso);
    onOpen();
  };

    const atualizarCurso = (cursoAtualizado: CursoData) => {
      setCurso((cursoPrevias) => {
        const cursosAtualizados = cursoPrevias.map((curso) => {
          if (curso.idCurso === cursoAtualizado.idCurso) {
            return cursoAtualizado;
          }
          return curso;
        });
        return cursosAtualizados;
      });
    };

  useEffect(() => {
    async function buscarCurso() {
      try {
        await getAllCursos().then((curso) => setCurso(curso));
      } catch (error) {
        console.error("Erro ao obter Cursos", error);
      }
    }
    buscarCurso();
  }, []);

  const deletarCurso = async (idCurso: string) => {
    await deleteCurso(idCurso);
    window.location.reload();
  };

  return (
    <>
      <TableContainer>
        <Table size="sm" variant="striped" colorScheme="008177">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>NOME DO EVENTO</Th>
              <Th>INICIO</Th>
              <Th>FIM</Th>
              {/* <Th>Tempo de Finalização</Th> */}
              <Th>Participantes</Th>
              {/*<Th>Descrição</Th>
                     <Th>Observação</Th>
                    <Th>Qtd de Arrecadação</Th> */}
              <Th>Ações</Th>
            </Tr>
          </Thead>

          <Tbody>
            {curso.map((curso, index) => (
              <Tr key={index}>
                <Td>{curso.idCurso}</Td>
                <Td>{curso.nomeCurso}</Td>
                <Td>{formatarData(curso.tempoInicio!.toLocaleString())}</Td>
                <Td>
                  {formatarData(curso.tempoFinalizacao!.toLocaleString())}
                </Td>
                <Td>{curso.participante}</Td>
                <Td>
                  <Button
                  mr="5px"
                    colorScheme="red"
                    onClick={() => {
                      deletarCurso(curso.idCurso!.toString());
                    }}
                  >
                    D
                  </Button>
                  <Button ref={btnRef} colorScheme="blue" onClick={() => abrirDrawerConsultar(curso)}>
                    R
                  </Button>
                  <Drawer
                    size="lg"
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    key={index}
                  >
                    {cursoSelecionado && (
                      <VisualizarEventos
                        isOpen={isOpen}
                        cursoD={cursoSelecionado}
                        onClose={onClose}
                        onUpdate={atualizarCurso}
                      />
                    )}
                  </Drawer>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>ID</Th>
              <Th>NOME DO EVENTO</Th>
              <Th>INICIO</Th>
              <Th>FIM</Th>
              <Th>Participantes</Th>
              <Th>Ações</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}
