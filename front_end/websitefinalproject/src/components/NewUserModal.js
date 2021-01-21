import React, { useState } from 'react';
import {Modal,Button,Typography,Form} from 'antd';
const {Title} = Typography

const NewUserModal = ({visible,setVisible}) => {
    const toggleModal = () => {setVisible(!visible)}
    return (
        <React.Fragment>
            <Modal 
                visible={visible}
                onCancel={toggleModal}
                footer={null}
                centered
            >
                <Title>Create Account</Title>
                
            </Modal>
        </React.Fragment>
    )
}

export default NewUserModal