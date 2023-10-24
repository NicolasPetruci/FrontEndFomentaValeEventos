import {
  Input,
  FormLabel,
  Flex,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from "@chakra-ui/react";

import Select from "react-select";
import { CursoData } from "../../interfaces/CursoData";
import { updateCursoData } from "../../services/eventoService";
import { imprimeDataInput } from "../../helpers/funcoes";
import { PalestranteData } from "../../interfaces/PalestranteData";
import { getAllPalestrante } from "../../services/palestranteService";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import React from "react";

interface UpdatePropsCurso {
  isOpen: boolean;
  onClose: () => void;
  cursoD: CursoData;
  onUpdate: (cursoAtualizado: CursoData) => void;
}

export default function VisualizarEventos({
  isOpen,
  onClose,
  cursoD,
  onUpdate,
}: UpdatePropsCurso) {
  const initialRef = React.useRef<HTMLInputElement>(null);
  const [curso, setCurso] = useState<CursoData>(cursoD);
  const [palestrante, setPalestrante] = useState<PalestranteData[]>([]);

  const {
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function buscarPalestrante() {
      try {
        await getAllPalestrante().then((palestrante) =>
          setPalestrante(palestrante)
        );
      } catch (error) {
        console.error("Erro ao obter os palestrantes", error);
      }
    }

    buscarPalestrante();
  }, []);

  const nomePalestrante = palestrante.map((palestrante) => {
    return {
      label: palestrante.nomePalestrante,
      value: palestrante.idPalestrante,
      data: palestrante,
    };
  });

  const [palestranteSelecionado, setPalestranteSelecionado] = useState<
    PalestranteData[]
  >(curso.palestrante);

  const [updateCurso, setUpdateCurso] = useState<CursoData>({
    nomeCurso: curso ? curso.nomeCurso : "",
    tempoInicio: curso ? curso.tempoInicio : new Date().toISOString(),
    tempoFinalizacao: curso ? curso.tempoFinalizacao : new Date().toISOString(),
    palestrante: curso ? curso.palestrante : [],
    participante: curso ? curso.participante : 0,
    descricaoCurso: curso ? curso.descricaoCurso : "",
    observacao: curso ? curso.observacao : "",
    arrecadacao: curso ? curso.arrecadacao : 0,
  });

  useEffect(() => {
    async function criarListaPalestrante(
      palestranteSelecionado: PalestranteData[] | PalestranteData
    ) {
      let novoPalestrante: PalestranteData[];

      if (palestranteSelecionado instanceof Array) {
        novoPalestrante = palestranteSelecionado.map(
          (palestrante: PalestranteData) => {
            return {
              idPalestrante: palestrante.idPalestrante,
              nomePalestrante: palestrante.nomePalestrante,
              telefonePalestrante: palestrante.telefonePalestrante,
              emailPalestrante: palestrante.emailPalestrante,
            };
          }
        );
      } else {
        novoPalestrante = [
          {
            idPalestrante: palestranteSelecionado.idPalestrante,
            nomePalestrante: palestranteSelecionado.nomePalestrante,
            telefonePalestrante: palestranteSelecionado.telefonePalestrante,
            emailPalestrante: palestranteSelecionado.emailPalestrante,
          },
        ];
      }
      setCurso({
        ...curso,
        palestrante: novoPalestrante.map((palestrante) => {
          return palestrante;
        }),
      });
    }

    criarListaPalestrante(palestranteSelecionado);
  }, [palestranteSelecionado]);

  useEffect(() => {
    if (curso) setUpdateCurso(curso);
  }, [curso]);

  const atualizarCurso = async () => {
    try {
      if (updateCurso) {
        const numeroCurso = updateCurso.idCurso!.toString();
        console.log(updateCurso);

        await updateCursoData(numeroCurso, updateCurso);

        onUpdate(updateCurso);
        onClose();
      }
    } catch (error) {
      console.error("Erro ao atualizar a reuniao", updateCurso?.idCurso, error);
    }
  };

  return (
    <>
      <Flex w="100%" flexDir="column" mb="10%">
        <Drawer isOpen={isOpen} onClose={onClose} size="sm">
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Visualização</DrawerHeader>
            <DrawerBody>
              <FormLabel mt="25px">ID</FormLabel>
              <Input ref={initialRef} type="number" value={curso.idCurso} />

              <FormLabel mt="25px"> NOME DO EVENTO</FormLabel>
              <Input
                {...register("nomeCurso", { required: true })}
                ref={initialRef}
                type="text"
                defaultValue={curso.nomeCurso}
                onChange={(event) => {
                  setUpdateCurso({
                    ...updateCurso,
                    nomeCurso: event.target.value,
                  });
                }}
              />
              {errors.nomeCurso && "É obrigatório"}
              <FormLabel mt="25px">INICIO</FormLabel>
              <Input
                {...register("tempoInicio", { required: true })}
                ref={initialRef}
                type="datetime-local"
                defaultValue={imprimeDataInput(curso.tempoInicio!)}
                onChange={(event) => {
                  setUpdateCurso({
                    ...updateCurso,
                    tempoInicio: event.target.value,
                  });
                }}
              />
              {errors.tempoInicio && "É obrigatório"}
              <FormLabel mt="25px"> FINALIZAÇÃO</FormLabel>
              <Input
                {...register("tempoFinalizacao", { required: true })}
                ref={initialRef}
                type="datetime-local"
                defaultValue={imprimeDataInput(curso.tempoFinalizacao!)}
                onChange={(event) => {
                  setUpdateCurso({
                    ...updateCurso,
                    tempoFinalizacao: event.target.value,
                  });
                }}
              />
              {errors.tempoFinalizacao && "É obrigatório"}
              <FormLabel mt="25px"> PALESTRANTES</FormLabel>
              <Select
                {...register("palestrante", { required: true })}
                isMulti
                options={nomePalestrante}
                defaultValue={curso.palestrante.map((palestrante) => ({
                  label: palestrante.nomePalestrante,
                  value: palestrante.idPalestrante,
                  data: palestrante,
                }))}
                onChange={(event) => {
                  const palestranteSelecionado = event.map(
                    (palestrante) => palestrante.data
                  );
                  setPalestranteSelecionado(palestranteSelecionado);
                  setUpdateCurso((estadoAnterior) => ({
                    ...estadoAnterior,
                    palestrante: palestranteSelecionado,
                  }));
                }}
              />
              {errors.palestrante && "É obrigatório"}
              <FormLabel mt="25px"> PARTICIPANTES</FormLabel>
              <Input
                {...register("participante", { required: true })}
                ref={initialRef}
                type="number"
                defaultValue={curso.participante}
                onChange={(event) => {
                  setUpdateCurso({
                    ...updateCurso,
                    participante: parseInt(event.target.value),
                  });
                }}
              />
              {errors.participante && "É obrigatório"}
              <FormLabel mt="25px"> DESCRIÇÃO</FormLabel>
              <Input
                {...register("descricao", { required: true })}
                ref={initialRef}
                type="text"
                defaultValue={curso.descricaoCurso}
                onChange={(event) => {
                  setUpdateCurso({
                    ...updateCurso,
                    descricaoCurso: event.target.value,
                  });
                }}
              />
              {errors.descricaoCurso && "É obrigatório"}
              <FormLabel mt="25px"> TIPO</FormLabel>
              <Input
                {...register("observacao", { required: true })}
                ref={initialRef}
                type="text"
                defaultValue={curso.observacao}
                onChange={(event) => {
                  setUpdateCurso({
                    ...updateCurso,
                    observacao: event.target.value,
                  });
                }}
              />
              {errors.observacao && "É obrigatório"}
              <FormLabel mt="25px"> ARRECADAÇÃO</FormLabel>
              <Input
                {...register("arrecadacao", { required: false })}
                ref={initialRef}
                type="number"
                defaultValue={curso.arrecadacao}
                onChange={(event) => {
                  setUpdateCurso({
                    ...updateCurso,
                    arrecadacao: parseInt(event.target.value),
                  });
                }}
              />
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
                <Button colorScheme="green" mr={3} onClick={atualizarCurso}>
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
