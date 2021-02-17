import awsSDK from 'aws-sdk';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { AwsApiParser } from 'graphql-compose-aws';

const awsApiParser = new AwsApiParser({
  awsSDK,
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      dynamodb: awsApiParser.getService('dynamodb').getFieldConfig(),
    },
  }),
});

export default schema;
