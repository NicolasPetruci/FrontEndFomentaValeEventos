import {
    Input,
    FormLabel,
    Flex,
  } from '@chakra-ui/react'

  import Select from 'react-select'; 


export default function VisualizarEventos(){
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
    return (
        <>
                <Flex w='100%' flexDir='column' mb='10%'>
                <FormLabel mt='25px'>ID</FormLabel>
                <Input type='text' placeholder='1'></Input>

                <FormLabel mt='25px'> NOME DO EVENTO</FormLabel>
                <Input type='text' placeholder='Curso de Jogos Digitais'></Input>

                <FormLabel mt='25px'> DATA</FormLabel>
                <Input type='text' placeholder='29/10/2023'></Input>

                <FormLabel mt='25px'> INICIO</FormLabel>
                <Input type='text' placeholder='14:00'></Input>

                <FormLabel mt='25px'> FINALIZAÇÃO</FormLabel>
                <Input type='text' placeholder='18:00'></Input>

                <FormLabel mt='25px'> PALESTRANTES</FormLabel>
                <Select defaultValue={[palestrantes[0], palestrantes[1]]}  isMulti closeMenuOnSelect={false} options={palestrantes} />

                <FormLabel mt='25px'> PARTICIPANTES</FormLabel>
                <Input type='text' placeholder='30'></Input>

                <FormLabel mt='25px'> DESCRIÇÃO</FormLabel>
                <Input type='text' placeholder='Lorem Ipsum'></Input>

                <FormLabel mt='25px'> OBSERVAÇÃO</FormLabel>
                <Input type='text' placeholder=''></Input>

                <FormLabel mt='25px'> TIPO DO EVENTO</FormLabel>
                <Select defaultValue={[tipos[0]]}  closeMenuOnSelect={false} options={tipos} />

                <FormLabel mt='25px'> ARRECADAÇÃO</FormLabel>
                <Input type='text' placeholder='20'></Input>
                </Flex>
        </>
    )
}