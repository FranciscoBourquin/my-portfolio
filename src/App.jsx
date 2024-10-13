import { Navbar } from "./components/Navbar";
import { AboutMeTitle } from "./components/AboutMe";
import { TechnologiesTitle } from "./components/Technologies";
import { OtherSkillsTitle } from "./components/OtherSkills";
import { Projects } from "./components/Projects";
import { Box } from "@chakra-ui/react";
import { CountdownTimer } from "./components/CountdownTimer";
import { useState } from "react";

function App() {
  const [showComponents, setShowComponents] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [countdownFinished, setCountdownFinished] = useState(false);

  const handleFinish = () => {
    setShowExplosion(true);
    setTimeout(() => {
      setShowPhoto(true);
    }, 500);

    setTimeout(() => {
      setShowComponents(true);
      setCountdownFinished(true);
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
        overflow="hidden"
      >
        {!showPhoto && !countdownFinished && (
          <Box display="flex" flexDirection="column" alignItems="center">
            <CountdownTimer onFinish={handleFinish} />
          </Box>
        )}

        {showPhoto && (
          <Box display="flex" flexDirection="column" alignItems="center">
            <img
              src="/yo.png"
              alt="Mi foto"
              className="rounded-full w-40 h-40"
            />
            <h1 className="text-2xl">Hola, soy Francisco Bourquin</h1>
          </Box>
        )}

        {showExplosion && (
          <div className="absolute animate-waveExplosion bg-red-500 opacity-50 w-[150px] h-[150px] rounded-full"></div>
        )}

        {showComponents && (
          <>
            <Box
              position="absolute"
              top="10%"
              left="10%"
              transition="transform 0.5s, opacity 0.5s"
            >
              <AboutMeTitle />
            </Box>
            <Box
              position="absolute"
              top="10%"
              right="10%"
              transition="transform 0.5s, opacity 0.5s"
            >
              <TechnologiesTitle />
            </Box>
            <Box
              position="absolute"
              bottom="10%"
              left="10%"
              transition="transform 0.5s, opacity 0.5s"
            >
              <OtherSkillsTitle />
            </Box>
            <Box
              position="absolute"
              bottom="10%"
              right="10%"
              transition="transform 0.5s, opacity 0.5s"
            >
              <Projects />
            </Box>
          </>
        )}
      </Box>
    </>
  );
}

export default App;
