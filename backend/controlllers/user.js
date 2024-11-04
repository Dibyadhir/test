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
            else {
                result = result[0]
                if (bcrypt.compareSync(password, result.password)) {
                    const data = { firstName: result.first_name, lastName: result.last_name, gender: result.gender, dob: result.dob, about: result.about_youself, profile: result.pic }
                    const token = jwt.sign(data, process.env.JWT_SECRET)
                    res.send({ info: data, token: token })

                }
                else {
                    res.status(500).json('Invalid Email/Password')
                }

            }
        }
    })
}


const checkUser = async (req, res) => {
    console.log(req.cookies)
    const {isAuth,email} = req.checkAuth
    try {
        if (isAuth) {
            const q = `select * from user where email=?`
            db.query(q, [email], (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json('error occured!')
                }
                else {
                    if (result.length !== 0) {
                        result = result[0]
                        delete result.password
                        console.log(result)
                        res.status(200).json(result)
                    }
                    else {
                        return res.clearCookie('token').status(401).json('Unauthorized')
                    }

                }
            })

        }
        else {
            return res.clearCookie('token').status(401).json('Unauthorized')
        }


    }
    catch {
        return res.status(401).json('Unauthorized')
    }

}


const getuser = (req, res) => {
    console.log(req.body)
    
    // const user_query = 'select * from user where id=?'
    // if (req.checkAuth.isAuth ) {
    //     db.query(user_query, (err, result) => {
    //         if (err) return res.status(500).json('error occured!')
    //         else {

    //             res.send(result)

    //         }
    //     })
    // }
    // else {
    //     res.status(406).json('unauthorized')
    // }

}
const updateProfile = async (req, res) =>{
    console.log(req.body)
    const profile_data = {email, password, pic, first_name, last_name, gender, dob, about_youself} = req.body;
    let pic = profile_pic;
    if (!profile_pic.includes('http://res.cloudinary.com/') && profile_pic !== '') {
        try {
            const img_res = await cloudinary.uploader.upload(profile_img, { upload_preset: 'wf7ybapf' })
            console.log(img_res)
            profile_img = img_res.url
            //console.log('working')
        }
        catch (err) {
            console.log(err)
            return res.status(500).json('something went wrong try again!')
        }
    }
    const update_profile_query = `update user set profile_pic=?,first_name=?, last_name=?, gender=?, about_yourself=? where email=?`
    const update_profile_values = [profile_img, first_name, last_name, gender, about_yourself,email,]
    try{
        await db.promise().query(update_profile_query,update_profile_values)
        return res.status(200).json('Personal Info Updated Successfully')
    }
    catch{
        return res.status(500).json('error occured!') 
    }

}




const logout = (req, res) => {
    console.log(req.cookies.token)
    return res.clearCookie('token').status(200).json('Logged Out!')
}

module.exports = { register, login, checkUser, logout, updateProfile, getuser }
