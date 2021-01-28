import React, { useState } from 'react';
import {Modal,Button,Typography,Space} from 'antd';
import SignInForm from './SignInForm';
const {Title} = Typography


const SignInModal = ({visible,setVisible,setSignedIn}) => {
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
                <SignInForm setSignedIn={setSignedIn} onSubmitCallback={toggleModal}/>
            </Modal>
        </React.Fragment>
    )
}

export default SignInModal