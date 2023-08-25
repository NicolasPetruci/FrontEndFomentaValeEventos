import { Flex, Text, Link } from "@chakra-ui/react";

interface Props {
    bgColor?: string;
}

export default function Footer(props: Props){
    return(
        <Flex justifyContent='center' alignItems='center' w='100%' h='15vh' bg={props.bgColor || ' transparent '}>
            <Text color='white'>
                By <Link href='https://www.linkedin.com/in/nicolasppenga/'>Nicolas Petruci</Link> for <Link href='https://www.linkedin.com/company/51721322/admin/feed/posts/'>Fomenta Vale</Link>
            </Text>
        </Flex>
    )
}