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
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

export const OtherSkillsTitle = ({ isEnglish }) => {
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
        <Text fontSize="xl">{isEnglish ? "Other Skills" : "Otras Habilidades"}</Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isEnglish ? "Other Skills" : "Otras Habilidades"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <OtherSkillsContent isEnglish={isEnglish} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

OtherSkillsTitle.propTypes = {
  isEnglish: PropTypes.bool.isRequired,
};

export const OtherSkillsContent = ({ isEnglish }) => {
  return (
    <Box mt={4} textAlign="center">
      <Text fontSize="2xl" mb={4}>{isEnglish ? "Languages" : "Idiomas"}</Text>

      <Box mb={4}>
        <Text fontSize="lg" mb={2}>
          {isEnglish ? "Spanish - Native" : "Español - Nativo"}
        </Text>
        <Image
          src="/argentina.png"
          alt={isEnglish ? "Argentina Flag" : "Bandera de Argentina"}
          boxSize="40px"
          display="inline-block"
          mr={2}
        />
        <Progress value={100} size="lg" colorScheme="green" />
      </Box>

      <Box mb={4}>
        <Text fontSize="lg" mb={2}>
          {isEnglish ? "English - C1 Advanced" : "Inglés - C1 Avanzado"}
        </Text>
        <Image
          src="/uk.png"
          alt={isEnglish ? "UK Flag" : "Bandera de Reino Unido"}
          boxSize="40px"
          display="inline-block"
          mr={2}
        />
        <Progress value={80} size="lg" colorScheme="blue" />
      </Box>

      <Box mb={4}>
        <Text fontSize="lg" mb={2}>
          {isEnglish ? "Portuguese - B2 Intermediate" : "Portugués - B2 Intermedio"}
        </Text>
        <Image
          src="/brazil.png"
          alt={isEnglish ? "Brazil Flag" : "Bandera de Brasil"}
          boxSize="40px"
          display="inline-block"
          mr={2}
        />
        <Progress value={60} size="lg" colorScheme="yellow" />
      </Box>

      <Text fontSize="2xl" mb={4}>{isEnglish ? "Other Skills" : "Otras Aptitudes"}</Text>

      <List spacing={3} textAlign="left">
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          {isEnglish ? "Teaching experience" : "Experiencia en docencia"}
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          {isEnglish ? "Active listening" : "Escucha activa"}
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          {isEnglish ? "Effective communication" : "Comunicación efectiva"}
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          {isEnglish
            ? "Individual or group cooperative work"
            : "Trabajo individual o cooperativo grupal"}
        </ListItem>
      </List>
    </Box>
  );
};

OtherSkillsContent.propTypes = {
  isEnglish: PropTypes.bool.isRequired,
};
