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

export const AboutMeTitle = ({ isEnglish }) => {
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
        <Text fontSize="xl">
          {isEnglish ? "About Me" : "Sobre Mí"}
        </Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isEnglish ? "About Me" : "Sobre Mí"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AboutMeContent isEnglish={isEnglish} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const AboutMeContent = ({ isEnglish }) => {
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
        <Text fontSize="lg">
          {isEnglish
            ? "Junior Full stack developer specializing in the MERN stack (Mongo, Express, React, Node). Also proficient in Python and Flask. Learning Java. Always eager to learn something new."
            : "Desarrollador Full stack jr. Me especializo en el stack MERN (Mongo, Express, React, Node). También manejo Python y Flask. Aprendiendo Java. Siempre dispuesto a aprender algo nuevo."}
        </Text>
      </Box>
    </Box>
  );
};
