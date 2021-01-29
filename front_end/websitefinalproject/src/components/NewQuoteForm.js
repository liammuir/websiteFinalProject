import React, { useState } from 'react';
import {Button,Typography,Form, Input, Space} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import QuoteList from './QuoteList';
import {send_quote} from './utils/QuoteManager'
const {Title} = Typography

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span:16},
}

const tailLayout = {
    wrapperCol: {offset: 8, span: 16}
}

const SignInForm = ({onSubmitCallback}) => {
    const [form] = Form.useForm();
    const onReset = () => form.resetFields()

    const onFinish = (values) => {
        console.log(values)
        try{
            onSubmitCallback();
            send_quote(values)
        }catch(err){
            console.log("Error: ",err)
        }
        
    }
    
    return (
        <Form {...layout} form={form} name="demo-form" onFinish={onFinish}>
            <Form.Item name="text" rules={[{required: true}]}>
                <Input.TextArea rows={4}/>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" type="primary">Submit</Button>
            </Form.Item>
        </Form>
    )
}

export default SignInForm