//const AWS = require('aws-sdk');
const dynamoose = require('dynamoose');

dynamoose.aws.sdk.config.update({
  region: 'local',
});
dynamoose.aws.ddb.local('http://localhost:8000');

const Cat = dynamoose.model('Cat', { id: Number, name: String });

Cat.create({ id: 1, name: 'bod' }, (error, cat) => {
  if (error) {
    console.error(error);
  } else {
    console.log(cat);
  }
});

Cat.get({ id: 1 }, { return: 'request' }, (error, request) => {
  console.log(request);
});

Cat.batchGet([{ id: 1 }, { id: 2 }], (error, myCats) => {
  if (error) {
    console.error(error);
  } else {
    console.log(myCats);
  }
});

Cat.batchPut(
  [
    { id: 2, name: 'sam' },
    { id: 3, name: 'tom' },
  ],
  (error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
    }
  }
);
