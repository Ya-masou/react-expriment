import { useState, useEffect } from "react"
import {
  Box,
  Text,
  Divider,
  Button,
  HStack,
  VStack
} from "@chakra-ui/react"
import { Card } from "@/src/components/parts/Card"

const Timer = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <Text fontSize="2xl">Time: {time}s</Text>
}

export const UseeffectPage = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [showTimer, toggleShowTimer] = useState(true)

  useEffect(() => {
    setText(`useEffect hash worked ${count} times.`)
  }, [count])

  return (
    <VStack spacing={4}>
      <Card title="useEffect を使ってみる">
        <Box paddingY={3}>
          <Text fontSize="2xl">Count: {count}</Text>
          <Text fontSize="2xl">{text}</Text>
        </Box>
        <Divider />
        <Box paddingY={3}>
          <HStack>
            <Button colorScheme='teal' variant='solid' onClick={() => setCount(count + 1)}>Increment</Button>
          </HStack>
        </Box>
      </Card>
      <Card title="クリーンアップ関数を使ってみる">
        <Box paddingY={3}>
          {showTimer && <Timer />}
        </Box>
        <Divider />
        <Box paddingY={3}>
          <Button colorScheme='teal' variant='solid' onClick={() => toggleShowTimer(showTimer != true)}>Toggle</Button>
        </Box>
      </Card>
    </VStack>
  )
}
