import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { AboutMe } from "./components/AboutMe";
import { Technologies } from "./components/Technologies";
import { OtherSkills } from "./components/OtherSkills";
import { Projects } from "./components/Projects";
import { Box } from "@chakra-ui/react";
import { CountdownTimer } from "./components/CountdownTimer";

function App() {
  // Estado para controlar la visibilidad de los componentes
  const [showComponents, setShowComponents] = useState(false);

  const handleCountdownFinish = () => {
    setShowComponents(true); // Muestra los componentes al finalizar el conteo
  };

  return (
    <>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        position="relative"
      >
        {/* Mi Foto en el centro */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <img
            src="/yo.png"
            alt="Mi foto"
            style={{ borderRadius: '50%', width: '150px', height: '150px' }}
          />
          <h1>Hola, soy Francisco Bourquin</h1>
          <CountdownTimer onFinish={handleCountdownFinish} />
        </Box>

        {/* Componentes distribuidos en forma de X alrededor de la foto */}
        {showComponents && (
          <>
            <Box position="absolute" top="15%" left="15%">
              <AboutMe />
            </Box>
            <Box position="absolute" top="15%" right="15%">
              <Technologies />
            </Box>
            <Box position="absolute" bottom="15%" left="15%">
              <OtherSkills />
            </Box>
            <Box position="absolute" bottom="15%" right="15%">
              <Projects />
            </Box>
          </>
        )}
      </Box>
    </>
  );
}

export default App;
