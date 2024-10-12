import { Box, Text } from "@chakra-ui/react";

export const AboutMe = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      padding={4}
      textAlign="center"
      _hover={{ bg: "gray.200" }}
      transition="background-color 0.2s"
      cursor="pointer"
    >
      <Text fontSize="xl">Sobre Mí</Text>
    </Box>
  );
};
