import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
  } from '@chakra-ui/react'
import BotaoDelete from '../BotaoDelete/BotaoDelete'
import BotaoRead from '../BotaoRead/BotaoRead'

export default function Listas(){
    return(
        <>
        <TableContainer>
            <Table size='sm' variant='striped' colorScheme='008177'>
                <Thead>
                <Tr>
                    <Th>Id</Th>
                    <Th>NOME DO EVENTO</Th>
                    <Th>DATA</Th>
                    <Th>INICIO</Th>
                    {/* <Th>Tempo de Finalização</Th> */}
                    <Th>Palestrantes</Th>
                    <Th>Participantes</Th>
                    {/*<Th>Descrição</Th>
                     <Th>Observação</Th>
                    <Th>Qtd de Arrecadação</Th> */}
                    <Th>Tipo</Th>
                    <Th>Ações</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>1</Td>
                    <Td>Curso de Jogos Digitais</Td>
                    <Td>29/10/2023</Td>
                    <Td>14:00</Td>
                    <Td>Nicolas Petruci, Lucas Molitor</Td>
                    <Td>30</Td>
                    <Td>Formação de Inovadores</Td>
                    <Td>
                        <Flex w='100%' justifyContent='space-between'>

                        <BotaoRead />

                        <BotaoDelete />
                        </Flex>
                    </Td>
                </Tr>
                
                </Tbody>
                <Tfoot>
                <Tr>
                    <Th>ID</Th>
                    <Th>NOME DO EVENTO</Th>
                    <Th >DATA</Th>
                    <Th>INICIO</Th>
                    <Th>Palestrantes</Th>
                    <Th>Participantes</Th>
                    <Th>Tipo</Th>
                    <Th>Ações</Th>
                </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
        </>
    )
}