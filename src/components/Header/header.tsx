import { HStack,
  Link as ChakraLink,
  Text, Icon, Button, VStack, Image as ChakraImage,
  Heading,
  Flex, } from "@chakra-ui/react";
import NextLink from "next/link";
import { LuCar } from "react-icons/lu";

export default function Header(){
    return (
        <HStack as="header" position={"fixed"} left={0} right={0} top={0} zIndex={50} bg="blackAlpha.800">

        <HStack as="nav" justify={"space-between"} px={8} py={4} w="full" alignItems={"center"}>
          <ChakraLink colorPalette={"yellow"} flexDirection={"row"} asChild alignItems={"center"}>
            <NextLink href="/" style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <Icon height={7} width={7}>
                <LuCar />
              </Icon>
              <Text fontSize="xl" fontWeight={"bold"}>AutoShine</Text>
            </NextLink>
          </ChakraLink>

          <HStack alignItems={"center"} gap={8}>
            <ChakraLink asChild>
              <NextLink href="/">
                <Text>Início</Text>
              </NextLink>
            </ChakraLink>
            <ChakraLink asChild>
              <NextLink href="/#servicos">
                <Text>Serviços</Text>
              </NextLink>
            </ChakraLink>
            <ChakraLink asChild>
              <NextLink href="/agendar">
                <Text>Agendar</Text>
              </NextLink>
            </ChakraLink>
            <ChakraLink asChild>
              <NextLink href="/login">
                <Button variant="outline" borderColor="white" _hover={{ bg: "white", color: "black" }} rounded={"xl"}>Acessar</Button>
              </NextLink>
            </ChakraLink>

          </HStack>

        </HStack>

      </HStack>
    )
}