
'use strict';
const AWS = require('aws-sdk');

module.exports.updateSentence = async (sentence) => {
  if (sentence) {
    console.log('updating sentence to: ', sentence);
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const putParams = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        'primary_key': 'sentence',
        'sentence': sentence,
      },
    };

    await dynamoDb.put(putParams).promise();
  } else {
    throw new Error('Invalid sentence to update');
  }

};

module.exports.findSentence = async () => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      'primary_key': 'sentence'
    },
  };
  console.log('finding sentence in the database...');
  try {
    const data = await dynamoDb.get(params).promise();
    console.log('found sentence: ', data);
    return data.Item.sentence;
  } catch (err) {
    console.log('error fetching: ', err);
  }

};