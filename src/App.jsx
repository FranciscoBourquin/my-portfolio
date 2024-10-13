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
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [countdownFinished, setCountdownFinished] = useState(false); // Nueva variable para controlar el estado del conteo

  const handleFinish = () => {
    setShowExplosion(true);
    setTimeout(() => {
      setShowPhoto(true);
    }, 500);

    setTimeout(() => {
      setShowComponents(true);
      setCountdownFinished(true); // Marcar que el conteo ha finalizado
    }, 1500);
  };

  const handleAboutMeClick = () => {
    // Efecto de succión y ocultar otros componentes
    setShowComponents(false);
    setShowAboutMe(true);
    setTimeout(() => {
      setShowPhoto(false);
    }, 500); // Tiempo para ocultar la foto
  };

  const closeAboutMe = () => {
    // Cerrar la sección "Sobre mí"
    setShowAboutMe(false);
    setShowComponents(true); // Mostrar nuevamente los otros componentes
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
              className={`transform ${showAboutMe ? 'translate-x-[-50%] translate-y-[-50%] scale-0' : ''}`}
            >
              <button onClick={handleAboutMeClick} className="focus:outline-none">
                <AboutMe />
              </button>
            </Box>
            <Box
              position="absolute"
              top="10%"
              right="10%"
              transition="transform 0.5s, opacity 0.5s"
              className={`transform ${showAboutMe ? 'translate-x-[-50%] translate-y-[-50%] scale-0' : ''}`}
            >
              <Technologies />
            </Box>
            <Box
              position="absolute"
              bottom="10%"
              left="10%"
              transition="transform 0.5s, opacity 0.5s"
              className={`transform ${showAboutMe ? 'translate-x-[-50%] translate-y-[-50%] scale-0' : ''}`}
            >
              <OtherSkills />
            </Box>
            <Box
              position="absolute"
              bottom="10%"
              right="10%"
              transition="transform 0.5s, opacity 0.5s"
              className={`transform ${showAboutMe ? 'translate-x-[-50%] translate-y-[-50%] scale-0' : ''}`}
            >
              <Projects />
            </Box>
          </>
        )}

        {showAboutMe && (
          <Box
            className={`absolute flex flex-col justify-center items-center h-full w-full transition-opacity duration-500 ${showAboutMe ? 'opacity-100' : 'opacity-0'}`}
          >
            <AboutMe />
            <button
              onClick={closeAboutMe}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            >
              Cerrar
            </button>
          </Box>
        )}
      </Box>
    </>
  );
}

export default App;
