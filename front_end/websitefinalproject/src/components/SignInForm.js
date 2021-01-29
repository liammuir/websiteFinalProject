import React, { useState } from 'react';
import {Button,Typography,Form, Input, Space} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {login} from './utils/UserManagement.js'

const {Title} = Typography

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span:16},
}

const tailLayout = {
    wrapperCol: {offset: 8, span: 16}
}

const SignInForm = ({onSubmitCallback,setSignedIn}) => {
    const [form] = Form.useForm();
    
    const onReset = () => form.resetFields()
    const onFinish = (values) => {
        form.resetFields()
        console.log(values)
        try{
            login(values,setSignedIn)
            onSubmitCallback();
        }catch(err){
            console.log("Error: ",err)
        }
        
    }
    
    return (
        <Form {...layout} form={form} name="demo-form" onFinish={onFinish}>
            <Form.Item name="email" label="Email" rules={[{required: true, type: "email"}]}>
                <Input/>
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{required: true}]}>
                <Input.Password
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Space large>
                    <Button type="primary" htmlType="submit">Log In</Button>
                    <Button htmlType="button" onClick={onReset}>Reset</Button>
                </Space>
            </Form.Item>
        </Form>
    )
}

export default SignInForm