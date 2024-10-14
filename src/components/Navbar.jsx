import { Box, Flex, HStack, Link, IconButton, useColorMode, Spacer, Image } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll"; // Importa el componente ScrollLink

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav" px={4} py={2} boxShadow="sm" bg={colorMode === "light" ? "white" : "gray.800"}>
      <Flex alignItems="center">
        <Box fontSize="xl" fontWeight="bold" color={colorMode === "light" ? "black" : "white"}>
          Mi Portfolio
        </Box>

        <Spacer />

        <HStack spacing={4}>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <Link fontWeight="medium" color={colorMode === "light" ? "black" : "white"}>
              Contacto
            </Link>
          </ScrollLink>

          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            colorScheme={colorMode === "light" ? "black" : "white"}
          />

          <Image src="/argentina.png" alt="Español" boxSize="24px" />
          <Image src="/uk.png" alt="Inglés" boxSize="24px" />
        </HStack>
      </Flex>
    </Box>
  );
};
