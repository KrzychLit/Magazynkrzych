const express = require('express')
const router = express.Router()

const  { 
    getOrders,
    getOrder,
    createOrder,
    deleteOrders 
} = require('../controllers/orders.js')

router.get('/', getOrders)

router.get('/:productID', getOrder)

router.post('/', createOrder) 

router.delete('/:productID', deleteOrders)

module.exports = router