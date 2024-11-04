const express = require('express')
const { register, login, logout, checkUser, updateProfile, getuser } = require('../controlllers/user.js')

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.post('/checkuser', checkUser)
router.post('/getuser', getuser)
router.post('/updateprofile', updateProfile)

module.exports = router

