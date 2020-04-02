var AWS = require('aws-sdk');
var uuid = require('uuid');
var express = require('express')
var routerCS3 = express.Router();
// Set the region 
AWS.config.update({region: 'eu-west-2'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Create the parameters for calling createBucket

routerCS3.get('/',(req,res) =>{
  console.log("Bucket = " + req.query.name);
  
  var bucketParams = {
    Bucket : req.query.name + uuid.v4(),
    ACL : 'public-read'
  };
  
// call S3 to create the bucket
s3.createBucket(bucketParams, function(err, data) {
  if (err) {
    res.send("Le bucket n'a pas pu être créé");
    res.status(404)
  } else {
    res.send("Le bucket " + bucketParams.Bucket + " a bien été créé");
    res.status(200)
  }
 })

});

module.exports = routerCS3;