import { HStack,
  Link as ChakraLink,
  Text, Icon, Button, VStack, Image as ChakraImage,
  Heading,
  Flex, } from "@chakra-ui/react";
import NextLink from "next/link";
import { LuCar } from "react-icons/lu";

export default function Footer(){
    return (
        <VStack as="footer" borderTopWidth={1} py={12}>
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
        <Text fontSize={"sm"} color="whiteAlpha.700">@ 2026 AutoShine Estética Automobilística. Todos os direitos reservados.</Text>
      </VStack>
    )
}