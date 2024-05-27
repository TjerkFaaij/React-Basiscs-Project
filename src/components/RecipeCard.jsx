import { Card, Image, CardBody, Stack, Heading, Text } from "@chakra-ui/react";
import { VegetarianOrVegan } from "./ui/VegetarianOrVegan";

export const RecipeCard = ({ hit, clickFn }) => {
  return (
    <Card
      borderRadius="xl"
      w="sm"
      h="30rem"
      onClick={() => clickFn(hit)}
      cursor="pointer"
      _hover={{ transform: "scale(1.01)" }}
    >
      <CardBody>
        <Image h={64} w="sm" src={hit.recipe.image} borderRadius="xl" />
        <Stack mt="6" spacing="3">
          <Text
            textAlign="center"
            as="sub"
            fontSize="md"
            color={"gray.500"}
            paddingBottom={2}
          >
            {hit.recipe.mealType}
          </Text>
          <Heading size="md">{hit.recipe.label}</Heading>
          <VegetarianOrVegan labels={hit.recipe.healthLabels} />
        </Stack>
      </CardBody>
    </Card>
  );
};
