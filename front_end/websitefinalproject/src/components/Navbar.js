import react, {useState} from 'react'
import {Space,Button,Typography} from 'antd'
import SignInModal from './SignInModal'
import NewUserModal from './NewUserModal'

const {Title} = Typography

const Navbar = ({signedIn,username}) => {
    console.log(signedIn)
    const [signInModalVisible, setSignInModalVisible] = useState(false)
    const [newUserModalVisible, setNewUserModalVisible] = useState(false)

    const toggleSignInModal = () => setSignInModalVisible(prev => !prev)
    const toggleNewUserModal = () => setNewUserModalVisible(prev => !prev)
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',backgroundColor:'darkgrey',paddingLeft:'50px',paddingRight:'50px',height:'75px'}}>
                <Title style={{textAlign: 'center', margin:0}}>Title</Title>
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