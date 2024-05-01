// src/components/Navbar.tsx
import { useState } from "react";
import { Box, Button, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="blue.500" p={4}>
      <Flex justify="space-between" align="center">
        <Box>Logo</Box>
        <IconButton
          display={{ base: "block", md: "none" }} // Hide on larger screens
          onClick={onToggle}
          icon={<HamburgerIcon />}
        />
        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }} // Show on smaller screens when menu is open, and always on larger screens
        >
          <Button colorScheme="whiteAlpha" mr={4}>
            Home
          </Button>
          <Button colorScheme="whiteAlpha" mr={4}>
            About
          </Button>
          <Button colorScheme="whiteAlpha">Contact</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
