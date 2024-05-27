import { Box, Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <Box p={5}>
      <Flex wrap="wrap" justify="center" mx="auto">
        {data.hits.map((hit, index) => (
          <Box key={index} p={4}>
            <RecipeCard hit={hit} clickFn={clickFn} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
