import { Box, Text } from "@chakra-ui/react";

export const Projects = () => {
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
      <Text fontSize="xl">Proyectos</Text>
    </Box>
  );
};
