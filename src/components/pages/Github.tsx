import { useProfileQuery } from "@/generated/graphql";
import {
  Text,
  Grid,
  GridItem,
  HStack,
  VStack,
  Heading,
  Tag,
} from "@chakra-ui/react";
import { Card } from "@/components/parts/Card";
import { UserProfileCard } from "@/components/features/UserProfileCard";

/* GraphQL */ `
  query Profile($repositoriesBefore: String, $repositoriesAfter: String) {
    user(login: "Yamasou") {
      avatarUrl(size: 100)
      name
      login
      url
      location
      id
      gists(first: 10) {
        edges {
          cursor
          node {
            id
            isPublic
            name
            description
            url
          }
        }
      }
      repositories(first: 10, before: $repositoriesBefore, after: $repositoriesAfter) {
        edges {
          cursor
          node {
            id
            description
            isPrivate
            name
            updatedAt
            languages(first: 5) {
              edges {
                cursor
                node {
                  id
                  color
                  name
                }
              }
            }
          }
        }
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  }
`;

export const Github = () => {
  const [result] = useProfileQuery();

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const user = data?.user;

  return (
    <Grid gap={6} templateColumns="repeat(3, 1fr)">
      <GridItem colSpan={1}>
        <Heading as="h2">Profile</Heading>
        <UserProfileCard user={user} />
      </GridItem>
      <GridItem colSpan={2}>
        <Heading as="h2">Repositories</Heading>
        <VStack spacing={3}>
          {user?.repositories.edges?.map((edge) => {
            if (!edge?.node || edge.node.isPrivate) return null;
            const repository = edge.node;

            return (
              <Card key={repository.id} title={repository.name}>
                <Text>{repository.description}</Text>
                <HStack spacing={2}>
                  {repository.languages?.edges?.map((edge) => {
                    const lang = edge?.node;
                    if (!lang) return null;
                    return (
                      <Tag
                        key={lang.id}
                        background={lang.color ?? ""}
                        color="#fff"
                        size="sm"
                      >
                        {lang.name}
                      </Tag>
                    );
                  })}
                </HStack>
              </Card>
            );
          })}
        </VStack>
      </GridItem>
    </Grid>
  );
};
