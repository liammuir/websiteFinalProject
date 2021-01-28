import React, { useState } from 'react';
import {Modal,Button,Typography,Form} from 'antd';
import NewUserForm from './NewUserForm';
const {Title} = Typography

const NewUserModal = ({visible,setVisible,setSignedIn,signedIn}) => {
    
    const toggleModal = () => {setVisible(!visible)}
    const callback = () => {
        toggleModal()
        setSignedIn(false)
    }
    return (
        <React.Fragment>
            <Modal 
                visible={visible}
                onCancel={toggleModal}
                footer={null}
                centered
            >
                <Title>Create Account</Title>
                <NewUserForm signedIn={signedIn} setSignedIn={setSignedIn} onSubmitCallback={callback} /> 
            </Modal>
        </React.Fragment>
    )
}

export default NewUserModal