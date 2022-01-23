import type { NextPage } from 'next'
import Link from "next/link"
import { HStack, Button } from "@chakra-ui/react"
import { pagesPath } from "@/lib/$path"

const Home: NextPage = () => {
  return (
    <HStack spacing={2}>
      <Link href={pagesPath.hooks.usestate.$url()} passHref>
        <Button as="a" colorScheme="teal" variant="outline">useState</Button>
      </Link>
      <Link href={pagesPath.hooks.useeffect.$url()} passHref>
        <Button as="a" colorScheme="teal" variant="outline">useEffect</Button>
      </Link>
      <Link href={pagesPath.hooks.usememo.$url()} passHref>
        <Button as="a" colorScheme="teal" variant="outline">useMemo</Button>
      </Link>
      <Link href={pagesPath.hooks.customhooks.$url()} passHref>
        <Button as="a" colorScheme="teal" variant="outline">custom hooks</Button>
      </Link>
    </HStack>
  )
}

export default Home
