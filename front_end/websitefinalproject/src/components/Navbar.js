import react, {useState} from 'react'
import {Space} from 'antd'
import {Button} from 'antd'
import SignInModal from './SignInModal'
import NewUserModal from './NewUserModal'

const Navbar = ({signedIn,username}) => {
    console.log(signedIn)
    const [signInModalVisible, setSignInModalVisible] = useState(false)
    const [newUserModalVisible, setNewUserModalVisible] = useState(false)

    const toggleSignInModal = () => setSignInModalVisible(prev => !prev)
    const toggleNewUserModal = () => setNewUserModalVisible(prev => !prev)
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1 style={{color: 'white'}}>Heading</h1>
                <Space>
                    <Button type="primary" onClick={() => {toggleSignInModal()}}>Sign In</Button>
                    <Button type="secondary" onClick={() => {toggleNewUserModal()}}>Create Account</Button>
                </Space>
            </div>
            <SignInModal visible={signInModalVisible} setVisible={setSignInModalVisible}/>
            <NewUserModal visible={newUserModalVisible} setVisible={setNewUserModalVisible}/>
        </div>
    )
}

export default Navbar