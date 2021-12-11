import { Suspense } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import Earth from "./components/Earth";

function App() {
  return (
    <Box w="100vw" h="100vh" bg="#010b19">
      <Flex
        position="absolute"
        w="100%"
        left={0}
        top="25%"
        align="center"
        justify="center"
        zIndex={100}
      >
        <Text color="white" fontSize="80">
          地球，我们的家园
        </Text>
      </Flex>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </Box>
  );
}

export default App;
