import { Flex, Box } from '@chakra-ui/react'
import ListasPalestrantes from '../../components/ListasPalestrantes/ListasPalestrantes'

export default function ListaDePalestrante(){
    return(
        <Flex w='100%' h='70vh' alignContent='center' justifyContent='center' mt='5vh'>
            <Box boxShadow='base' bg='white' h='90%' w='95%' border='4px solid' borderColor='blackAlpha.100' rounded='md' shadow='dark-lg' >
            <ListasPalestrantes />
            </Box>
        </Flex>
    )
}