'use strict';

const databaseManager = require('./dao');
var builder = require('xmlbuilder');

module.exports.buildSentence = async () => {
  const sentence = await databaseManager.findSentence();
  if (sentence) {
    const response = builder.create('Response')
      .ele("Sentence", sentence)
      .end({ pretty: true });
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/xml' },
      body: response,
    };
  }
  else {
    return {
      statusCode: 204,
    };
  }
};

module.exports.updateSentence = async (event) => {
  const body = JSON.parse(event.body);
  const sentence = body.sentence;
  console.log('sentence to update:', sentence);

  if (sentence) {
    await databaseManager.updateSentence(sentence);

    return {
      statusCode: 200,
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Missing required parameter: sentence'
      }),
    };
  }
};
