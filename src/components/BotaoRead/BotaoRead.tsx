import {
    Drawer,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    DrawerBody,
  } from '@chakra-ui/react'
import React from 'react'
import VisualizarEventos from '../VisualizarEvento/VisualizarEvento'
import VisualizarPalestrante from '../VisualizarPalestrante/VisualizarPalestrante'



export default function BotaoRead() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef(null)

    const Listas = window.location.pathname.includes('/lEventos');

    return (
      <>
        <Button ref={btnRef} colorScheme='blue' onClick={onOpen}>
          R
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
            
            <DrawerHeader>Visualização</DrawerHeader>
            <DrawerBody>
            {Listas ? (
              <VisualizarEventos />
            ) : (
              <VisualizarPalestrante />
            )}
            </DrawerBody>
            
  
            <DrawerFooter>
            <Button colorScheme='red' variant='outline' mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme='green' mr={3}>Salvar</Button>
            
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }