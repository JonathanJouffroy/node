

var AWS = require('aws-sdk');
var uuid = require('uuid');
var express = require('express')
var routerS3 = express.Router();

routerS3.get('/',(req,res) =>{
  console.log("Bucket = " + req.query.Bucketname);
  console.log("Keyname = " + req.query.keyname);
  
  var params = {
    Bucketname: req.query.Bucketname + uuid.v4(),
    keyname: req.query.keyname,
    contenu: req.query.contenu
};


// Create a promise on S3 service object
var bucketPromise = new AWS.S3({apiVersion: '2006-03-01'}).createBucket({Bucket: params.Bucketname}).promise();

// Handle promise fulfilled/rejected states
bucketPromise.then(
  function(data) {
    // Create params for putObject call
    var objectParams = {Bucket: params.Bucketname, Key: params.keyname, Body: params.contenu};
    // Create object upload promise
    var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise();
    uploadPromise.then(
      function(data) {
        res.send("Vous avez correctement uploadé le fichier dans le bucket :  " + params.Bucketname + "/" + params.keyname + " Le contenu du fichier est : " + params.contenu );
        res.status(200)
      });
}).catch(
  function(err) {
    res.end("Vous n'avez pas réussi a uplodé le fichier");
    res.status(404)
});
})

module.exports = routerS3;