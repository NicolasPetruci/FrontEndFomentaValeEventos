import { Flex, Grid, GridItem, Link, Text, } from "@chakra-ui/react"

interface Props {
    bgColor?: string;
}

export default function Navbar(props: Props) {
    return(
        <>
        <Flex w='100%' h='10vh' bg={props.bgColor || 'transparent'} color='white'>
            <Grid w="100vw" h="60px" bgColor="" alignContent="center">
                <GridItem display="flex" justifyContent="space-around" alignItems='center'>
                    {/*Home*/}
                    <Flex>
                        <Link href='/'>
                            <Text> Home </Text>
                        </Link>
                    </Flex>
                    {/*Cadastro de Eventos */}
                    <Flex>
                        <Link href='/cEventos'>
                            <Text> Cadastro de Eventos </Text>
                        </Link>
                    </Flex>
                    {/*Cadastro de Palestrantes */}
                    <Flex>
                        <Link href='/cPalestrantes'>
                            <Text> Cadastro de Palestrantes </Text>
                        </Link>
                    </Flex>
                    {/*Lista de Eventos */}
                    <Flex>
                        <Link href='/lEventos'>
                            <Text> Lista de Eventos </Text>
                        </Link>
                    </Flex>
                    {/*Lista de Palestrantes */}      
                    <Flex>
                        <Link href='/lPalestrantes'>
                            <Text> Lista de Palestrantes </Text>
                        </Link>
                    </Flex>
                </GridItem>
            </Grid>
        </Flex>
        </>
    );
    
}