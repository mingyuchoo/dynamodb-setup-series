import { ApolloServer } from 'apollo-server-lambda';

import schema from './schema';

const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true,
});

const options = {
  cors: {
    origin: '*',
    credentials: true,
  },
};

exports.handler = (event, lambdaContext, callback) => {
  server.createHandler(options)(event, lambdaContext, callback);
  if (event.httpMethod === 'GET') {
    server.createHandler(options)({ ...event, path: event.requestContext.path || event.path }, lambdaContext, callback);
  } else {
    server.createHandler(options)(event, lambdaContext, callback);
  }
};
