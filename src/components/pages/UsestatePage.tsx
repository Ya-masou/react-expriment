import { useState } from "react"
import {
  Flex,
  Box,
  Text,
  Divider,
  Button,
  HStack,
} from "@chakra-ui/react"
import { Card } from "@/src/components/parts/Card"

export const UsestatePage = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const incrementDouble = () => {
    increment()
    increment()
  }
  const reset = () => setCount(0)

  return (
    <Flex justify="center">
      <Card>
        <Box paddingY={3}>
          <Text fontSize="5xl">Result: {count}</Text>
        </Box>
        <Divider />
        <Box paddingY={3}>
          <HStack>
            <Button colorScheme='teal' variant='solid' onClick={() => increment()}>Increment</Button>
            <Button colorScheme='teal' variant='solid' onClick={() => incrementDouble()}>Increment double</Button>
            <Button colorScheme='teal' variant='solid' onClick={() => reset()}>Reset</Button>
          </HStack>
        </Box>
      </Card>
    </Flex>
  )
}
