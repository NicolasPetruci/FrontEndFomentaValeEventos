import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
import React,  { useState } from 'react'

 export default function BotaoDelete() {
     const { isOpen, onOpen, onClose } = useDisclosure()
     const cancelRef = React.useRef(null)

//   const [palestrante, setPalestrante] = useState<PalestranteData>;
  
//   const deletarPalestrante = async (idPalestrante: string) => {
//     await deletePalestrante(idPalestrante);
//   }

    return (
      <>
        <Button colorScheme='red' onClick={onOpen}>
          D
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Deletando da Lista
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Você tem certeza? Após apagar, não será possível reverter essa mudança.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme='red'  ml={3}>
                  Deletar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }