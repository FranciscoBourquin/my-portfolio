import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export const Projects = () => {
  // Define el color de fondo para el hover según el modo de color actual
  const hoverColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      padding={4}
      textAlign="center"
      _hover={{ bg: hoverColor }} // Aplicar color de fondo en hover
      transition="background-color 0.2s"
      cursor="pointer"
    >
      <Text fontSize="xl">Proyectos</Text>
    </Box>
  );
};
