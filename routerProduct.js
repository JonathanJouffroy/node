var express = require('express')
var Product = require('./product.js')
var routerProduct = express.Router();

routerProduct.get('/',(req,res) =>{
    Product.find({},(error,results) =>{
        res.json(results)
        res.status(200)
    })
})


routerProduct.get('/:name', (req,res) =>{
    Product.find({"name":req.params.name},(error, results) =>{
        res.json({results})
        res.status(200)
    })
})

routerProduct.post('/',(req,res) =>{
    var product = new Product(req.body)
    product.save((err)=>{
        if(err) res.status(400).send({error:"Le produit n'a pas pu être ajouté, vérifier que tous les champs ont bien été saisis"})
        res.status(201).send(product)
    });
})

routerProduct.delete('/:name', (req,res) =>{
    Product.remove({"name":req.params.name}, (error, results) =>{
        res.send('Le produit ' + req.params.name + ' a bien été supprimé')
        res.status(204)
    })
})

module.exports = routerProduct;