import { Box, Flex, HStack, Link, IconButton, useColorMode, Spacer, Image } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

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
          <Link href="#about" fontWeight="medium" color={colorMode === "light" ? "black" : "white"}>
            Sobre Mí
          </Link>
          <Link href="#technologies" fontWeight="medium" color={colorMode === "light" ? "black" : "white"}>
            Tecnologías
          </Link>
          <Link href="#skills" fontWeight="medium" color={colorMode === "light" ? "black" : "white"}>
            Otras Habilidades
          </Link>
          <Link href="#projects" fontWeight="medium" color={colorMode === "light" ? "black" : "white"}>
            Proyectos
          </Link>
          <Link href="#contact" fontWeight="medium" color={colorMode === "light" ? "black" : "white"}>
            Contacto
          </Link>

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
