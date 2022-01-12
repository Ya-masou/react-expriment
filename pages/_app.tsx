import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import { Header } from "@/components/features/Header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Box padding={6}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
