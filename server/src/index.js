const { ApolloServer} = require('apollo-server')

let links = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  },
  {
    id: 'link-1',
    url: 'www.apollographql.com/',
    description: 'Apollo projects website'
  },
  {
    id: 'link-2',
    url: 'reactjs.org/',
    description: 'Website for React'
  },
]

const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}

type Link {
  id: ID!
  url: String!
  description: String!
}

type Mutation {
  post(url: String!, description: String!): Link!
}
`

const resolvers = {
  Query: {
    info: () => `This is an API for a basic link posting service`,
    feed: () => links,
  },
  Link: {
    id: (root) => root.id,
    url: (root) => root.url,
    description: (root) => root.description,
  }

}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`)
})
