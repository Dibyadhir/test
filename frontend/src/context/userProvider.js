import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import UserContext from './userContext';
import { ToastContainer, toast } from 'react-toastify';
import UserContext from './userContext';

const userProvider = () => {
    const [userDetails, setUserDetails] = useState({})
    const [unAuth, setUnAuth] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if(Cookies.get('token') !== undefined){
            axios.get('api/checkuser')
            .then(res => {
                console.log('checking user')
                setUserDetails(res.data)
            })
            .catch(err => {
                if(err.response.data === 'Unauthorized'){
                Cookies.remove('token')
                toast.error('Unauthorised user')
                setUnAuth(true)
            }
            else if(err.response.data === 504){
                toast.error('unable to get data')
            }
            })
            
        }
    });

  return (
    <div>userProvider</div>
  )
}

export default userProvider;