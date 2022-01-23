// 参考資料
// [React Hooks でカスタムフックを作ってみよう](https://zenn.dev/izuchy/articles/5cec4c2318caff6490de)

import { useState } from "react"
import {
  Box,
  Text,
  Divider,
  Button,
  HStack,
  VStack
} from "@chakra-ui/react"
import { Card } from "@/src/components/parts/Card"

const useCounter = (): [number, (() => void)] => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return [count, increment]
}

export const CustomHooksPage = () => {
  const [count, increment] = useCounter()

  return (
    <VStack spacing={4}>
      <Card>
        <Box paddingY={3}>
          <Text fontSize="2xl">Count: {count}</Text>
        </Box>
        <Divider />
        <Box paddingY={3}>
          <HStack>
            <Button colorScheme='teal' variant='solid' onClick={() => increment()}>Increment</Button>
          </HStack>
        </Box>
      </Card>
    </VStack>
  )
}
