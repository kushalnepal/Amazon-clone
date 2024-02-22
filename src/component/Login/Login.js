import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
// import logo from '../img/amazon1.jpg'
function Login() {
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const signIn =e=>{
        e.preventDefault()
    }
    const register =e=>{
        e.preventDefault()
    }
    return (
        <div className="login">
            <Link to='/'>
                {/* <img
                    className="login_logo"
                    src={logo}
                /> */}
                <div>
                <h2 className="login_logo"><b style={{color:"black"}}>Ama</b><b style={{color:"orange"}}>zon</b></h2>
                </div>
            </Link>
            <div className='login_container'>
                <h1> sign-in </h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email}  onChange={e=>setEmail(e.target.email)}   />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.password)} />
                    <button type="submit" className="login_signin_Button" onClick={signIn} >SignIn</button>
                </form>
                <p>By signing-in you agree to the AMAZON CLONE Conditions .  <Link> Be sure </Link>  if you like my project you can join me in facebook as <Link> Kushal NP </Link>  </p>
                <button className="login_register_Button" onClick={register}>Create your Account</button>
            </div>
        </div>
    )
}

export default Login
