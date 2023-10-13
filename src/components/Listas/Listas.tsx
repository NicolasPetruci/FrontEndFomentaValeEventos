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

import { CursoData } from '../../interfaces/CursoData';
import { PalestranteData } from '../../interfaces/PalestranteData';
import { getAllPalestrante } from '../../services/palestranteService';
import { createCurso } from '../../services/eventoService';
import { useForm } from "react-hook-form";
import { TipoEvento } from '../../interfaces/TipoEvento';
import { useEffect, useState } from 'react';



export default function Listas(){

    // const [palestrante, setPalestrante] = useState<PalestranteData[]>([]);
    // const [curso, setcurso] = useState<CursoData>({
    //  nomeCurso: "",
    //  dataCurso: "",
    //  tempoInicio: "", 
    //  tempoFinalizacao: "",
    //  palestrante: [],
    //  participante: "", 
    //  tipoEvento: TipoEvento,
    //  observacao: "",
    //  arrecadacao: "",
    // });

    // const [palestranteSelecionado, setPalestranteselecionado] = useState<PalestranteData[]>([{
    //     idPalestrante: 0,
    //     nomePalestrante: "",
    //     telefonePalestrante: "",
    //     emailPalestrante: "",
    // }]);

    // const {
    //     register,
    //     formState: { errors },
    // } = useForm();

    // const converterData = (dataString: string) => {
    //     const conversorData = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/;

    //     console.log(dataString);

    //     const match = conversorData.exec(dataString);

    //     console.log (match);
    //     if (match != null) {
    //         const [wholeString, year, month, day, hours, minutes] = match;
    //         console.log(wholeString);

    //         const novaData = new Date(
    //             parseInt(year),
    //             parseInt(month) - 1,
    //             parseInt(day),
    //             parseInt(hours),
    //             parseInt(minutes)
    //         )

    //         console.log(novaData.toISOString());

    //         return novaData.toISOString();
    //     }  
    // }

    // useEffect(() => {
    //     async function buscarPalestrante() {
    //         try {
    //             await getAllPalestrante().then((palestrante) =>
    //             setPalestrante(palestrante)     
    //             )    
    //         }
    //         catch (error) {
    //             console.error('Erro ao obter palestrante', error);
    //         }
    //     }

    //     buscarPalestrante();
    // }, []);

    // const nomePalestrante = palestrante.map((palestrante) => {
    //     return {
    //         label: palestrante.nomePalestrante,
    //         value: palestrante.idPalestrante,
    //         data: palestrante,
    //     };
    // });

    // useEffect(() => {
    //     async function criarListaPalestrante(
    //     palestranteSelecionado: PalestranteData[] | PalestranteData
    //     ) {
    //         let novoPalestrante: PalestranteData;

    //         if (palestranteSelecionado instanceof Array) {
    //             novoPalestrante = palestranteSelecionado.map((palestrante: PalestranteData) =>{
    //             return{
    //                 idPalestrante: palestrante.idPalestrante,
    //                 nomePalestrante: palestrante.nomePalestrante,
    //                 telefonePalestrante: palestrante.telefonePalestrante,
    //                 emailPalestrante: palestrante.emailPalestrante,
    //             }
    //         }
    //             )
    //         } else {
    //             novoPalestrante = [
    //                 {
    //                 idPalestrante: palestrante.idPalestrante,
    //                 nomePalestrante: palestrante.nomePalestrante,
    //                 telefonePalestrante: palestrante.telefonePalestrante,
    //                 emailPalestrante: palestrante.emailPalestrante,
    //                 }
    //             ]
    //         }
    //         setcurso({
    //             ...curso,
    //             listaPalestrante: 
    //         })
    //     }
    // })


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