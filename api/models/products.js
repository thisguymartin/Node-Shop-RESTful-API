const mongoose = require('mongoose')

// create Schema for product. ObjectId assigns a unique id utilizing mongoose

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{type: String, required: true},
    price: {type: Number, required: true}
})

// assigned name of Schema and schema assigned to it

module.exports = mongoose.model('Products', productSchema)