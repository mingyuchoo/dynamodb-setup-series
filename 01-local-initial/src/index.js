const AWS = require('aws-sdk');
const config = require('./config.js');

AWS.config.update(config.aws_local_config);

// 1. select all
const docClient = new AWS.DynamoDB.DocumentClient();
const params_scan = {
  TableName: config.aws_table_name,
};
docClient.scan(params_scan, function (err, data) {
  if (err) {
    console.error('Unable to read item. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('Scan succeeded:', JSON.stringify(data, null, 2));
  }
});

// 2. create one
const fruitId = (Math.random() * 1000).toString();
const params_put = {
  TableName: config.aws_table_name,
  Item: {
    fruitId,
    fruiteType: 'Summer',
    color: 'red',
  },
};
docClient.put(params_put, function (err, data) {
  if (err) {
    console.error('Unable to read item. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('Put succeeded:', JSON.stringify(data, null, 2));
  }
});

// 3. select one
const params_get = {
  TableName: config.aws_table_name,
  Key: {
    fruitId,
  },
};
docClient.get(params_get, function (err, data) {
  if (err) {
    console.error('Unable to read item. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('Get succeeded:', JSON.stringify(data, null, 2));
  }
});

// 4. delete
docClient.delete(params_get, function (err, data) {
  if (err) {
    console.error('Unable to read item. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('Delete succeeded:', JSON.stringify(data, null, 2));
  }
});
