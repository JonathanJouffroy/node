var express = require('express')
var User = require('./user.js')
var router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs')


router.get('/', (req,res) => {
    User.find({}, (error,results) =>{  
        res.json(results)
        res.status(200)
    })
})

router.get('/:name', (req,res) =>{
    User.find({"name":req.params.name}, (error,results) =>{
        res.json({results})
        res.status(200)
    })
})

router.post('/', (req,res) =>{
    var user = new User(req.body)
    user.save((err)=>{
        
        if(err) res.status(400).send({error:"L'utilisateur n'a pas pu être créé, vérifier que tous les champs ont bien été saisis"})
        res.status(201).send(user)
    });
    req.app.io.emit('data', user);
    

})


router.delete('/:name', (req,res)=>{
     User.remove({"name":req.params.name}, (error,results) =>{
         res.send('L\'utilisateur ' + req.params.name + ' a bien été supprimé')
         res.status(204)
     })
})
module.exports = router;