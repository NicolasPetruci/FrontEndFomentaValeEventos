import { Flex, Heading, Text } from '@chakra-ui/react'

export default function Home(){
    return(
        <Flex w='100%' h='70vh' alignContent='center' justifyContent='center' mt='5vh'>
            <Flex flexDir='column' >
                <Heading textAlign='center'>
                    CRUD DE EVENTOS - FOMENTA VALE
                </Heading>
                <Text mt='5vh' textAlign='justify' w='75vw'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </Flex>
        </Flex>
    )
}