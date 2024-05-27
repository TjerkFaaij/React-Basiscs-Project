import { Box, Flex, Tag } from "@chakra-ui/react";

export const Btag = ({ labels, bg }) => {
  if (!labels || labels.length === 0) {
    return null;
  }
  return (
    <Flex justifyContent="center">
      <Box>
        <Tag textTransform="uppercase" mr={2} bg={bg}>
          {labels}
        </Tag>
      </Box>
    </Flex>
  );
};
