import { AddIcon } from "@chakra-ui/icons"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, Box, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Textarea, DrawerFooter, useDisclosure } from "@chakra-ui/react"
import React from "react"


export default function BotaoCadastro() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef(null)
  
    return (
      <>
        <Button size='xs' leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen}>
          Criar Palestrante
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Criar novo Palestrante
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='username'>Nome</FormLabel>
                  <Input
                    ref={firstField}
                    id='username'
                    placeholder='Nome do Palestrante'
                  />
                </Box>
  
                <Box>
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                    <Input
                      type='email'
                      id='url'
                      placeholder='Email do Palestrante'
                    />
                    
                  </InputGroup>
                </Box>
  
                
  
                <Box>
                  <FormLabel>Telefone</FormLabel>
                  <Input type='tel' />
                </Box>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                CANCELAR
              </Button>
              <Button colorScheme='green'>CRIAR</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }