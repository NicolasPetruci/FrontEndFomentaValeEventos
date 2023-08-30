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
import BotaoUpdate from '../BotaoUpdate/BotaoUpdate'

export default function ListasPalestrantes(){
    return(
        <>
        <TableContainer>
            <Table size='sm' variant='striped' colorScheme='008177'>
                <Thead>
                <Tr>
                    <Th>Id</Th>
                    <Th>NOME DO PALESTRANTE</Th>
                    <Th>EMAIL</Th>
                    <Th>TELEFONE</Th>
                    <Th>Ações</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>1</Td>
                    <Td>Nicolas</Td>
                    <Td>nicolaspetrucipenga@gmail.com</Td>
                    <Td>(18)996993141</Td>
                    <Td>
                        <Flex w='75%' justifyContent='space-around'>

                        <BotaoRead />
                            
                        <BotaoUpdate />

                        <BotaoDelete />
                        </Flex>
                    </Td>
                </Tr>
                
                </Tbody>
                <Tfoot>
                <Tr>
                <Th>Id</Th>
                    <Th>NOME DO PALESTRANTE</Th>
                    <Th>EMAIL</Th>
                    <Th>TELEFONE</Th>
                    <Th>Ações</Th>
                </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
        </>
    )
}