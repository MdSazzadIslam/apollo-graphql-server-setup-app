const Student = require("../models/studentModel");
//Resolvers are the functions that run when queries and mutations are made.
const studentResolvers = {
  Query: {
    students: async () => {
      const stds = await Student.find();
      return stds;
    },
  },

  Mutation: {
    createStudent: async (_, args) => {
      const data = await new Student({ ...args }).save();
      return data;
    },

    updateStudent: async (_, { id, ...args }) => {
      const data = await Student.findOneAndUpdate(
        { id },
        { $set: args },
        { new: true }
      );
      return data;
    },

    deleteStudent: async (_, args) => {
      await Student.remove(args);
      return {
        id: args.id,
      };
    },
  },
};

module.exports = studentResolvers;
