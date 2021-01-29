import React, { useState } from 'react';
import {Modal,Button,Typography,Form} from 'antd';
import NewQuoteForm from './NewQuoteForm';
const {Title} = Typography

const NewQuoteModal = ({visible,setVisible}) => {
    const toggleModal = () => {setVisible(!visible)}
    return (
        <React.Fragment>
            <Modal 
                visible={visible}
                onCancel={toggleModal}
                footer={null}
                centered
            >
                <Title>New Quote</Title>
                <NewQuoteForm  onSubmitCallback={toggleModal}/> 
            </Modal>
        </React.Fragment>
    )
}

export default NewQuoteModal