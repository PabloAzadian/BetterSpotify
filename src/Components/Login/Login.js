import React, { useState, useEffect } from 'react'
import './Login.css'
import Header from '../Header/Header';
import logo from "../../BetterSpotiLogo.png"
import Spotify from "../../util/Spotify";

function Login({loginStateSetter}) {
    

    const [registeredLogin, setRegisteredLogin] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")
    const [accessToken, setAccessToken] = useState("")
    const [userInfo, setUserInfo] = useState({})
    const [isProfile, setIsProfile] = useState(false)
    const goBackString = "<--"
    

    
    
    
    
    
    const handleSpotifyConnect = () => {
        Spotify.getProfile().then(setUserInfo);
        Spotify.getAccessToken();
        
    };

    useEffect(() => {
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        if (accessTokenMatch){
            loginStateSetter(true)
        }
    }, [window.location])
    
    
    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
        setError("");
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
        setError("");
    }

    const checkLogin = (e) => {
        e.preventDefault();
        if (username === 'tester' && password === 'test123') {
            loginStateSetter(true)
        } else {
            setPassword('');
            setUsername('');
            setError("Invalid username or password");
            
        }
    }

    const title = (
        <div className='login-title'>
            <h1>Login to BetterSpotify</h1>
            <img src={logo} alt='logo'/>
        </div>
    )

    
  return (
    <div>
        <Header/>
        {!registeredLogin ? 
            <div className='login-options-container'>
                {title}
                <button onClick={handleSpotifyConnect} className='login-button-spotify'>
                    Connect with Spotify
                </button>
                 
                <div className='already-registered'>
                    <p>Already Registered?</p>
                    <button onClick={() => setRegisteredLogin(true)}>Login</button>
                </div>

            </div>
         :
         <div className='registered-login'>
                <button onClick={() => setRegisteredLogin(false)}>{goBackString} Go back</button>
                <form onSubmit={checkLogin}>
                    {title}
                    <div className='username-input'>
                        <h5>Username:</h5>
                        <input onChange={handleChangeUsername} value={username} type='text' placeholder='Username'/>
                    </div>
                    <div className='password-input'>
                        <h5>Password:</h5>
                        <input onChange={handleChangePassword} value={password} type='password' placeholder='Password'/>
                    </div>
                    {error && <p>Error! {error}</p>}
                    <button className='sign-in-button'>Sign in</button>
                </form>
            </div>
            
        }
    </div>
  )
}

export default Login