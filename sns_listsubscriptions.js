// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'eu-west-3'});

const params = {
  TopicArn : 'arn:aws:sns:eu-west-3:280804642165:Topic2'
}

// Create promise and SNS service object
var subslistPromise = new AWS.SNS({apiVersion: '2010-03-31'}).listSubscriptionsByTopic(params).promise();

// Handle promise's fulfilled/rejected states
  subslistPromise.then(
    function(data) {
      console.log(data);
    }).catch(
    function(err) {
      console.error(err, err.stack);
    }
  );