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
import Select from 'react-select'; 





export default function ListasEventos(){


    const palestrantes = [
        {
            value: 'teste 1', label: 'Nicolas'
        },
        {
            value: 'teste 2', label: 'Lucas'
        },
    ]
    
    const tipos = [
        {
            value: 'teste 1', label: 'FDI'
        },
        {
            value: 'teste 2', label: 'Curso'
        },
        {
            value: 'teste 3', label: 'Hackathon'
        },
    ]

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
                    <Flex w='90%'>
                        <Select defaultValue={[palestrantes[0], palestrantes[1]]}  isMulti closeMenuOnSelect={false} options={palestrantes} isDisabled />
                    </Flex>
                    <Td>30</Td>
                    <Flex w='90%'>
                        <Select defaultValue={[tipos[0]]} isMulti closeMenuOnSelect={false} options={tipos} isDisabled />
                    </Flex>
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