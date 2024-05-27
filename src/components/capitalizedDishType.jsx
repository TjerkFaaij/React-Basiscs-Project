import { Text } from "@chakra-ui/react";

export const DishType = ({ dishType }) => {
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const capitalizedDishType = dishType ? capitalizeWords(String(dishType)) : "";

  return <Text textAlign="center">Dish: {capitalizedDishType}</Text>;
};
