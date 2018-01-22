import Interchanges from "./interchanges";

export default {
  Query: {
    interchanges() {
      return Interchanges.find({}).fetch();
    }
  },

  Mutation: {
    createInterchange(obj, { question, answer }, context) {
      const interchangeId = Interchanges.insert({
        question,
        answer
      });
      return Interchanges.findOne(interchangeId);
    }
  }
};
