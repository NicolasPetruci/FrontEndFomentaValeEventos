import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  useDisclosure,
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  Drawer,
  DrawerFooter,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import BotaoRead from "../BotaoRead/BotaoRead";

import { PalestranteData } from "../../interfaces/PalestranteData";
import {
  deletePalestrante,
  getAllPalestrante,
} from "../../services/palestranteService";
import { useEffect, useRef, useState } from "react";

import VisualizarEventos from "../VisualizarEvento/VisualizarEvento";
import VisualizarPalestrante from "../VisualizarPalestrante/VisualizarPalestrante";
import React from "react";

export default function ListasPalestrantes() {
  const btnRef = React.useRef(null);
  const cancelRef = React.useRef(null);

  const [palestrante, setPalestrante] = useState<PalestranteData[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [palestranteSelecionado, setPalestranteSelecionado] =
    useState<PalestranteData | null>(null);

  const abrirModalConsultar = (palestrante: PalestranteData) => {
    setPalestranteSelecionado(palestrante);
    onOpen();
  };

  const atualizarPalestrante = (palestranteAtualizada: PalestranteData) => {
    setPalestrante((cursosPrevias: any) => {
      const cursosAtualizados = cursosPrevias.map(
        (palestrante: PalestranteData) => {
          if (
            palestrante.idPalestrante === palestranteAtualizada.idPalestrante
          ) {
            return palestranteAtualizada;
          }
          return palestrante;
        }
      );
      return cursosAtualizados;
    });
  };

  useEffect(() => {
    async function buscarPalestrante() {
      try {
        await getAllPalestrante().then((palestrante) =>
          setPalestrante(palestrante)
        );
      } catch (error) {
        console.error("Erro ao obter eventos", error);
      }
    }
    buscarPalestrante();
  }, []);

  const deletarPalestrante = async (idPalestrante: string) => {
    await deletePalestrante(idPalestrante);
    window.location.reload();
  };

  const Listas = window.location.pathname.includes("/lEventos");

  return (
    <>
      <TableContainer>
        <Table size="sm" variant="striped" colorScheme="008177">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>NOME DO PALESTRANTE</Th>
              <Th>EMAIL</Th>
              <Th>TELEFONE</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {palestrante.map((palestrante: PalestranteData, index: number) => (
              <Tr key={index}>
                <Td>{palestrante.idPalestrante}</Td>
                <Td>{palestrante.nomePalestrante}</Td>
                <Td>{palestrante.telefonePalestrante}</Td>
                <Td>{palestrante.emailPalestrante}</Td>

                <Td>
                  <Flex w="75%" justifyContent="space-around">
                    {/* <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
                      R
                    </Button>
                    <Drawer
                      size="lg"
                      isOpen={isOpen}
                      placement="right"
                      onClose={onClose}
                      finalFocusRef={btnRef}
                    >
                      <DrawerOverlay />
                      <DrawerContent>
                        <DrawerCloseButton />

                        <DrawerHeader>Visualização</DrawerHeader>
                        <DrawerBody>
                          {Listas ? (
                            <VisualizarEventos />
                          ) : (
                            <VisualizarPalestrante />
                          )}
                        </DrawerBody>

                        <DrawerFooter>
                          <Button
                            colorScheme="red"
                            variant="outline"
                            mr={3}
                            onClick={onClose}
                          >
                            Cancelar
                          </Button>
                          <Button colorScheme="green" mr={3}>
                            Salvar
                          </Button>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer> */}

                    {/* delete */}
                    <Button colorScheme="red" onClick={onOpen}>
                      D
                    </Button>

                    <AlertDialog
                      isOpen={isOpen}
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}
                    >
                      <AlertDialogOverlay>
                        <AlertDialogContent>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Deletando da Lista
                          </AlertDialogHeader>

                          <AlertDialogBody>
                            Você tem certeza? Após apagar, não será possível
                            reverter essa mudança.
                          </AlertDialogBody>

                          <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                              Cancelar
                            </Button>
                            <Button
                              colorScheme="red"
                              ml={3}
                              onClick={() => {
                                deletarPalestrante(
                                  palestrante.idPalestrante!.toString()
                                );
                              }}
                            >
                              Deletar
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialogOverlay>
                    </AlertDialog>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Id</Th>
              <Th>NOME DO PALESTRANTE</Th>
              <Th>EMAIL</Th>
              <Th>TELEFONE</Th>
              <Th>Ações</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}
