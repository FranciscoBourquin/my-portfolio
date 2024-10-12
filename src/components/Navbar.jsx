import { Box, Flex, HStack, Link, IconButton, useColorMode, Spacer, Image } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav" px={4} py={2} boxShadow="sm" bg="white">
      <Flex alignItems="center">

        <Box fontSize="xl" fontWeight="bold">
          Mi Portfolio
        </Box>

        <Spacer />

        <HStack spacing={4}>

          <Link href="#about" fontWeight="medium">
            Sobre Mí
          </Link>
          <Link href="#technologies" fontWeight="medium">
            Tecnologías
          </Link>
          <Link href="#skills" fontWeight="medium">
            Otras Habilidades
          </Link>
          <Link href="#projects" fontWeight="medium">
            Proyectos
          </Link>
          <Link href="#contact" fontWeight="medium">
            Contacto
          </Link>

          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
          />

          <Image src="/argentina.png" alt="Español" boxSize="24px" />
          <Image src="/uk.png" alt="Inglés" boxSize="24px" />
        </HStack>
      </Flex>
    </Box>
  );
};
