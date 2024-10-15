import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Image,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export const Projects = ({ isEnglish }) => {
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
        <Text fontSize="xl">{isEnglish ? "Projects" : "Proyectos"}</Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent marginTop="20px" maxHeight="95vh" overflowY="auto">
          <ModalHeader>
            {isEnglish ? "Projects I have completed" : "Proyectos que he realizado"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" align="center" gap={8}>
              {/* Proyecto 1 */}
              <Flex direction="column" align="center">
                <Image
                  src="/mern-task.png"
                  alt="MERN Task App"
                  style={{ width: "600px", height: "auto" }}
                />
                <Text as="a" href="https://mern-task-ml6n.onrender.com" target="_blank">
                  MERN Task App
                </Text>
                <Text>{isEnglish ? "Technologies: MongoDB, Express, React, Node.js" : "Tecnologías: MongoDB, Express, React, Node.js"}</Text>
              </Flex>

              {/* Proyecto 2 */}
              <Flex direction="column" align="center">
                <Image
                  src="/python-chat.png"
                  alt="Python Chat App"
                  style={{ width: "600px", height: "auto" }}
                />
                <Text as="a" href="https://python-chat-app-oaim.onrender.com/" target="_blank">
                  Python Chat App
                </Text>
                <Text>{isEnglish ? "Technologies: Python, Flask, WebSockets" : "Tecnologías: Python, Flask, WebSockets"}</Text>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

Projects.propTypes = {
  isEnglish: PropTypes.bool.isRequired,
};
