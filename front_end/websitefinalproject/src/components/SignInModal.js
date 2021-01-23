import React, { useState } from 'react';
import {Modal,Button,Typography,Space} from 'antd';
import SignInForm from './SignInForm';
const {Title} = Typography


const SignInModal = ({visible,setVisible}) => {
    const toggleModal = () => {setVisible(!visible)}
    
    return (
        <React.Fragment>
            <Modal 
                visible={visible}
                onCancel={toggleModal}
                footer={null}
                centered
            >
                <Title centered>Sign In</Title>
                <SignInForm/>
            </Modal>
        </React.Fragment>
    )
}

export default SignInModal