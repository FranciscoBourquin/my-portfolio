import { Box, Flex, HStack, Image, Spacer, useColorMode, Link } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

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

          <Image
            src="/argentina.png"
            alt="Español"
            boxSize="24px"
            cursor="pointer"
            onClick={() => toggleLanguage(false)}
          />

          <Image
            src="/uk.png"
            alt="English"
            boxSize="24px"
            cursor="pointer"
            onClick={() => toggleLanguage(true)}
          />

          {colorMode === "light" ? (
            <MoonIcon cursor="pointer" onClick={toggleColorMode} />
          ) : (
            <SunIcon cursor="pointer" onClick={toggleColorMode} />
          )}
        </HStack>
      </Flex>
      <Link href="#contact" color="teal.500" mt={2}>
        {isEnglish ? "Contact" : "Contacto"}
      </Link>
    </Box>
  );
};
