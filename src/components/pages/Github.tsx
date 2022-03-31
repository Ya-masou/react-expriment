import { useQuery } from "urql"
import { Box, Text, VStack } from "@chakra-ui/react";
import { Card } from "@/components/parts/Card";

const query = /* GraphQL */`
  query Profile($repositoriesBefore: String, $repositoriesAfter: String) {
    user(login: "Yamasou") {
      avatarUrl(size: 100)
      name
      login
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
            primaryLanguage {
              id
              color
              name
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
`

export const Github = () => {
  const [result] = useQuery({
    query
  })

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  console.log(data)

  return (
    <VStack spacing={4}>
        <Card title="Profile">
        <Box paddingY={3}>
          <Text fontSize="2xl">graphql からGithub 情報を取得してみる</Text>
          <p>
          </p>
        </Box>
      </Card>
    </VStack>
  );
}
