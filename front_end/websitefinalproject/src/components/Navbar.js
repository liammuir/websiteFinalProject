import react, {useState} from 'react'
import {Space,Button,Typography} from 'antd'
import SignInModal from './SignInModal'
import NewUserModal from './NewUserModal'
import {logout,refresh} from './utils/UserManagement'

const {Title} = Typography

const Navbar = ({signedIn,username,setSignedIn}) => {
    console.log("signedIn",signedIn)
    const [signInModalVisible, setSignInModalVisible] = useState(false)
    const [newUserModalVisible, setNewUserModalVisible] = useState(false)

    const toggleSignInModal = () => setSignInModalVisible(prev => !prev)
    const toggleNewUserModal = () => setNewUserModalVisible(prev => !prev)

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',backgroundColor:'darkgrey',paddingLeft:'50px',paddingRight:'50px',height:'75px'}}>
                <Title style={{textAlign: 'center', margin:0}}>Quotes from Random People on the Internet</Title>
                <Space>
                    {signedIn == false && <Button type="primary" onClick={() => {toggleSignInModal()}}>Sign In</Button>}
                    {signedIn == false && <Button type="secondary" onClick={() => {toggleNewUserModal()}}>Create Account</Button>}
                    {signedIn == true && <Button type="primary" onClick={() => {logout(setSignedIn)}}>Logout</Button>}
                </Space>
            </div>
            <SignInModal signedIn={signedIn} setSignedIn={setSignedIn} visible={signInModalVisible} setVisible={setSignInModalVisible}/>
            <NewUserModal signedIn={signedIn} setSignedIn={setSignedIn} visible={newUserModalVisible} setVisible={setNewUserModalVisible}/>
        </div>
    )
}

export default Navbar