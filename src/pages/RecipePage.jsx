import {
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Btag } from "../components/BasicTag";

export const RecipePage = ({ hit, onClick }) => {
  const {
    label,
    image,
    mealType,
    totalTime,
    yield: servings,
    ingredientLines,
    healthLabels,
    dietLabels,
    cautions,
  } = hit.recipe;

  return (
    <Box p={5} bg="gray.50" minH="100vh">
      <Grid
        templateRows="auto 1fr"
        templateColumns="1fr 1fr"
        gap={6}
        maxW="1200px"
        mx="auto"
        bg="white"
        p={6}
        borderRadius="md"
        boxShadow="md"
      >
        <GridItem colSpan={2}>
          <Button onClick={() => onClick()}>&lt; Back</Button>
        </GridItem>

        <GridItem colSpan={2}>
          <Box w="100%" h="300px" overflow="hidden" borderRadius="md">
            <Image
              src={image}
              alt={label}
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
        </GridItem>

        <GridItem>
          <Text textTransform="uppercase" color="gray.500" fontWeight="bold">
            {mealType}
          </Text>
          <Heading as="h1" size="lg" mt={2} mb={4}>
            {label}
          </Heading>
          <Text fontSize="md" mb={2}>
            <strong>Total cooking time:</strong> {totalTime} Minutes
          </Text>
          <Text fontSize="md" mb={2}>
            <strong>Servings:</strong> {servings}
          </Text>

          <Heading as="h3" size="md" mt={4} mb={2}>
            Ingredients:
          </Heading>
          <Stack spacing={1}>
            {ingredientLines.map((ingredient, index) => (
              <Text key={index}>{ingredient}</Text>
            ))}
          </Stack>
        </GridItem>

        <GridItem>
          <Heading as="h3" size="md" mb={2}>
            Health labels:
          </Heading>
          <Stack spacing={2} direction="row" flexWrap="wrap">
            <Btag labels={healthLabels} bg="purple.200" />
          </Stack>

          {dietLabels && dietLabels.length > 0 && (
            <>
              <Heading as="h3" size="md" mt={4} mb={2}>
                Diet:
              </Heading>
              <Stack spacing={2} direction="row" flexWrap="wrap">
                <Btag labels={dietLabels} bg="green.200" />
              </Stack>
            </>
          )}

          {cautions && cautions.length > 0 && (
            <>
              <Heading as="h3" size="md" mt={4} mb={2}>
                Cautions:
              </Heading>
              <Stack spacing={2} direction="row" flexWrap="wrap">
                <Btag labels={cautions} bg="red.200" />
              </Stack>
            </>
          )}
          <Heading as="h3" size="md" mt={4} mb={2}>
            Total Nutrients:
          </Heading>
          <Stack spacing={1}>
            {Object.entries(hit.recipe.totalNutrients)
              .filter(
                ([key]) =>
                  key === "ENERC_KCAL" ||
                  key === "PROCNT" ||
                  key === "FAT" ||
                  key === "CHOCDF" ||
                  key === "CHOLE" ||
                  key === "NA"
              )
              .map(([key, nutrient]) => (
                <Text key={key}>
                  <strong>{nutrient.label}:</strong>{" "}
                  {nutrient.quantity.toFixed(0)} {nutrient.unit}
                </Text>
              ))}
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};
