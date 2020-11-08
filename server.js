const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");

const typeDefs = require("./models/studentModel");
const resolvers = require("./resolvers/studentResolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const app = express();
server.applyMiddleware({ app });
app.use(cors());
app.listen({ port: 4000 }, () => {
  console.log("Now browse to http://localhost:4000" + server.graphqlPath);
});
