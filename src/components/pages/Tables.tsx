import { Box, Text, VStack } from "@chakra-ui/react";
import { Card } from "@/components/parts/Card";

export const Tables = () => {
  return (
    <VStack spacing={4}>
        <Card title="ChakraUI Table">
        <Box paddingY={3}>
          <Text fontSize="2xl">ChakraUI のテーブルを実装してみる</Text>
        </Box>
      </Card>
    </VStack>
  );
}
