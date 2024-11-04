const express = require('express')
const { register, login, userLoginActivity, userActivityLogs, getUser, updatepersonalinfo } = require('../controlllers/user.js')

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/user-login-activity',userLoginActivity)
router.post('/user-activity',userActivityLogs)
router.post('/getuser', getUser)
router.post('/updatepersonalinfo', updatepersonalinfo)

module.exports = router

