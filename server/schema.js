import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Query {
    users: String
  }
`

export const resolvers = {
  Query: {
    users() {
      return "This will soon return users!"
    }
  }
}