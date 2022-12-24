import { Box, Center, Link } from "@chakra-ui/react";
export const Footer = () => {
  return (
    <Box p={6} as="footer" bg={"gray.100"} w="full">
      <Center>
        <Link href="https://twitter.com/VirtualLifeDHU">@VirtualLifeDHU</Link>
      </Center>
    </Box>
  );
};
