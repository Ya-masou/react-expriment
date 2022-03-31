import { createClient } from "urql"

export const client = createClient({
  url: "https://api.github.com/graphql",
  fetchOptions: () => {
    const token = process.env.NEXT_PUBLIC_GITHUB_PERSONAL_TOKEN
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  }
})

