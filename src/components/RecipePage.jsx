import { Box, Image, Heading, Text, Button, Stack } from "@chakra-ui/react";

export const RecipePage = ({ hit, onClick }) => {
  return (
    <Box p={5} textAlign="center">
      <Heading as="h2" size="lg" mb={4}>
        Your choice: {hit.recipe.label}
      </Heading>
      <Image
        src={hit.recipe.image}
        alt={hit.recipe.label}
        width={300}
        height={300}
        borderRadius="md"
        mx="auto"
      />
      <Stack spacing={3} mt={4}>
        <Text fontSize="md">
          <strong>Yield:</strong> {hit.recipe.yield}
        </Text>
        <Text fontSize="md">
          <strong>Diet Labels:</strong> {hit.recipe.dietLabels.join(", ")}
        </Text>
        <Text fontSize="md">
          <strong>Health Labels:</strong> {hit.recipe.healthLabels.join(", ")}
        </Text>
        <Text fontSize="md">
          <strong>Cautions:</strong> {hit.recipe.cautions.join(", ")}
        </Text>
        <Button colorScheme="blue" onClick={() => onClick()}>
          Change selection
        </Button>
      </Stack>
    </Box>
  );
};
