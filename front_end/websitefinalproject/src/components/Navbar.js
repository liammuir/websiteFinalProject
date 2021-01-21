import react from 'react'
import {Space} from 'antd'
import {Button} from 'antd'

const Navbar = ({signedIn,username}) => {
    console.log(signedIn)
    // const signInButton = () => {
    //     console.log("in navbar component")
    //     if(signedIn == true){
    //         return (<p>{username}</p>)
    //     }else{
    //         return ()
    // }}
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h1 style={{color: 'white'}}>Heading</h1>
            <Button type="primary" onClick={() => {console.log("clicked")}}>Sign In</Button>
        </div>
    )
}

export default Navbar