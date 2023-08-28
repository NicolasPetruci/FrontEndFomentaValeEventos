import { Flex, Box, FormControl, Input, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button } from '@chakra-ui/react'


export default function CadastroDeEventos() {
    return (
        <Flex w='100%' h='80vh' alignItems='center' justifyContent='center' mt='5vh' mb='5vh'>
            <Box boxShadow='base' bg='white' w='75%' border='4px solid' borderColor='blackAlpha.100' rounded='md' shadow='dark-lg' >
                <Flex w='100%' h='65vh' flexDir='column'>
                    {/* Linha de Cima */}
                    <Flex w='100%' marginTop='5vh' justifyContent='space-around'>
                    <FormControl w='40%' isRequired>
                        <FormLabel>Nome do Evento</FormLabel>
                        <Input type='text' />
                    </FormControl>

                    <FormControl w='30%' isRequired>
                        <FormLabel>Palestrante</FormLabel>
                        <Input type='text' />
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
                    <FormControl w='85%' isRequired>
                        <FormLabel>Descrição</FormLabel>
                        <Input type='text' />
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