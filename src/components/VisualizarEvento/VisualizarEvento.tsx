import { Input, FormLabel, Flex } from "@chakra-ui/react";

import Select from "react-select";

export default function VisualizarEventos() {
  return (
    <>
      <Flex w="100%" flexDir="column" mb="10%">
        <FormLabel mt="25px">ID</FormLabel>
        <Input type="text" placeholder="1"></Input>

        <FormLabel mt="25px"> NOME DO EVENTO</FormLabel>
        <Input type="text" placeholder="Curso de Jogos Digitais"></Input>

        <FormLabel mt="25px"> DATA</FormLabel>
        <Input type="text" placeholder="29/10/2023"></Input>

        <FormLabel mt="25px"> INICIO</FormLabel>
        <Input type="text" placeholder="14:00"></Input>

        <FormLabel mt="25px"> FINALIZAÇÃO</FormLabel>
        <Input type="text" placeholder="18:00"></Input>

        <FormLabel mt="25px"> PALESTRANTES</FormLabel>
        <Select defaultValue={} isMulti closeMenuOnSelect={false} options={} />

        <FormLabel mt="25px"> PARTICIPANTES</FormLabel>
        <Input type="text" placeholder="30"></Input>

        <FormLabel mt="25px"> DESCRIÇÃO</FormLabel>
        <Input type="text" placeholder="Lorem Ipsum"></Input>

        <FormLabel mt="25px"> OBSERVAÇÃO</FormLabel>
        <Input type="text" placeholder=""></Input>

        <FormLabel mt="25px"> TIPO DO EVENTO</FormLabel>
        <Select
          defaultValue={}
          closeMenuOnSelect={false}
          options={}
        />

        <FormLabel mt="25px"> ARRECADAÇÃO</FormLabel>
        <Input type="text" placeholder="20"></Input>
      </Flex>
    </>
  );
}
