import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  const filteredHits = data.hits.filter(
    (hit) =>
      hit.recipe.label.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.length === 0 ||
        filters.every((filter) => hit.recipe.healthLabels.includes(filter)))
  );

  return (
    <Box p={5} bg="gray.400">
      <Flex alignItems="center" flexDirection="column">
        <Heading mb={4}>Winc Recipe Checker</Heading>
        <Input
          width="20%"
          placeholder="Search for recipes"
          value={searchTerm}
          onChange={handleSearchChange}
          mb={4}
          bg="white"
          _hover={{ borderColor: "gray.400" }}
        />
      </Flex>
      <Flex wrap="wrap" justify="center" mb={4}>
        <Button
          variant={filters.includes("Vegan") ? "solid" : "outline"}
          colorScheme={filters.includes("Vegan") ? "purple" : undefined}
          backgroundColor={filters.includes("Vegan") ? undefined : "white"}
          onClick={() => handleFilter("Vegan")}
          mr={2}
        >
          Vegan
        </Button>
        <Button
          variant={filters.includes("Vegetarian") ? "solid" : "outline"}
          colorScheme={filters.includes("Vegetarian") ? "purple" : undefined}
          backgroundColor={filters.includes("Vegetarian") ? undefined : "white"}
          onClick={() => handleFilter("Vegetarian")}
          mr={2}
        >
          Vegetarian
        </Button>
        <Button
          variant={filters.includes("Pescatarian") ? "solid" : "outline"}
          colorScheme={filters.includes("Pescatarian") ? "purple" : undefined}
          backgroundColor={
            filters.includes("Pescatarian") ? undefined : "white"
          }
          onClick={() => handleFilter("Pescatarian")}
        >
          Pescatarian
        </Button>
      </Flex>
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
