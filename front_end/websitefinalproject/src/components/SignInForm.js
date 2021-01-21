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

const SignInForm = ({onSubmitCallback}) => {
    const [form] = Form.useForm();
    
    const onReset = () => form.resetFields()
    const onFinish = (values) => {
        console.log(values)
        onSubmitCallback();
    }
    
    return (
        <Form {...layout} form={form} name="demo-form" onFinish={onFinish}>
            <Form.Item name="username" label="Username" rules={[{required: true}]}>
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