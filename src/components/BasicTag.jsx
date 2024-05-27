import { Box, Flex, Tag } from "@chakra-ui/react";

export const Btag = ({ labels, bg }) => {
  if (!labels || labels.length === 0) {
    return null;
  }

  return (
    <Flex justifyContent="center">
      <Box>
        {labels.map((label, index) => (
          <Tag key={index} textTransform="uppercase" mr={2} bg={bg} mb={2}>
            {label}
          </Tag>
        ))}
      </Box>
    </Flex>
  );
};
