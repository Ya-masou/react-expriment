import { VFC, PropsWithChildren } from "react"
import {
  Box,
  useColorModeValue,
  Heading,
  Text
} from '@chakra-ui/react';

type Props = {
  title?: string
  description?: string
}

export const Card: VFC<PropsWithChildren<Props>> = ({ children, title, description }) => {
  return (
    <Box
      w="100%"
      borderRadius="lg"
      direction={{ base: 'column', md: 'row' }}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      padding={4}>
      <>
        <Heading as="h3">{title}</Heading>
        <Text>{description}</Text>
        {children}
      </>
    </Box>
  );
}
