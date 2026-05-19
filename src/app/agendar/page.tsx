"use client"

import { Button, DatePicker, Field, Heading, HStack, Input, Portal, RadioCard, Separator, SimpleGrid, Steps, Text, useSteps, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { LuArrowLeft, LuCalendar } from "react-icons/lu";

import { motion } from "motion/react";
import { ServiceCardItem } from "@/components/ui/service-card-item";
import { useState } from "react";
import { dayjs } from "../../lib/dayjs";

interface Date {
	year: number;
	month: number;
	day: number;
}

export default function Agendar() {
	const steps = useSteps({
		defaultStep: 0,
		count: items.length,
	});

	const router = useRouter();

	function handleGoToPrevStep() {
		if (steps.hasPrevStep) {
			steps.goToPrevStep();
		} else {
			router.push("/");
		}
	}

	const [value, setValue] = useState<string | null>(null)
	const [selectHour, setSelectHour] = useState<string | null>(null)
	const availableHours = ["8", "9", "10", "11", "13", "14", "15", "16", "17"]

	const isDateUnavailable = (date: Date) => {
		const selectedDate = dayjs.tz(`${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`, "America/Sao_Paulo").startOf("day");
		const today = dayjs();
		const isSunday = selectedDate.day() === 0;
		const isHourLegal = selectHour ? availableHours.includes(selectHour) : true
		return isSunday || selectedDate.isBefore(today, "day");

	}

	return (
		<VStack as="main" gap={0}>
			<VStack w="100%" maxW={1440} mx="auto" as="section" align="start" pt={28} pb={16} px={6}>
				<Button onClick={handleGoToPrevStep} variant="ghost" rounded="lg" mb={6}>
					<LuArrowLeft />
					{steps.hasPrevStep ? "Voltar" : "Inicio"}
				</Button>

				<Heading as="h1" fontSize="4xl" mb={2}>Agendar Serviço</Heading>

				{!steps.isCompleted && <Text mb={8}>Passo {steps.value + 1} de {steps.count}</Text>}

				{steps.isCompleted && <Text mb={8}>Completo!</Text>}

				<Steps.RootProvider value={steps} gap={10}>
					<Steps.List gap={4}>
						{items.map((step, index) => (
							<Steps.Item flex={1} key={index} index={index} title={step.title}>
								<Separator w="100%" borderColor={steps.value >= index ? "yellow.500" : "white"} borderWidth={2} />
							</Steps.Item>
						))}
					</Steps.List>

					{items.map((step, index) => (
						<Steps.Content key={index} index={index}>
							{index === 0 && (
								<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
									<Heading as="h2" fontSize="2xl" fontWeight="semibold" color="yellow.300" mb={4}>Escolha o Serviço</Heading>

									<RadioCard.Root value={value} onValueChange={(e) => setValue(e.value)} gapY={4}>
										<ServiceCardItem value="polimento-premium" name="Polimento Premium" duration="3h" price="1200,00" />

										<ServiceCardItem value="vitrificacao" name="Vitrificação" duration="5h" price="800,00" />

										<ServiceCardItem value="lavagem-detalhada" name="Lavagem Detalhada" duration="1h30" price="120,00" />

										<ServiceCardItem value="higienizacao-interna" name="Higienização Interna" duration="2h" price="250,00" />
									</RadioCard.Root>
								</motion.div>
							)}

							{index === 1 && (
								<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
									<Heading as="h2" fontSize="2xl" fontWeight="semibold" color="yellow.300" mb={4}>Data e Horário</Heading>

									<Field.Root>
										<Field.Label color="yellow.300" >Data</Field.Label>
										<Field.Context>
											{(ctx) => (
												<DatePicker.Root
													invalid={ctx.invalid}
													ids={{ label: () => ctx.ids.label, input: () => ctx.ids.control }}
													locale={"pt-BR"}
													size="lg"
													timeZone="America/Sao_Paulo"
													isDateUnavailable={isDateUnavailable}

												>

													<DatePicker.Control>
														<DatePicker.Input rounded="lg" />
														<DatePicker.IndicatorGroup>
															<DatePicker.Trigger>
																<LuCalendar />
															</DatePicker.Trigger>

														</DatePicker.IndicatorGroup>
													</DatePicker.Control>
													<Portal>
														<DatePicker.Positioner>
															<DatePicker.Content>
																<DatePicker.View view="day">
																	<DatePicker.Header />
																	<DatePicker.DayTable />
																</DatePicker.View>
																<DatePicker.View view="month">
																	<DatePicker.Header />
																	<DatePicker.MonthTable />
																</DatePicker.View>
																<DatePicker.View view="year">
																	<DatePicker.Header />
																	<DatePicker.YearTable />
																</DatePicker.View>
															</DatePicker.Content>
														</DatePicker.Positioner>
													</Portal>
												</DatePicker.Root>
											)}
										</Field.Context>
										<Field.ErrorText>Date of birth is required</Field.ErrorText>
									</Field.Root>
									<Field.Root mt={5}>
										<Field.Label>Horário</Field.Label>
										<RadioCard.Root value={selectHour} onValueChange={(e) => setSelectHour(e.value)}
											orientation="horizontal" colorPalette="yellow" variant="outline" size="lg">
											<HStack gap={3} flexWrap="wrap">
												{availableHours.map(hour => (
													<RadioCard.Item
														key={hour} 
														value={hour} 
														w="auto" 
														rounded="lg" 
														minW={20} 
														justifyContent="center" 
														alignItems="center" 
														_hover={{transform: "scale(1.05)"}}
														_
														>
														<RadioCard.ItemHiddenInput />
														<RadioCard.ItemControl px={5} py={3}>
															<RadioCard.ItemContent>
																<RadioCard.ItemText>{hour}:00</RadioCard.ItemText>
															</RadioCard.ItemContent>
														</RadioCard.ItemControl>
													</RadioCard.Item>
												))

												}
											</HStack>
										</RadioCard.Root>

									</Field.Root>
								</motion.div>
							)}

							{index === 2 && (
								<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
									<Heading as="h2" fontSize="2xl" fontWeight="semibold" color="yellow.300" mb={4}>Seus Dados</Heading>
											<SimpleGrid columns={2} gap={4}>
												<Field.Root>
													<Field.Label>Nome Completo</Field.Label>
													<Input size="lg"/>
												</Field.Root>
													
													<Field.Root>
														<Field.Label>Telefone</Field.Label>
													<Input size="lg"/>
													</Field.Root>
													<Field.Root>
														<Field.Label>Modelo do carro</Field.Label>
													<Input size="lg"/>
													</Field.Root>
													<Field.Root>
														<Field.Label>Placa</Field.Label>
														<Input size="lg"/>
													</Field.Root>
											</SimpleGrid>
								</motion.div>
							)}
						</Steps.Content>
					))}

					<Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

					<HStack w="100%" justify="end">
						<Steps.NextTrigger asChild>
							<Button size="lg" colorPalette="yellow" rounded="lg" disabled={!value}>Continuar</Button>
						</Steps.NextTrigger>
					</HStack>
				</Steps.RootProvider>
			</VStack>
		</VStack>
	)
}

const items = [
	{
		title: "Step 1",
		description: "Step 1 description",
	},
	{
		title: "Step 2",
		description: "Step 2 description",
	},
	{
		title: "Step 3",
		description: "Step 3 description",
	},
]