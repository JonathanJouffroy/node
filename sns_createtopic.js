// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'eu-west-3'});

// Create promise and SNS service object
var createTopicPromise = new AWS.SNS({apiVersion: '2010-03-31'}).createTopic({Name: "Topic2"}).promise();

// Handle promise's fulfilled/rejected states
createTopicPromise.then(
  function(data) {
    console.log("Topic ARN is " + data.TopicArn);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });

