import type { NextPage } from 'next'
import Link from "next/link"
import { HStack, Button } from "@chakra-ui/react"

const Home: NextPage = () => {
  return (
    <HStack spacing={2}>
      <Link href="/hooks/useeffect">
        <Button as="a" colorScheme="teal" variant="outline">useEffect</Button>
      </Link>
    </HStack>
  )
}

export default Home
