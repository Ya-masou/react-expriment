import type { NextPage } from 'next'
import Link from "next/link"
import { HStack, Button } from "@chakra-ui/react"
import { pagesPath } from "@/lib/$path"

const Home: NextPage = () => {
  return (
    <HStack spacing={2}>
      <Link href={pagesPath.hooks.usestate.$url()}>
        <Button as="a" colorScheme="teal" variant="outline">useState</Button>
      </Link>
      <Link href={pagesPath.hooks.useeffect.$url()}>
        <Button as="a" colorScheme="teal" variant="outline">useEffect</Button>
      </Link>
    </HStack>
  )
}

export default Home
