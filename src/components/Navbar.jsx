import { Box, Flex, HStack, Image, Spacer, useColorMode, Link } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types"; // Importar PropTypes

export const Navbar = ({ isEnglish, toggleLanguage }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav" px={4} py={2} boxShadow="sm" bg={colorMode === "light" ? "white" : "gray.800"}>
      <Flex alignItems="center">
        <Box fontSize="xl" fontWeight="bold" color={colorMode === "light" ? "black" : "white"}>
          {isEnglish ? "My Portfolio" : "Mi Portfolio"}
        </Box>

        <Spacer />

        <HStack spacing={4}>
          {/* Icono para cambiar de modo */}
          {colorMode === "light" ? (
            <MoonIcon cursor="pointer" onClick={toggleColorMode} />
          ) : (
            <SunIcon cursor="pointer" onClick={toggleColorMode} />
          )}

          {/* Bandera de Argentina para español */}
          <Image
            src="/argentina.png"
            alt="Español"
            boxSize="24px"
            cursor="pointer"
            onClick={() => toggleLanguage(false)} // Cambiar a español
          />
          {/* Bandera del Reino Unido para inglés */}
          <Image
            src="/uk.png"
            alt="English"
            boxSize="24px"
            cursor="pointer"
            onClick={() => toggleLanguage(true)} // Cambiar a inglés
          />
        </HStack>

        <Link
          href="#contact"
          color={colorMode === "light" ? "black" : "white"}
          ml={4}
          fontSize="xl" // Igual al tamaño de "Mi Portfolio"
          fontWeight="bold" // Igual al peso de "Mi Portfolio"
          textDecoration="none" // Sin subrayado
        >
          {isEnglish ? "Contact" : "Contacto"}
        </Link>
      </Flex>
    </Box>
  );
};

Navbar.propTypes = {
  isEnglish: PropTypes.bool.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
};
