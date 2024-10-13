import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const AboutMe = () => {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4} position="relative" textAlign="center">
      {/* Comilla de apertura: arriba a la izquierda */}
      <Text fontSize="6xl" position="absolute" top="-20px" left="10px">
        “
      </Text>

      {/* Texto central */}
      <Text fontSize="lg" mt={4} mb={8}>
        Aquí va la descripción de Sobre Mí con comillas ajustadas en las esquinas.
      </Text>

      {/* Comilla de cierre: abajo a la derecha (ajustada más abajo) */}
      <Text fontSize="6xl" position="absolute" bottom="-40px" right="10px">
        ”
      </Text>
    </Box>
  );
};
