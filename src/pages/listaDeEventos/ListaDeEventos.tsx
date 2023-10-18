import { Flex, Box } from "@chakra-ui/react";
import ListasEventos from "../../components/ListasEventos/ListasEventos";

export default function ListaDeEventos() {
    return (
        <Flex w='100%' h='80vh' alignContent='center' justifyContent='center' mt='5vh'>
            <Box boxShadow='base' bg='white' h='90%' w='95%' border='4px solid' borderColor='blackAlpha.100' rounded='md' shadow='dark-lg' >
            <ListasEventos />
            </Box>
        </Flex>
    )
}