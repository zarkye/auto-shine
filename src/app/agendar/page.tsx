'use client'
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import { Button, Heading, VStack, Text, Steps, ButtonGroup, useSteps } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";

export default function Agendar() {
    const steps = useSteps({
        defaultStep: 0,
        count: items.length,
    })

    const router = useRouter();

    function handleNavigationToBack() {
        if (steps.hasPrevStep) {
            steps.goToPrevStep();
        } else {
            router.push("/")
        }
    }

    return (
        <VStack as="main">
            <VStack as="section" align="start" w="100vw" pt={28} pb={16} px={6}>
                <Button onClick={handleNavigationToBack} variant="ghost" rounded="full" mb={6}>
                    <LuArrowLeft />
                    <Text>
                        {steps.hasPrevStep ? "Voltar" : "Início"}
                    </Text>
                </Button>
                <Heading as="h1" fontSize={"4xl"}>Agendar Serviço</Heading>
                {!steps.isCompleted && <Text>Passo {steps.value + 1} de {items.length}</Text>}
                {steps.isCompleted && <Text>Completo!</Text>}
                <Steps.RootProvider value={steps}>
                    <Steps.List>
                        {items.map((step, index) => (
                            <Steps.Item key={index} index={index} title={step.title}>
                                <Steps.Indicator />
                                <Steps.Separator />
                            </Steps.Item>
                        ))}
                    </Steps.List>
                    {items.map((step, index) => (
                        <Steps.Content key={index} index={index}>
                            {step.description}
                        </Steps.Content>
                    ))}
                    

                    <ButtonGroup size="sm" variant="outline">
                        <Steps.NextTrigger asChild>
                            <Button>Next</Button>
                        </Steps.NextTrigger>
                    </ButtonGroup>
                </Steps.RootProvider>
            </VStack>
        </VStack>
    )
}

const items = [
    {
        title: "Passo 1",
        description: "Step 1 description",
    },
    {
        title: "Passo 2",
        description: "Step 2 description",
    },
    {
        title: "Passo 3",
        description: "Step 3 description",
    },
]