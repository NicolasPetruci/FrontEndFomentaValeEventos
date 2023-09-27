import {
    Input,
    FormLabel,
    Flex,
  } from '@chakra-ui/react'

export default function ListaPalestrante(){
    return(
        <>
        
                <Flex w='100%' flexDir='column'>
                <FormLabel mt='25px'>ID</FormLabel>
                <Input type='number' placeholder={''}></Input>

                <FormLabel mt='25px'> NOME DO PALESTRANTE</FormLabel>
                <Input type='text' placeholder={''}></Input>

                <FormLabel mt='25px'> EMAIL DO PALESTRANTE</FormLabel>
                <Input type='email' placeholder={''}></Input>

                <FormLabel mt='25px'> TELEFONE DO PALESTRANTE</FormLabel>
                <Input  type='number' placeholder={''}></Input>

                </Flex>
            
        </>
    )
}