import React from 'react';
import { Button, Modal, Typography, Form, Input, Select, Upload, message } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';

const refreshTokenLifespan = 1
const accessTokenLifespan = 5*60000

const login = (values,setSignedIn) => {
    axios.post('http://localhost:8000/api/token/', values)
        .then( res => {
            Cookies.set('accessToken', res.data.access);
            Cookies.set('refreshToken', res.data.refresh);
            message.success('Login Successful');
            setSignedIn(true)
        }).catch( err => {
            message.error('Login Failed')
        })
}

const refresh = (setSignedIn) => {
    const refreshToken = Cookies.get('refreshToken')
    if(refreshToken){ 
        axios.post('http://localhost:8000/api/token/refresh/', {refresh: refreshToken})
        .then( res=> {
            Cookies.set('accessToken', res.data.access, { expires: new Date(Date.now() + 5 * 60000) });
            setSignedIn(true)
        })
        .catch(err=>{
            Cookies.remove('refreshToken')
            Cookies.remove('accessToken')
            setSignedIn(false)
        })
    }else{
        console.log('token not found')
        setSignedIn(false)
    }
}

const logout = (setSignedIn) => {
    const token = Cookies.get('refreshToken')
    if (token){
        axios.post('http://localhost:8000/api/user/logout/blacklist/', {refresh_token: token})
        .then(() => {
            setSignedIn(false)
            message.success("Logged out succesfully")
        }).catch(err => {
            
        })
        setSignedIn(false)
    }else{
        console.log("err")
    }
    //Cookies.remove('accessToken')
    //Cookies.remove('refreshToken')
}

const new_user = (values,setSignedIn) => {
    axios.post('http://localhost:8000/api/user/create/', values)
        .then( res => {
            login({email: values.email, password: values.password},setSignedIn)
        }).catch( err => {
            message.error('User Creation Failed')
        })
}

export {login,refresh,logout,new_user}