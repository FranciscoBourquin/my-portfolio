import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AboutMe } from "./AboutMe";
import {Technologies} from "./components/Technologies";
import { OtherSkills } from "./components/OtherSkills";
import { Porjects } from "./components/Projects";

export const Container = () => {
  const [counter, setCounter] = useState(5);
  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setShowSections(true);
    }
  }, [counter]);

  return (
    <Box h="100vh" w="100vw" position="relative" textAlign="center">
      <Flex direction="column" align="center" justify="center" h="100%" position="relative">
        <Image src="/yo.png" alt="Mi foto" borderRadius="full" boxSize="150px" />
        <Text fontSize="3xl" fontWeight="bold" mt={4}>
          Hola, soy [Tu Nombre]
        </Text>
        <Text fontSize="2xl" mt={2}>
          {counter > 0 ? `Comenzamos en: ${counter}` : "¡Listo!"}
        </Text>
      </Flex>

      {showSections && (
        <>
          <AboutMe />
          <Technologies />
          <OtherSkills />
          <Porjects />
        </>
      )}
    </Box>
  );
};
