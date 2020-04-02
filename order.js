var mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    __v: {
        type: Number,
        select: false
    },
    /*_id:{
        type: Number,
        select: false
    },*/
    name_order: {
        type: String,
        required: true
    },
    price_order: {
        type: Number,
        required: true
    },
    ship_address: {
        type: String,
        required: true
    },
    billing_address: {
        type: String,
        required: true
    }
})

var OrderModel = mongoose.model('Order', OrderSchema)
module.exports = OrderModel;