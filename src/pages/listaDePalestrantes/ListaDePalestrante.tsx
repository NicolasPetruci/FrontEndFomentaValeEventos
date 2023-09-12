import { Flex, Box } from '@chakra-ui/react'
import ListasPalestrantes from '../../components/ListasPalestrantes/ListasPalestrantes'

interface Props{
    corDoTexto?: string;
}

export default function ListaDePalestrante(props: Props){
    return(
        <Flex w='100%' h='70vh' alignContent='center' justifyContent='center' mt='5vh' color={props.corDoTexto}>
            <Box boxShadow='base' bg='white' h='90%' w='95%' border='4px solid' borderColor='blackAlpha.100' rounded='md' shadow='dark-lg' >
            <ListasPalestrantes />
            </Box>
        </Flex>
    )
}