// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'eu-west-3'});

var deleteTopicPromise = new AWS.SNS({apiVersion: '2010-03-31'}).deleteTopic({TopicArn: 'arn:aws:sns:eu-west-3:280804642165:Topic'}).promise();

// Handle promise's fulfilled/rejected states
deleteTopicPromise.then(
  function(data) {
    console.log("Topic Deleted");
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });