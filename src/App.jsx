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
  const [showPhoto, setShowPhoto] = useState(false);

  const handleFinish = () => {
    setShowExplosion(true);
    setTimeout(() => {
      setShowPhoto(true);
    }, 500);

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

        {!showPhoto && (
          <Box display="flex" flexDirection="column" alignItems="center">
            <CountdownTimer onFinish={handleFinish} />
          </Box>
        )}


        {showPhoto && (
          <Box display="flex" flexDirection="column" alignItems="center">
            <img
              src="/yo.png"
              alt="Mi foto"
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
            <h1>Hola, soy [Tu Nombre]</h1>
          </Box>
        )}

        {showExplosion && (
          <div className="absolute animate-waveExplosion bg-red-500 opacity-50 w-[150px] h-[150px] rounded-full"></div>
        )}

        {showComponents && (
          <>
            <Box position="absolute" top="10%" left="10%">
              <AboutMe />
            </Box>
            <Box position="absolute" top="10%" right="10%">
              <Technologies />
            </Box>
            <Box position="absolute" bottom="10%" left="10%">
              <OtherSkills />
            </Box>
            <Box position="absolute" bottom="10%" right="10%">
              <Projects />
            </Box>
          </>
        )}
      </Box>
    </>
  );
}

export default App;
