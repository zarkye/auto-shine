import { RadioCard, RadioCardItemProps, Text, VStack } from "@chakra-ui/react";

interface ServiceCardItemProps extends RadioCardItemProps {
  name: string;
  duration: string;
  price: string;
}

export function ServiceCardItem({ id, name, duration, price, ...rest }: ServiceCardItemProps) {
  return (
    <RadioCard.Item
      {...rest}
      p={5}
      rounded="xl"
      _checked={{
        borderColor: "yellow.500",
        shadowColor: "yellow.500",
      }}
      _hover={{
        borderColor: "yellow.500",
        shadowColor: "yellow.500",

        bg: "gray.950",
      }}
      transition="all 0.2s"
    >
      <RadioCard.ItemHiddenInput />
      <RadioCard.ItemControl justifyContent="space-between">
        <VStack alignItems="start">
          <RadioCard.ItemText as="h3" fontSize="lg" fontWeight="semibold" color="yellow.300">{name}</RadioCard.ItemText>
          <RadioCard.ItemDescription color="fg.muted" fontSize="sm">
            Duração: {duration}
          </RadioCard.ItemDescription>
        </VStack>

        <Text color="yellow.300" fontWeight="bold">R$ {price}</Text>
      </RadioCard.ItemControl>
    </RadioCard.Item>
  )
}