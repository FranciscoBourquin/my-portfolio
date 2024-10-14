import { Box, Text, Link, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa"; // Icono del sobre y WhatsApp

export const Footer = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box as="footer" py={4} bg={bgColor} textAlign="center">
      <Text fontSize="sm">
        Todos los derechos reservados © Francisco Bourquin 2024
      </Text>
      <Link href="mailto:fran.js@gmail.com" isExternal>
        <Icon as={FaEnvelope} w={5} h={5} ml={2} />
      </Link>
      <Link href="https://wa.me/5493415022599?text=Hola%20Francisco,%20quiero%20hablar%20contigo." isExternal>
        <Icon as={FaWhatsapp} w={5} h={5} ml={2} />
      </Link>
    </Box>
  );
};
