import { Flex, Box } from '@chakra-ui/react'
import ListasPalestrantes from '../../components/ListasPalestrantes/ListasPalestrantes'

interface Props{
    corDoTexto?: string;
}

export default function ListaDePalestrante(props: Props){
    return(
        <Flex w='100%' h='100%' alignContent='center' justifyContent='center' mt='5vh' color={props.corDoTexto} mb='7.5%'>
            <Flex boxShadow='base' bg='white' h='100%' w='47%' border='4px solid' borderColor='blackAlpha.100' rounded='md' shadow='dark-lg' >
            <ListasPalestrantes />
            </Flex>
        </Flex>
    )
}