import { ApolloServer } from "@apollo/server";
import { addMocksToSchema } from "@graphql-tools/mock";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildClientSchema, printSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import schema from "../storefront/graphql.schema.json" assert { type: "json" };

const graphqlSchemaObj = buildClientSchema(schema);
const sdlString = printSchema(graphqlSchemaObj);

const server = new ApolloServer({
  // addMocksToSchema accepts a schema instance and provides
  // mocked data for each field in the schema
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs: sdlString }),
  }),
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server listening at: ${url}`);
