import react, {useState} from 'react';
import NewQuoteModal from './NewQuoteModal'
import {Button} from 'antd'

const NewQuoteButton = ({signedIn}) => {
    const [modalVisible, setModalVisible] = useState(false)
    const toggleModal = () => setModalVisible(prev => !prev)
    return (
        <>
            <div style={{position: "absolute", bottom:20, left:20, zIndex: 1000}}>
                <Button type="primary" disabled={!signedIn} onClick={toggleModal}>New Quote</Button>
            </div>
            <NewQuoteModal isVisible={modalVisible} visible={modalVisible} setVisible={setModalVisible} />
        </>
    )
}

export default NewQuoteButton