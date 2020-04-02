// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'eu-west-3'});

// Create setTopicAttributes parameters
var params = {
  AttributeName: 'DisplayName', /* required */
  TopicArn: 'arn:aws:sns:eu-west-3:280804642165:MonPremierTopic', /* required */
  AttributeValue: 'TestAttribute'
};

// Create promise and SNS service object
var setTopicAttribsPromise = new AWS.SNS({apiVersion: '2010-03-31'}).setTopicAttributes(params).promise();

// Handle promise's fulfilled/rejected states
setTopicAttribsPromise.then(
  function(data) {
    console.log(data);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });