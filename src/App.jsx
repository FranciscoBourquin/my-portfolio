import { Navbar } from "./components/Navbar";
import { AboutMe } from "./components/AboutMe";
import { Technologies } from "./components/Technologies";
import { OtherSkills } from "./components/OtherSkills";
import { Projects } from "./components/Projects";
import { Box } from "@chakra-ui/react";
import { CountdownTimer } from "./components/CountdownTimer";
import { useState } from "react";


function App() {
  const [showComponents, setShowComponents] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);

  const handleFinish = () => {
    setShowExplosion(true);
    setTimeout(() => {
      setShowComponents(true);
    }, 1500);
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
            style={{ borderRadius: "50%", width: "150px", height: "150px" }}
          />
          <h1>Hola, soy [Tu Nombre]</h1>
          <CountdownTimer onFinish={handleFinish} />
        </Box>

        {/* Efecto de explosión */}
        {showExplosion && (
          <div className="absolute animate-waveExplosion bg-red-500 opacity-50 w-[150px] h-[150px] rounded-full"></div>
        )}

        {/* Componentes que aparecen después de la explosión */}
        {showComponents && (
          <>
            <Box position="absolute" top="20%" left="10%">
              <AboutMe />
            </Box>
            <Box position="absolute" top="20%" right="10%">
              <Technologies />
            </Box>
            <Box position="absolute" bottom="20%" left="10%">
              <OtherSkills />
            </Box>
            <Box position="absolute" bottom="20%" right="10%">
              <Projects />
            </Box>
          </>
        )}
      </Box>
    </>
  );
}

export default App;
