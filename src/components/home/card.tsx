import { CardBody, CardFooter, CardRoot, Flex, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { LuSparkles } from "react-icons/lu";

interface CardProps {
    icon: ReactNode;
    title: string;
    description: string;
    textFooter: string;
}

export function Card({icon, title, description, textFooter}: CardProps){
    return (
        <CardRoot 
            w={80} 
            variant={"outline"} 
            rounded={"4xl"} 
            transition="0.2s" 
            _hover={{borderColor: "yellow.500", borderWidth: "thin", transform: "scale(1.05)",
        cursor: "pointer"}} cursor={"pointer"} bgColor={"whiteAlpha.200"}>
            <CardBody gap={2}>
                <Flex w={12} h={12} rounded="xl" align={"center"} justify={"center"} bgColor={"yellow.300"}>
                    {icon}
                </Flex>
                <Heading as="h3" fontSize="xl" fontWeight={"semibold"}>{title}</Heading>
                <Text fontSize={"sm"}>{description}</Text>
            </CardBody>
            <CardFooter>
                <Text fontWeight={"semibold"}>A partir de {textFooter}</Text>
            </CardFooter>
        </CardRoot>
    )
}