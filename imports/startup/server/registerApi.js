import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";
import ResolutionsResolvers from "../../api/resolutions/resolvers";

const testSchema = `
type Query {
  resolutions: [Resolution]
}
`;

const typeDefs = [testSchema, ResolutionsSchema];

const resolvers = ResolutionsResolvers;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForAllFields: false }
});

createApolloServer({ schema });
