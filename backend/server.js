const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const productSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})

const Products = mongoose.model('Product', productSchema)

app.get('/api/products', async (req, res) => {
    const response = await Products.find()
    res.send(response)
})

app.get('/api/products/:id', async (req, res) => {
    const { id } = req.params
    const target = await Products.findById(id)
    res.send(target)
})

app.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params
    await Products.findByIdAndDelete(id)
    const items = await Products.find()
    res.send(items)
})

app.delete('/api/products', async (req, res) => {
    await Products.deleteMany({})
    res.send('all products deleted :o')
})

app.post('/api/products', async (req, res) => {
    const { title, image, description, price } = req.body
    const newProduct = new Products({ title: title, image: image, description: description, price: price })
    await newProduct.save()
    res.send(newProduct)
})

app.put('/api/products/:id', async (req, res) => {
    const {id} = req.params
    const {title, image, description, price} = req.body
    await Products.findByIdAndUpdate(id, {...req.body})
    res.send('product updated :D')
})

mongoose.connect(process.env.CONNECTION_STRING)
    .then(res => console.log('db connected'))

app.listen(process.env.PORT, (req, res) => {
    console.log('api running on 8080');
})