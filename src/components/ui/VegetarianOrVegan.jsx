import { Box, Flex, Tag } from "@chakra-ui/react";

export const VegetarianOrVegan = ({ labels }) => {
  const filteredLabels = labels.filter(
    (label) => label === "Vegetarian" || label === "Vegan"
  );

  return (
    <Flex justifyContent="center">
      <Box>
        {filteredLabels.map((label, index) => (
          <Tag key={index} textTransform="uppercase" bg="purple.200" mr={2}>
            {label}
          </Tag>
        ))}
      </Box>
    </Flex>
  );
};
