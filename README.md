# pocLambdasAws
Simple application using lambda and Serverless framework to expose a HTTP endpoint and execute lambda functions

It consists of 2 lambdas/endpoints, one to store a sentence in DynamoDB table, and another to return a XML response with the sentence currently stored.

Requirements;

Install npm and serverless package:
npm install serverless

How to run deploy and run the app on AWS with serverless:

1. run 'serverless deploy' on command line
It will prompt for AWS secrets in case if you havent configured. Please, refer to https://www.serverless.com/framework/docs/providers/aws/guide/credentials

2. Wait the deploy to be completed
3. Copy the URL of the deployed app in AWS
4. Test the endpoints on postman

* POST /dev/sentence will persist a sentence on DynamoDB.
When you invoke GET /dev/sentence, it will return a XML response wrapping the sentence you provided in POST

