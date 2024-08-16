const express = require('express');
const {home,createUser,getUsers,deleteUser,editUser} = require('../Controllers/userController.js')
const userRoute = express.Router();



userRoute.get('/', home)
userRoute.post('/createuser', createUser)
userRoute.get('/getusers', getUsers)
userRoute.delete('/deleteuser/:id', deleteUser)
userRoute.put('/updateuser/:id', editUser)

module.exports = userRoute;