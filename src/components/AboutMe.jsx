import { Box, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";

// Componente para el título con estilos de OtherSkills
export const AboutMeTitle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Título con efecto hover */}
      <Box
        borderWidth="1px"
        borderRadius="md"
        padding={4}
        textAlign="center"
        _hover={{ bg: "gray.200" }}
        transition="background-color 0.2s"
        cursor="pointer"
        onClick={onOpen} // Abrir modal al hacer clic
      >
        <Text fontSize="xl">Sobre Mí</Text>
      </Box>

      {/* Modal con contenido */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sobre Mí</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Aquí se muestra el contenido al abrir el modal */}
            <AboutMeContent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

// Componente para el contenido dentro del modal
export const AboutMeContent = () => {
  return (
    <Box mt={4} position="relative">
      <Box
        border="1px solid black"
        borderRadius="md"
        padding={8}
        textAlign="center"
        maxWidth="400px"
        margin="0 auto"
        position="relative"
      >
        {/* Comilla superior izquierda */}
        <Box
          position="absolute"
          top="10px" /* Ajuste dentro del borde */
          left="10px" /* Ajuste dentro del borde */
          fontSize="4xl"
          fontWeight="bold"
          color="gray.400"
        >
          “
        </Box>

        {/* Texto del contenido */}
        <Text fontSize="lg">
          Soy un desarrollador apasionado por la tecnología y el aprendizaje continuo. Me encanta resolver problemas y crear soluciones eficientes a través del código.
        </Text>

        {/* Comilla inferior derecha, ajustada más abajo */}
        <Box
          position="absolute"
          bottom="-20px" /* Ajuste más abajo */
          right="10px" /* Ajuste dentro del borde */
          fontSize="4xl"
          fontWeight="bold"
          color="gray.400"
        >
          ”
        </Box>
      </Box>
    </Box>
  );
};
