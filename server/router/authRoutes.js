const express = require('express')
const router = express.Router()
const { registerUserController, logoutUserController, loginUserController } = require('../controllers/authControllers')
const errorMiddleware = require('../middlewares/errorMiddleware')
router.post('/register', registerUserController, errorMiddleware)
router.post('/login', loginUserController, errorMiddleware)
router.post('/logout', logoutUserController, errorMiddleware)



module.exports = router;