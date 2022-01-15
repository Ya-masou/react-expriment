import {
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

export function Card({ children }: { children: ReactNode }) {
return (
  <Box
    w="100%"
    borderRadius="lg"
    direction={{ base: 'column', md: 'row' }}
    bg={useColorModeValue('white', 'gray.900')}
    boxShadow={'2xl'}
    padding={4}>
    {children}
  </Box>
  );
}
