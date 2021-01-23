import React, { useState } from 'react';
import {Button,Typography,Form, Input, Space} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const {Title} = Typography

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span:16},
}

const tailLayout = {
    wrapperCol: {offset: 8, span: 16}
}

const NewUserForm = ({onSubmitCallback}) => {
    const [form] = Form.useForm();
    
    const onReset = () => form.resetFields()
    const onFinish = (values) => {
        console.log(values)
        try{
            onSubmitCallback(values);
        }catch(err){
            console.log("Error: ",err)
        }
    }
    
    return (
        <Form {...layout} form={form} name="demo-form" onFinish={onFinish}>
            <Form.Item name="username" label="Username" rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{type: 'email'}]}>
                <Input />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{required: true}]} hasFeedback>
                <Input.Password
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Form.Item>
            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject('The two passwords that you entered do not match!');
                    },
                }),
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Space large>
                    <Button type="primary" htmlType="submit">Create Account</Button>
                    <Button htmlType="button" onClick={onReset}>Reset</Button>
                </Space>
            </Form.Item>
        </Form>
    )
}

export default NewUserForm