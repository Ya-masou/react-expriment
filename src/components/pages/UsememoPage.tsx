// 参考資料
// * https://qiita.com/soarflat/items/b9d3d17b8ab1f5dbfed2
import { useState, useEffect, VFC, memo, useCallback, useMemo } from "react";
import { Box, Text, Divider, Button, HStack, VStack } from "@chakra-ui/react";
import { Card } from "@/src/components/parts/Card";

type ChildProps = {
  count: number;
  doubleCount: number;
  handleClick: () => void;
};

const Child: VFC<ChildProps> = ({ count, doubleCount, handleClick }) => {
  useEffect(() => {
    console.log("Child is rendered.");
  });

  return (
    <Card title="Child component">
      <Box paddingY={3}>
        <Text fontSize="2xl">Child count: {count}</Text>
        <Text fontSize="2xl">Child double count: {doubleCount}</Text>
      </Box>
      <Divider />
      <Box paddingY={3}>
        <HStack>
          <Button colorScheme="teal" variant="solid" onClick={handleClick}>
            Increment child count
          </Button>
        </HStack>
      </Box>
    </Card>
  );
};

const MemoChild = memo(Child);

export const UsememoPage = () => {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  console.log("Parent rendering start =============>");

  useEffect(() => {
    console.log("Parent is rendered.");
  });

  const incrementChildCount = useCallback(() => {
    console.log("Called incrementChildCount.");
    setChildCount(childCount + 1);
  }, [childCount]);

  const doubledChildCount = useMemo(() => {
    console.log("Called doubleChildCount.");
    return childCount * 2;
  }, [childCount]);

  return (
    <VStack spacing={4}>
      <Card title="Parent component">
        <Box paddingY={3}>
          <Text fontSize="2xl">Parent count: {count}</Text>
        </Box>
        <Divider />
        <Box paddingY={3}>
          <HStack>
            <Button
              colorScheme="teal"
              variant="solid"
              onClick={() => setCount(count + 1)}
            >
              Increment parent count
            </Button>
          </HStack>
        </Box>
      </Card>
      <MemoChild
        count={childCount}
        doubleCount={doubledChildCount}
        handleClick={incrementChildCount}
      />
    </VStack>
  );
};
