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
  Icon,
  SimpleGrid,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiCss3,
  SiTailwindcss,
  SiChakraui,
  SiBootstrap,
} from "react-icons/si";
import { FaLock, FaShieldAlt, FaDatabase } from "react-icons/fa";
import PropTypes from "prop-types";

export const TechnologiesTitle = ({ isEnglish }) => {
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
        <Text fontSize="xl">{isEnglish ? "Technologies" : "Tecnologías"}</Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent marginTop="5px">
          <ModalHeader>{isEnglish ? "Technologies I use" : "Tecnologías que utilizo"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={3} spacing={10} textAlign="center">
              <Box>
                <Icon as={SiJavascript} w={12} h={12} color="yellow.400" />
                <Text>JavaScript</Text>
              </Box>
              <Box>
                <Icon as={SiPython} w={12} h={12} color="blue.500" />
                <Text>Python</Text>
              </Box>
              <Box>
                <Icon as={SiNodedotjs} w={12} h={12} color="green.500" />
                <Text>Node.js</Text>
              </Box>
              <Box>
                <Icon as={SiReact} w={12} h={12} color="cyan.500" />
                <Text>React</Text>
              </Box>
              <Box>
                <Icon as={FaLock} w={12} h={12} color="orange.400" />
                <Text>JWT</Text>
              </Box>
              <Box>
                <Icon as={FaShieldAlt} w={12} h={12} color="purple.500" />
                <Text>Bcrypt</Text>
              </Box>
              <Box>
                <Icon as={SiCss3} w={12} h={12} color="blue.300" />
                <Text>CSS3</Text>
              </Box>
              <Box>
                <Icon as={SiTailwindcss} w={12} h={12} color="teal.500" />
                <Text>TailwindCSS</Text>
              </Box>
              <Box>
                <Icon as={SiChakraui} w={12} h={12} color="teal.400" />
                <Text>Chakra UI</Text>
              </Box>
              <Box>
                <Icon as={SiBootstrap} w={12} h={12} color="purple.600" />
                <Text>Bootstrap</Text>
              </Box>
              <Flex direction="column" align="center">
                <img
                  src="/express.png"
                  alt="Express.js"
                  style={{ width: "48px", height: "48px" }}
                />
                <Text>Express.js</Text>
              </Flex>
              <Flex direction="column" align="center">
                <img
                  src="/passport.png"
                  alt="Passport.js"
                  style={{ width: "48px", height: "48px" }}
                />
                <Text>Passport.js</Text>
              </Flex>
              <Flex direction="column" align="center">
                <img
                  src="/flask.png"
                  alt="Flask"
                  style={{ width: "48px", height: "48px" }}
                />
                <Text>Flask</Text>
              </Flex>
              <Flex direction="column" align="center">
                <img
                  src="/socketio.png"
                  alt="Socket.io"
                  style={{ width: "48px", height: "48px" }}
                />
                <Text>Socket.io</Text>
              </Flex>
              <Flex direction="column" align="center">
                <img
                  src="/postman.png"
                  alt="Postman"
                  style={{ width: "48px", height: "48px" }}
                />
                <Text>Postman</Text>
              </Flex>
              <Flex direction="column" align="center">
                <img
                  src="/thunderclient.png"
                  alt="Thunder Client"
                  style={{ width: "48px", height: "48px" }}
                />
                <Text>Thunder Client</Text>
              </Flex>
              <Flex direction="column" align="center">
                <img
                  src="/handlebars.png"
                  alt="Handlebars"
                  style={{ width: "48px", height: "48px" }}
                />
                <Text>Handlebars</Text>
              </Flex>
              <Box>
                <Icon as={FaDatabase} w={12} h={12} color="green.500" />
                <Text>MongoDB</Text>
              </Box>

              <Flex direction="column" align="center">
                <img
                  src="/redux.png"
                  alt="Redux"
                  style={{ width: "48px", height: "48px" }}
                />
                <Text>Redux</Text>
              </Flex>
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

TechnologiesTitle.propTypes = {
  isEnglish: PropTypes.bool.isRequired,
};
