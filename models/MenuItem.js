const mongoose = require('mongoose')
const {model, Schema} = mongoose

const MenuSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    qty: {type: Number, required: true},
    images: {type: String},
    category: {type: String, required: true}
})

const MenuItem = model('Menu', MenuSchema)

module.exports = MenuItem