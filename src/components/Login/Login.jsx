import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { auth , provider } from "../../firebase"
import {  signInWithPopup,} from "firebase/auth";
import { myContext } from '../../context/MyContext';

import './Login.css'

const Login = () => {
    const {setUser}  = useContext(myContext)
    const signIn = ()=>{
        
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result?.user)
                setUser(result?.user)
            }).catch((error) => {
                alert(error.message)
            });


    }
    return (
    <div className='login' >
        <div className='login__logo' >
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" alt="facebook logo" />
                <p className='facebook' >facebook</p>

        </div>
        <Button className='btn' type="submit" onClick={signIn} >
            Sign In
        </Button>
    </div>
  )
}

export default Login