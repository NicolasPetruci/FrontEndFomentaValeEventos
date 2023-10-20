import { AddIcon } from "@chakra-ui/icons"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, Box, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Textarea, DrawerFooter, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"

import { PalestranteData } from "../../interfaces/PalestranteData"
import { createPalestrante } from "../../services/palestranteService"

export default function BotaoCadastro() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef(null)

    const [novoPalestrante, setNovoPalestrante] = useState<PalestranteData>({
      nomePalestrante: "",
      telefonePalestrante: "",
      emailPalestrante: "",
    })

    const criarPalestrante = (event: any) => {
      event.preventDefault()

      createPalestrante(novoPalestrante)
        .then(() => {
          console.log('Palestrante criado com sucesso', novoPalestrante)
        })
        .catch((error) => {
          console.log(novoPalestrante);
          console.log('Erro ao criar palestrante', error);
        })
        
    }

  
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
                    onChange={(event) => {
                      setNovoPalestrante({
                        ...novoPalestrante,
                        nomePalestrante: event.target.value,
                      });
                    }}
                  />
                </Box>
  
                <Box>
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                    <Input
                      type='email'
                      id='url'
                      placeholder='Email do Palestrante'
                      onChange={(event) => {
                        setNovoPalestrante({
                          ...novoPalestrante,
                          emailPalestrante: event.target.value,
                        });
                      }}
                    />
                    
                  </InputGroup>
                </Box>
  
                
  
                <Box>
                  <FormLabel>Telefone</FormLabel>
                  <Input type='tel' onChange={(event) => {
                      setNovoPalestrante({
                        ...novoPalestrante,
                        telefonePalestrante: event.target.value,
                      });
                    }}/>
                </Box>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                CANCELAR
              </Button>
              <Button colorScheme='green' type="submit"
            onClick={criarPalestrante}>CRIAR</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }