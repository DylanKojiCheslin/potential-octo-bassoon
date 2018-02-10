import Resolutions from "./resolutions";

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    }
  },

  Mutation: {
    createResolution(obj, { name }, context) {
      const resolutionId = Resolutions.insert({
        name
      });
      return Resolutions.findOne(resolutionId);
    },
    updateResolution(obj, { name, _id }, context) {
      const resolutionId = Resolutions.update(
        { _id : _id },
        {
          $set: { name : name }
        }
      );
      return Resolutions.findOne(resolutionId);
    },
    deleteResolution(obj, { _id }, context){
      const thing = Resolutions.remove({ _id : _id });
      console.log(thing);
      return true;
    }
  }
};
