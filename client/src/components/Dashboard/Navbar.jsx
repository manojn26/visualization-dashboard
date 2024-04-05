import React from "react";
import {
  Box,
  Flex,
  Container,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Heading } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <Box
      py={2}
      bgGradient="linear(to-b, #4F3BA9, #9068BE)"
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <Heading>Visualization Dashboard</Heading>
          <Box>
            <Flex align="center">
              <IconButton
                aria-label="Toggle Theme"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                bg="transparent"
                border="none"
                onClick={toggleColorMode}
              />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
