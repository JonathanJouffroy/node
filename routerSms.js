var express = require('express')
var routerSMS = express.Router();
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
AWS.config.update({region: 'eu-west-1'});

routerSMS.get('/', (req, res) => {
    console.log("Message = " + req.query.message);
    console.log("Number = " + req.query.numero);
    console.log("Subject = " + req.query.sujet);
    var params = {
        Message: req.query.message,
        PhoneNumber: '+' + req.query.numero,
        MessageAttributes: {
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': req.query.sujet
            }
        }
    };
// Create promise and SNS service object
var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
//http://localhost:8080/v1/sendSms/?message=Bonjour&number=33646018948&subject=API
// Handle promise's fulfilled/rejected states
publishTextPromise.then(
    function (data) {
        res.send("Le message a bien été envoyé");
        res.status(200)
    }).catch(
        function (err) {
            res.send("Le message n'a pas pu être envoyé, vérifier que les paramètres sont correct." );
            res.status(400)
        });

});

module.exports = routerSMS;