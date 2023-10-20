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
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { PalestranteData } from "../../interfaces/PalestranteData";
import {
  deletePalestrante,
  getAllPalestrante,
} from "../../services/palestranteService";
import { useEffect, useState } from "react";

import React from "react";
import VisualizarPalestrante from "../VisualizarPalestrante/VisualizarPalestrante";

export default function ListasPalestrantes() {
  const btnRef = React.useRef(null);
  const cancelRef = React.useRef(null);

  const [palestrante, setPalestrante] = useState<PalestranteData[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [palestranteSelecionado, setPalestranteSelecionado] =
    useState<PalestranteData | null>(null);

  // const abrirModalConsultar = (palestrante: PalestranteData) => {
  //   setPalestranteSelecionado(palestrante);
  //   onOpen();
  // };

  // const atualizarPalestrante = (palestranteAtualizada: PalestranteData) => {
  //   setPalestrante((cursosPrevias: any) => {
  //     const cursosAtualizados = cursosPrevias.map(
  //       (palestrante: PalestranteData) => {
  //         if (
  //           palestrante.idPalestrante === palestranteAtualizada.idPalestrante
  //         ) {
  //           return palestranteAtualizada;
  //         }
  //         return palestrante;
  //       }
  //     );
  //     return cursosAtualizados;
  //   });
  // };

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
            {palestrante.map((palestrante: PalestranteData, index) => (
              <Tr key={index}>
                <Td>{palestrante.idPalestrante}</Td>
                <Td>{palestrante.nomePalestrante}</Td>
                <Td>{palestrante.telefonePalestrante}</Td>
                <Td>{palestrante.emailPalestrante}</Td>

                <Td>
                  
                    <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
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
                      
                      <DrawerContent >
                        <DrawerCloseButton />
                        <DrawerHeader>Visualização</DrawerHeader>
                        <DrawerBody>
                          
                            <FormLabel mt="25px">ID</FormLabel>
                            <Input type="number" value={palestrante.idPalestrante}></Input>

                            <FormLabel mt="25px">
                              NOME DO PALESTRANTE
                            </FormLabel>
                            <Input type="text" value={palestrante.nomePalestrante}></Input>

                            <FormLabel mt="25px">
                              
                              EMAIL DO PALESTRANTE
                            </FormLabel>
                            <Input type="email" value={palestrante.emailPalestrante}></Input>

                            <FormLabel mt="25px">
                              TELEFONE DO PALESTRANTE
                            </FormLabel>
                            <Input type="number" value={palestrante.telefonePalestrante}></Input>
                          
                        </DrawerBody>

                        <DrawerFooter >
                          <Flex  w="75%" justifyContent="space-around">
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
                          </Flex>
                          
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>

                    {/* delete */}
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        deletarPalestrante(
                          palestrante.idPalestrante!.toString()
                        );
                      }}
                    >
                      D
                    </Button>
                  
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
