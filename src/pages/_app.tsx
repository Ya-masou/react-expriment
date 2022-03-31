import type { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Provider as UrqlProvider } from "urql"
import { Header } from "@/components/features/Header";
import { client } from "@/urqlClient"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UrqlProvider value={client}>
      <ChakraProvider>
        <Header />
        <Box padding={6}>
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </UrqlProvider>
  );
}

export default MyApp;
