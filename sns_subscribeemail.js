// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'eu-west-3'});

// Create subscribe/email parameters
var params = {
  Protocol: 'EMAIL', /* required */
  TopicArn: 'arn:aws:sns:eu-west-3:280804642165:Topic2', /* required */
  Endpoint: 'jonathanjouffroy@gmail.com'
};

// Create promise and SNS service object
var subscribePromise = new AWS.SNS({apiVersion: '2010-03-31'}).subscribe(params).promise();

// Handle promise's fulfilled/rejected states
subscribePromise.then(
  function(data) {
    console.log("Subscription ARN is " + data.SubscriptionArn);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });