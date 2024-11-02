const mysql = require('../config/db.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res) => {
    //console.log(req.body)
    const check = 'select * from user where email=?;'
    const values = [req.body.email]

    mysql.query(check, values, async (err, result) => {
        //terminal visible hai kya
        if (err) res.status(500).json(err.message)
        else {
            console.log(result)
            if (result.length === 0) {
                const hash = bcrypt.hashSync(req.body.password, 10)
                const insert = 'insert into user(first_name, last_name, email, password,pic,gender,dob, about_yourself ) values(?,?,?,?,"","","","")'
                const values = [req.body.firstName, req.body.lastName, req.body.email, hash]
                await mysql.promise().query(insert, values)
                res.send('user created succssfully')

            }
            else {
                res.status(406).send('Email address already exists')
            }
        }

    })

}

const login = (req, res) => {
    console.log(req.body)
    const { email, password } = req.body

    const check = 'select * from user where email=?;'
    const values = [email]

    mysql.query(check, values, async (err, result) => {
        //terminal visible hai kya
        if (err) res.status(500).json(err.message)
        else {
            console.log(result)
            if (result.length === 0) {
                res.status(500).json('Invalid Email/Password')
            }
            else{
                result=result[0]
                if(bcrypt.compareSync(password,result.password)){
                    const data={firstName:result.first_name, lastName:result.last_name, gender:result.gender, dob:result.dob, about:result.about_youself, profile:result.pic}
                    const token = jwt.sign(data, process.env.JWT_SECRET)
                    res.send({info:data, token:token})

                }
                else{
                    res.status(500).json('Invalid Email/Password')
                }

            }
        }
    })
}

module.exports = { register, login }
