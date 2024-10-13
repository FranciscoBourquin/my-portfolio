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
  useColorModeValue,
  Progress,
  Image,
} from "@chakra-ui/react";

export const OtherSkillsTitle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hoverColor = useColorModeValue("gray.200", "gray.600");

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="md"
        padding={4}
        textAlign="center"
        _hover={{ bg: hoverColor }}
        transition="background-color 0.2s"
        cursor="pointer"
        onClick={onOpen}
      >
        <Text fontSize="xl">Otras Habilidades</Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Otras Habilidades</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <OtherSkillsContent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const OtherSkillsContent = () => {
  return (
    <Box mt={4} textAlign="center">

      <Text fontSize="2xl" mb={4}>Idiomas</Text>

      <Box mb={4}>
        <Text fontSize="lg" mb={2}>Español - Nativo</Text>
        <Image
          src="/argentina.png"
          alt="Bandera de Argentina"
          boxSize="40px"
          display="inline-block"
          mr={2}
        />
        <Progress value={100} size="lg" colorScheme="green" />
      </Box>

      <Box mb={4}>
        <Text fontSize="lg" mb={2}>Inglés - C1 Avanzado</Text>
        <Image
          src="/uk.png"
          alt="Bandera de Reino Unido"
          boxSize="40px"
          display="inline-block"
          mr={2}
        />
        <Progress value={80} size="lg" colorScheme="blue" />
      </Box>

      <Box mb={4}>
        <Text fontSize="lg" mb={2}>Portugués - B2 Intermedio</Text>
        <Image
          src="/brazil.png"
          alt="Bandera de Brasil"
          boxSize="40px"
          display="inline-block"
          mr={2}
        />
        <Progress value={60} size="lg" colorScheme="yellow" />
      </Box>
    </Box>
  );
};
