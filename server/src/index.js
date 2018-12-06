const { ApolloServer } = require('apollo-server')

const links = [
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

type Mutation {
  postLink(url: String!, description: String!): Link!
}

type Link {
  id: ID!
  url: String!
  description: String!
}
`
const resolvers = {
  Query: {
    info: () => `This is an api for a react apollo live coding exercise`,
    feed: () => links
  },
  Mutation: {
    postLink: (root, { url, description}) => {
      const link = {
        id: `link-(links.length + 1)`,
        url,
        description,
      }

      links.push(link)

      return link
    }
  },
  Link: {
    id: (root) => root.id,
    url: (root) => root.url,
    description: (root) => root.description
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Server has started on ${url}`)
})