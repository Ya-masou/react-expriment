import { Box, Text, HStack, Avatar, Heading, Link } from "@chakra-ui/react";
import { Card } from "@/components/parts/Card";
import type { ProfileQuery } from "@/generated/graphql";

type Props = {
  user: ProfileQuery["user"] | undefined;
};

export const UserProfileCard = ({ user }: Props) => {
  if (!user) return null;

  const resumeGist = user.gists?.edges?.[0]?.node;
  return (
    <Card>
      <HStack spacing={4}>
        <Box>
          <Avatar src={user.avatarUrl} name="Yamasou" size="xl" />
        </Box>
        <Box>
          <Heading as="h4">{user.name}</Heading>
          <Text color="gray.400" fontWeight="bold">
            {user.login}
          </Text>
          <Box paddingY={3}>
            <Text>
              URL: <Link href={user.url}>{user.url}</Link>
            </Text>
            <Text>
              Resume: <Link href={resumeGist?.url}>{resumeGist?.url}</Link>
            </Text>
          </Box>
        </Box>
      </HStack>
    </Card>
  );
};
