const dynamoose = require('dynamoose');

dynamoose.aws.sdk.config.update({
  region: 'local',
});
dynamoose.aws.ddb.local('http://localhost:8000');

const catSchema = new dynamoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
  },
});
const userSchema = new dynamoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
});

const Cat = dynamoose.model('Cat', catSchema);
const User = dynamoose.model('User', userSchema);

User.create({ id: 1, username: 'bob', email: 'bob@email.com' }, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log(user);
  }
});

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
