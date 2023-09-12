import { Flex, Box, FormControl, Input, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button } from '@chakra-ui/react'
import BotaoCadastro from '../../components/BotaoCadastro/BotaoCadastro'
import Select from 'react-select';


export const opcoes = [
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




export default function Cadastro() {
    return (
        <Flex w='100%' h='80vh' alignItems='center' justifyContent='center' mt='5vh' mb='5vh'>
            <Box boxShadow='base' bg='white' w='75%' border='4px solid' borderColor='blackAlpha.100' rounded='md' shadow='dark-lg' >
                <Flex w='100%' h='65vh' flexDir='column'>
                    <Flex w='100%' marginTop='5vh' justifyContent='space-around'>
                    <FormControl w='40%' isRequired>
                        <FormLabel>Nome do Evento</FormLabel>
                        <Input type='text' />
                    </FormControl>

                    <FormControl w='30%' isRequired>
                        <Flex flexDir='row'>
                            <FormLabel>Palestrante</FormLabel>
                            <BotaoCadastro />
                        </Flex>
                        <Select placeholder='Palestrante Disponível' isMulti closeMenuOnSelect={false} options={opcoes} />
                    </FormControl>
                    </Flex>

                    <Flex w='100%' marginTop='3vh' justifyContent='space-evenly'>

                    <FormControl w='30%' isRequired>
                        <FormLabel>Data do Curso</FormLabel>
                        <Input type='date' />
                    </FormControl>

                    <FormControl w='20%' isRequired>
                        <FormLabel>Inicio</FormLabel>
                        <Input type='time' />
                    </FormControl>


                    <FormControl w='20%' isRequired>
                        <FormLabel>Final</FormLabel>
                        <Input type='time' />
                    </FormControl>
                    </Flex>

                    <Flex w='100%' marginTop='3vh' justifyContent='space-around'>
                    <FormControl w='25%'>
                        <FormLabel>Observação</FormLabel>
                        <Input type='text' />
                    </FormControl>

                    <FormControl w='15%'>
                    <FormLabel>Participantes</FormLabel>
                        <NumberInput size='md' h='55%' defaultValue={0} min={0} max={100}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>

                    <FormControl w='15%'>
                        <FormLabel>Arrecadação</FormLabel>
                        <NumberInput size='md' h='55%' defaultValue={0} min={0} max={100}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                    </Flex>

                    <Flex w='100%' marginTop='3vh' justifyContent='space-around'>
                    <FormControl w='40%' isRequired>
                        <FormLabel>Descrição</FormLabel>
                        <Input type='text' />
                    </FormControl>

                    <FormControl w='30%' isRequired>
                        <FormLabel>Tipo do Evento</FormLabel>
                        <Select placeholder='Selecione uma Opção' options={tipos} />
                    </FormControl>
                    </Flex>
                
                </Flex>

                <Flex w='20%' mb='3vh' ml='40%' flexDir='row' justifyContent='space-around'>
                    <Button colorScheme='green' w='40%'>
                        CRIAR
                    </Button>

                    <Button colorScheme='red' w='50%'>
                        LIMPAR
                    </Button>
                </Flex>
            </Box>

        </Flex>
    )
}