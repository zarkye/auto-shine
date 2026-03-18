import {
  HStack,
  Link as ChakraLink,
  Text, Icon, Button, VStack, Image as ChakraImage,
  Heading,
  Flex,
  CardRoot,
  CardBody,
  CardFooter
} from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image"
import { LuArrowRight, LuCar, LuClock, LuClock1, LuSparkles, LuStar } from "react-icons/lu";
import heroCar from "../../public/assets/hero-car.jpg"
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
import { Tag } from "@/components/ui/tag";
import { BsArrowRight } from "react-icons/bs";
import { Card } from "@/components/home/card";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";


export default function Home() {

  return (
    <>
      <VStack as="main">

        <VStack
          as="section"
          position={"relative"}
          w="100vw"
          h="100vh"
          align={"start"}
          justifyContent={"center"}
        >
          <ChakraImage zIndex={0} position={"absolute"} w="100vw" h="100vh" asChild
          >
            <NextImage src={heroCar} alt="AutoShine" />
          </ChakraImage>

          <Flex position={"absolute"} zIndex={1} w="100vw" h="100vh" bgColor={"blackAlpha.500/90"} />

          <VStack zIndex={2} maxW="2xl" align="start" position={"relative"} px={6}>
            <Tag shadow="5xl" fontWeight={"medium"} h="7" rounded="full" px="4" py="2" colorPalette="yellow" startElement={<LuStar />}>Excelencia em Estética Automotiva</Tag>
            <Heading
              as="h1"
              fontSize="7xl"
              fontWeight={"bold"}
              lineHeight="shorter"
              letterSpacing="tight"
              mb="6"
            >
              Seu carro merece o <Text as="span" color="yellow.400" fontWeight={"bolder"}>melhor</Text> cuidado
            </Heading>
            <Text maxW="lg" fontSize="lg" mb={6}>
              Transformamos seu veículo com servíços premium de estética automotiva.
              Agende online e garanta o brilho que seu carro merece.
            </Text>

            <HStack >
              <Button asChild colorPalette="yellow" rounded="xl">
                <NextLink
                  href="/agendar"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <LuClock /> Agendar Agora
                </NextLink>
              </Button>
              <Button asChild rounded="xl">
                <NextLink
                  href="#servicos"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <LuArrowRight /> Ver Serviços
                </NextLink>
              </Button>
            </HStack>
          </VStack>
        </VStack>

        <VStack id="servicos" as="section" py={24} gap={16}>
          <VStack gap={4}>
            <Heading as="h2" fontWeight={"bold"} fontSize="4xl">Nossos Serviços</Heading>
            <Text maxW={"xl"} textAlign={"center"} fontSize={"lg"}>Oferecemos os melhores serviços de estética automotiva, para manter seu veículo impecável</Text>
          </VStack>

          <HStack gap={8}>
            <Card
              icon={<LuSparkles color="black" />}
              title="Polimento Premium"
              description="Restauração Completa do brilho original da pintura com técnicas profissionais"
              textFooter="R$1500,00"
            />
            <Card
              icon={<LuCar size={20} color="black" />}
              title="Vitrificação"
              description="Proteção cerâmica de longa duração que mantém seu carro impecável"
              textFooter="R$800,00"
            />
            <Card
              icon={<LuStar color="black" />}
              title="Lavagem Detalhada"
              description="Limpeza profunda de bancos, carpetes e painéis com"
              textFooter="R$300,00"
            />
            <Card
              icon={<LuStar color="black" />}
              title="Higienização Interna"
              description="Limpeza profunda de bancos, carpetes e painéis com produtos de alta qualidade"
              textFooter="R$300,00"
            />
          </HStack>

          <Button asChild colorPalette="yellow" rounded="xl">
            <NextLink
              href="/agendar"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <LuClock /> Agendar Agora
            </NextLink>
          </Button>
        </VStack>

      </VStack >

    </>
  );
}
