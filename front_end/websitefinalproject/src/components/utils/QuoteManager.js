import React from 'react';
import { Button, Modal, Typography, Form, Input, Select, Upload, message } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';
import { refresh } from './UserManagement';

const get_quote = (setQuote) => {
    axios.get('http://localhost:8000/api/quote/')
        .then( res => {
            setQuote(res.data[0])
        }).catch( err => {
            message.error('Could not get quote!')
            return {text:"error",author:"error"}
        })
}

const send_quote = (values) => {
    if(true){
        refresh()
        const token = Cookies.get('accessToken')
        axios.post('http://localhost:8000/api/quotes/',{text: values.text,author: "genericAuthor"},{headers:{ Authorization: `Bearer ${token}` }})
            .then( res => {
                return res
            }).catch( err => {
                message.error('Could not send quote!')
        })
    }
}

export {get_quote,send_quote}