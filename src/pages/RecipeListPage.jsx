import { Box, Flex, Input } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredHits = data.hits.filter((hit) =>
    hit.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={5} bg="gray.100">
      <Input
        placeholder="Search for recipes"
        value={searchTerm}
        onChange={handleSearchChange}
        mb={4}
      />
      <Flex wrap="wrap" justify="center" mx="auto">
        {filteredHits.map((hit, index) => (
          <Box key={index} p={4}>
            <RecipeCard hit={hit} clickFn={clickFn} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
