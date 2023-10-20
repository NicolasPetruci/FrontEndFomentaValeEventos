import {
  Flex,
  Box,
  FormControl,
  Input,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  useFocusEffect,
} from "@chakra-ui/react";
import BotaoCadastro from "../../components/BotaoCadastro/BotaoCadastro";
import Select from "react-select";
import { useEffect, useState } from "react";
import { PalestranteData } from "../../interfaces/PalestranteData";
import { CursoData } from "../../interfaces/CursoData";
import { useForm } from "react-hook-form";
import { getAllPalestrante } from "../../services/palestranteService";
import { createCurso } from "../../services/eventoService";

export default function Cadastro() {
  const [palestrante, setPalestrantes] = useState<PalestranteData[]>([]);
  const [curso, setCurso] = useState<CursoData>({
    nomeCurso: "",
    tempoInicio: "",
    tempoFinalizacao: "",
    palestrante: [],
    participante: 0,
    descricaoCurso: "",
    observacao: "",
    arrecadacao: 0,
  });

  const [palestranteSelecionado, setPalestranteSelecionado] = useState<
    PalestranteData[]
  >([
    {
      idPalestrante: 0,
      nomePalestrante: "",
      telefonePalestrante: "",
      emailPalestrante: "",
    },
  ]);

  const {
    register,
    formState: { errors },
  } = useForm();

  const converterData = (dataString: string) => {
    const conversorData = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/;

    console.log(dataString);

    const match = conversorData.exec(dataString);

    console.log(match);
    if (match != null) {
      const [wholeString, year, month, day, hours, minutes] = match;
      console.log(wholeString);

      const novaData = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day),
        parseInt(hours),
        parseInt(minutes)
      );

      console.log(novaData.toISOString());

      return novaData.toISOString();
    }
  };

  useEffect(() => {
    async function buscarParticipantes() {
      try {
        await getAllPalestrante().then((palestrante) =>
          setPalestrantes(palestrante)
        );
      } catch (error) {
        console.error("Erro ao obter os participantes", error);
      }
    }
    buscarParticipantes();
  }, []);

  const nomePalestrantes = palestrante.map((palestrante) => {
    return {
      label: palestrante.nomePalestrante,
      value: palestrante.idPalestrante,
      data: palestrante,
    };
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
  }, [curso, palestranteSelecionado]);

  const criarCurso = (event: any) => {
    event.preventDefault();

    try {
      createCurso(curso).then((curso) => console.log("Evento Criado", curso));

      console.log(curso.tempoInicio);
    } catch (error) {
      console.log("Erro ao criar evento", error);
    }

    console.log(curso, "Evento Criado");
  };

  return (
    <Flex
      w="100%"
      h="80vh"
      alignItems="center"
      justifyContent="center"
      mt="5vh"
      mb="5vh"
    >
      <Box
        boxShadow="base"
        bg="white"
        w="75%"
        border="4px solid"
        borderColor="blackAlpha.100"
        rounded="md"
        shadow="dark-lg"
      >
        <Flex w="100%" h="65vh" flexDir="column">
          <Flex w="100%" marginTop="5vh" justifyContent="space-around">
            <FormControl w="40%" isRequired>
              <FormLabel>Nome do Evento</FormLabel>
              <Input
                type="text"
                {...register("nomeCurso", { required: true })}
                onChange={(event) => {
                  setCurso({
                    ...curso,
                    nomeCurso: event.target.value,
                  });
                }}
              />
              {errors.nomeCurso && "Nome da Reunião é Obrigatório"}
            </FormControl>

            <FormControl w="30%" isRequired>
              <Flex flexDir="row">
                <FormLabel>Palestrante</FormLabel>
                <BotaoCadastro />
              </Flex>
              <Select
                placeholder="Palestrante Disponível"
                isMulti
                closeMenuOnSelect={false}
                options={nomePalestrantes}
                {...register("palestrante", { required: true })}
                onChange={(event) => {
                  setPalestranteSelecionado(
                    event.map((palestrante) => palestrante.data)
                  );
                }}
              />
              {errors.palestrante && "Palestrante são obrigatórios"}
            </FormControl>
          </Flex>

          <Flex w="100%" marginTop="3vh" justifyContent="space-evenly">
            {/* <FormControl w='30%' isRequired>
                        <FormLabel>Data do Evento</FormLabel>
                        <Input type='date' {...register("dataCurso")} 
                        onChange={(event) => {
                            const { target } = event
                            console.log(target.value);
                            const dataConvertida = converterData(event.target.value);
                            setCurso({
                                ...curso,
                                dataCurso: dataConvertida,
                            })
                        }
                        
                        }/>
                        {errors.dataCurso && "A Data é necessária."}
                    </FormControl>  */}

            <FormControl w="20%" isRequired>
              <FormLabel>Inicio do Evento</FormLabel>
              <Input
                type="datetime-local"
                {...register("tempoInicio")}
                onChange={(event) => {
                  const dataConvertida = converterData(event.target.value);
                  setCurso({
                    ...curso,
                    tempoInicio: dataConvertida,
                  });
                }}
              />
              {errors.tempoInicio && "Inicio é necessário."}
            </FormControl>

            <FormControl w="20%" isRequired>
              <FormLabel>Fim do Evento</FormLabel>
              <Input
                type="datetime-local"
                {...register("tempoFinalizacao")}
                onChange={(event) => {
                  const dataConvertida = converterData(event.target.value);
                  console.log(dataConvertida);

                  setCurso({
                    ...curso,
                    tempoFinalizacao: dataConvertida,
                  });
                }}
              />
              {errors.tempoFinalizacao && "Finalização é necessário."}
            </FormControl>
          </Flex>

          <Flex w="100%" marginTop="3vh" justifyContent="space-around">
            <FormControl w="25%">
              <FormLabel>Observação</FormLabel>
              <Input
                type="text"
                {...register("observacao")}
                onChange={(event) => {
                  setCurso({
                    ...curso,
                    observacao: event.target.value,
                  });
                }}
              />
            </FormControl>

            <FormControl w="15%">
              <FormLabel>Participantes</FormLabel>

              <Input
                type="number"
                {...register("participante", { required: true })}
                onChange={(event) => {
                  setCurso({
                    ...curso,
                    participante: parseInt(event.target.value),
                  });
                }}
              />
            </FormControl>

            <FormControl w="15%">
              <FormLabel>Arrecadação</FormLabel>

              <Input
                {...register("arrecadacao", { required: true })}
                onChange={(event) => {
                  setCurso({
                    ...curso,
                    arrecadacao: parseInt(event.target.value),
                  });
                }}
              />
            </FormControl>
          </Flex>

          <Flex w="100%" marginTop="3vh" justifyContent="space-around">
            <FormControl w="40%" isRequired>
              <FormLabel>Descrição</FormLabel>
              <Input
                type="text"
                {...register("descricaoCurso")}
                onChange={(event) => {
                  setCurso({
                    ...curso,
                    descricaoCurso: event.target.value,
                  });
                }}
              />
            </FormControl>

            {/* <FormControl w='30%' isRequired>
                        <FormLabel>Tipo do Evento</FormLabel>
                        <Select placeholder='Selecione uma Opção' options={nomePalestrantes} {
                            ...register("palestrante", {required: true})
                        } onChange={(event) => {
                        setPalestranteSelecionado(event.map((palestrante) => palestrante.data))}} />
                        {errors.palestrante && "Palestrante são obrigatórios"}
                    </FormControl> */}
          </Flex>
        </Flex>

        <Flex
          w="20%"
          mb="3vh"
          ml="40%"
          flexDir="row"
          justifyContent="space-around"
        >
          <Button colorScheme="green" w="40%" onClick={criarCurso}>
            CRIAR
          </Button>

          <Button colorScheme="red" w="50%">
            LIMPAR
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
