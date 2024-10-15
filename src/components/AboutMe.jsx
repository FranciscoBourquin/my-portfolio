import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";

export const AboutMeTitle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <>

      <Box
        borderWidth="1px"
        borderRadius="md"
        padding={4}
        textAlign="center"
        _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.600" }}
        transition="background-color 0.2s"
        cursor="pointer"
        onClick={onOpen}
      >
        <Text fontSize="xl">Sobre Mí</Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sobre Mí</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <AboutMeContent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

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

        <Box
          position="absolute"
          top="10px"
          left="10px"
          fontSize="4xl"
          fontWeight="bold"
          color="gray.400"
        >
          “
        </Box>

        <Text fontSize="lg">
          Desarrollador Full stack jr. Me especializo en el stack MERN (Mongo, Express, React, Node).
          También manejo Python y Flask.
          Aprendiendo Java.
          Siempre dispuesto a aprender algo nuevo
        </Text>

        <Box
          position="absolute"
          bottom="-20px"
          right="10px"
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
