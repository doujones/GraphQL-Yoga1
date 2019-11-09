const { GraphQLServer } = require('graphql-yoga')
const { users, reviews, movies } = require('./Data')


const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    users,
    reviews,
    movies
  }
})

server.start(() =>
console.log('Server is Operating')
)