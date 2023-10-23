import { Flex } from "@chakra-ui/react";
import ListasEventos from "../../components/ListasEventos/ListasEventos";

export default function ListaDeEventos() {
  return (
    <Flex
      w="100%"
      h="100%"
      alignContent="center"
      justifyContent="center"
      mt="5vh"
      mb="7.5%"
    >
      <Flex
        boxShadow="base"
        bg="white"
        h="100%"
        w="55%"
        border="4px solid"
        borderColor="blackAlpha.100"
        rounded="md"
        shadow="dark-lg"
      >
        <ListasEventos />
      </Flex>
    </Flex>
  );
}
