var express = require('express')
var Order = require('./order.js')
var routerOrder = express.Router();


routerOrder.get('/', (req,res) => {
    Order.find({}, (error,results) =>{
        res.json(results)
        res.status(200)

    })
})

routerOrder.get('/:name',(req,res) =>{
    Order.find({"name_order":req.params.name}, (error, results) =>{
        res.json({results})
        res.status(200)
    })
})


routerOrder.post('/', (req,res) =>{
    var order = new Order(req.body)
    order.save((err)=>{
        if(err) res.status(400).send({error:"La commande n'a pas pu être créé, vérifier que tous les champs ont bien été saisis"})
        res.status(201).send(order)
    });
})


routerOrder.delete('/:name',(req,res)=>{

    Order.remove({"name_order":req.params.name}, (error, results) =>{
        res.send('La commande ' + req.params.name + ' a bien été supprimée')
        res.status(204)
    })
})
module.exports = routerOrder;

