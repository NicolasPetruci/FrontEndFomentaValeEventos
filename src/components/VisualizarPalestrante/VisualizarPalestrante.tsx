import {
  Input,
  FormLabel,
  Flex,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Drawer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PalestranteData } from "../../interfaces/PalestranteData";
import { updatePalestrante } from "../../services/palestranteService";

interface UpdateProps {
  isOpen: boolean;
  onClose: () => void;
  palestrante: PalestranteData | null;
  onUpdate: (palestranteAtualizado: PalestranteData) => void;
}

export default function VisualizarPalestrante({
  isOpen,
  onClose,
  palestrante,
  onUpdate,
}: UpdateProps) {
  const initialRef = React.useRef<HTMLInputElement>(null);

  const [updatePalestranteData, setUpdatePalestranteData] =
    useState<PalestranteData>({
      nomePalestrante: palestrante ? palestrante.nomePalestrante : "",
      telefonePalestrante: palestrante ? palestrante.telefonePalestrante : "",
      emailPalestrante: palestrante ? palestrante.emailPalestrante : "",
    });

  useEffect(() => {
    if (palestrante) setUpdatePalestranteData(palestrante);
  }, [palestrante]);

  const atualizarPalestrante = async () => {
    try {
      if (palestrante) {
        const numeroPalestrante = palestrante.idPalestrante!.toString();
        const { curso, ...palestranteSemCurso } = updatePalestranteData;
        console.log(palestranteSemCurso);

        await updatePalestrante(numeroPalestrante, palestranteSemCurso);

        onUpdate(updatePalestranteData);
        onClose();
        window.location.reload();
      }
    } catch (error) {
      console.error(
        "Erro ao atualizar o palestrante",
        palestrante?.idPalestrante,
        error
      );
    }
  };

  return (
    <>
      <Flex flexDir="column">
        <Drawer isOpen={isOpen} onClose={onClose} size="sm">
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Visualização</DrawerHeader>
            <DrawerBody>
              {palestrante && (
                <Flex flexDir="column">
                  <FormLabel mt="25px">ID</FormLabel>
                  <Input
                    ref={initialRef}
                    type="number"
                    value={palestrante.idPalestrante}
                  />

                  <FormLabel mt="25px">NOME DO PALESTRANTE</FormLabel>
                  <Input
                    ref={initialRef}
                    type="text"
                    defaultValue={palestrante.nomePalestrante}
                    onChange={(event) => {
                      setUpdatePalestranteData({
                        ...updatePalestranteData,
                        nomePalestrante: event.target.value,
                      });
                    }}
                  />

                  <FormLabel mt="25px"> DO PALESTRANTE</FormLabel>
                  <Input
                    ref={initialRef}
                    type="email"
                    defaultValue={palestrante.emailPalestrante}
                    onChange={(event) => {
                      setUpdatePalestranteData({
                        ...updatePalestranteData,
                        emailPalestrante: event.target.value,
                      });
                    }}
                  />

                  <FormLabel mt="25px">TELEFONE DO PALESTRANTE</FormLabel>
                  <Input
                    ref={initialRef}
                    type="number"
                    defaultValue={palestrante.telefonePalestrante}
                    onChange={(event) => {
                      setUpdatePalestranteData({
                        ...updatePalestranteData,
                        telefonePalestrante: event.target.value,
                      });
                    }}
                  />
                </Flex>
              )}
            </DrawerBody>

            <DrawerFooter>
              <Flex w="75%" justifyContent="space-around">
                <Button
                  colorScheme="red"
                  variant="outline"
                  mr={3}
                  onClick={onClose}
                >
                  Cancelar
                </Button>
                <Button
                  colorScheme="green"
                  mr={3}
                  onClick={atualizarPalestrante}
                >
                  Salvar
                </Button>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
}
