const express = require('express')
const router = express.Router()

const  { 
    getUsers,
    getUser,
    createUser,
    updateUsers,
    deleteUsers 
} = require('../controllers/users.js')

router.get('/', getUsers)

router.get('/:productID', getUser)

router.post('/', createUser) 

router.put('/:productID', updateUsers) 

router.delete('/:productID', deleteUsers)

module.exports = router