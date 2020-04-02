// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
var tel = '+33646018948';
// Set region
AWS.config.update({region: 'eu-west-1'});

// Create publish parameters
var params = {
  Message: 'Bonjour, vous avez reçu un nouveau message à partir de notre API', /* required */
  PhoneNumber: tel,
};

// Create promise and SNS service object
var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise.then(
  function(data) {
    console.log("MessageID is " + data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
