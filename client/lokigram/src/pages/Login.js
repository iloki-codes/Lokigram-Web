import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
// import Register from '../pages/Register.js';
import smlogo from '../assets/smlogo.png';


const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const [typePass, setTypePass] = useState(false)

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(auth.token) navigate.push("/")
    }, [auth.token, navigate])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <div className="auth_page">

            <p className='absolute top-12 left-96 ml-56 text-6xl text-emerald-600 font-extrabold font-mono tracking-widest'>LOKIGRAM</p>

            <img src={smlogo} alt='logo' className='w-60 h-72 fixed top-48 right-60'/>

            <form onSubmit={handleSubmit}>
                <h3 className="text-uppercase text-center mb-4">Lokigram</h3>

                <div className="form-group">

                    <label htmlFor="exampleInputEmail1">Email address</label>
                    
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                    aria-describedby="emailHelp" onChange={handleChangeInput} value={email} />
                    
                    <small id="emailHelp" className="form-text text-muted text-light-emphasis">
                        We'll never share your email with anyone else.
                    </small>
                </div>

                <div className="form-group">
                    
                    <label htmlFor="exampleInputPassword1">Password</label>

                    <div className="pass">
                        
                        <input type={ typePass ? "text" : "password" } 
                        className="form-control" id="exampleInputPassword1"
                        onChange={handleChangeInput} value={password} name="password" />

                        <small onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                        </small>
                    </div>
                   
                </div>
                
                <button type="submit" className="btn btn-dark w-100"
                disabled={email && password ? false : true}>
                    Login
                </button>

                <p className="my-2">
                    You don't have an account? <Link to='/register' relative='path' style={{color: "crimson"}}>Register Now</Link>
                </p>
            
            </form>
        
        </div>
    )

}

export default Login;
