import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    FormLabel,
    Flex,
  } from '@chakra-ui/react'
import React from 'react'

export default function BotaoUpdate() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef(null)
  
    return (
      <>
        <Button ref={btnRef} colorScheme='green' onClick={onOpen}>
          U
        </Button>
        <Drawer
        size='lg'
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            
            <DrawerHeader>Atualização</DrawerHeader>
            <DrawerBody w='100%'>
                <Flex w='100%' flexDir='column'>
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
                <Input type='text' placeholder='Nicolas Petruci, Lucas Molitor'></Input>

                <FormLabel mt='25px'> PARTICIPANTES</FormLabel>
                <Input type='text' placeholder='30'></Input>

                <FormLabel mt='25px'> DESCRIÇÃO</FormLabel>
                <Input type='text' placeholder='Lorem Ipsum'></Input>

                <FormLabel mt='25px'> OBSERVAÇÃO</FormLabel>
                <Input type='text' placeholder=''></Input>

                <FormLabel mt='25px'> TIPO DO EVENTO</FormLabel>
                <Input type='text' placeholder='Formação de Inovadores'></Input>

                <FormLabel mt='25px'> ARRECADAÇÃO</FormLabel>
                <Input type='text' placeholder='20'></Input>
                </Flex>
            </DrawerBody>
  
            <DrawerFooter>
              <Button colorScheme='red' mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme='green'>Salvar</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }