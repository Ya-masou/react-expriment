import type { NextPage } from "next";
import Link from "next/link";
import { Stack, HStack, Button, Heading, Box } from "@chakra-ui/react";
import { pagesPath } from "@/lib/$path";

const Home: NextPage = () => {
  return (
    <Stack spacing={6}>
      <Box>
        <Heading as="h2" mb={4}>
          Hooks
        </Heading>
        <HStack spacing={2}>
          <Link href={pagesPath.hooks.usestate.$url()} passHref>
            <Button as="a" colorScheme="teal" variant="outline">
              useState
            </Button>
          </Link>
          <Link href={pagesPath.hooks.useeffect.$url()} passHref>
            <Button as="a" colorScheme="teal" variant="outline">
              useEffect
            </Button>
          </Link>
          <Link href={pagesPath.hooks.usememo.$url()} passHref>
            <Button as="a" colorScheme="teal" variant="outline">
              useMemo
            </Button>
          </Link>
          <Link href={pagesPath.hooks.customhooks.$url()} passHref>
            <Button as="a" colorScheme="teal" variant="outline">
              custom hooks
            </Button>
          </Link>
        </HStack>
      </Box>
      <Box>
        <Heading as="h2" mb={4}>
          Github
        </Heading>
        <HStack>
          <Link href={pagesPath.github.profile.$url()} passHref>
            <Button as="a" colorScheme="teal" variant="outline">
              profile
            </Button>
          </Link>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Home;
