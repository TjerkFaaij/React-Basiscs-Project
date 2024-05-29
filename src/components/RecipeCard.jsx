import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  Box,
} from "@chakra-ui/react";
import { VegetarianOrVegan } from "./VegetarianOrVegan.jsx";
import { Btag } from "./BasicTag.jsx";
import { DishType } from "./capitalizedDishType.jsx";

export const RecipeCard = ({ hit, clickFn }) => {
  return (
    <Card
      bg="white"
      borderRadius="xl"
      w="25rem"
      h="30rem"
      boxShadow="md"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.02)" }}
      cursor="pointer"
      onClick={() => clickFn(hit)}
    >
      <Image
        src={hit.recipe.image}
        borderTopRadius="xl"
        h="200px"
        objectFit="cover"
      />
      <CardBody>
        <Stack spacing={2}>
          <Text
            textAlign="center"
            color="gray.500"
            fontWeight="semibold"
            textTransform="uppercase"
          >
            {hit.recipe.mealType}
          </Text>
          <Heading textAlign="center" size="md">
            {hit.recipe.label}
          </Heading>
          <VegetarianOrVegan labels={hit.recipe.healthLabels} />
          <Btag labels={hit.recipe.dietLabels} bg="green.200" />
          <DishType dishType={hit.recipe.dishType}></DishType>
          {hit.recipe.cautions && hit.recipe.cautions.length > 0 && (
            <Box>
              <Text textAlign="center" fontWeight="semibold" mb={2}>
                Cautions:
              </Text>
              <Btag labels={hit.recipe.cautions} bg="red.200" />
            </Box>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
