const { gql } = require("apollo-server-express"); // helper function
//here i am defining a schmea called student
//and then defined Query for data fetching from GraphQL Server
//next define Mutation which is way to update data on the server

const studentModel = gql`
  type Query {
    students: [Student]!
  }
  type Student {
    id: String
    firstName: String
    lastName: String
    completed: Boolean
  }

  type Mutation {
    createStudent(id: String!, firstName: String!, lastName: String!): Student!
    updateStudent(id: String!, firstName: String!, lastname: String!): Student
    deleteStudent(id: String!): Student
  }
`;
module.exports = studentModel;
