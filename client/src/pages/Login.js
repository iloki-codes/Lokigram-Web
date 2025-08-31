import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../redux/actions/authAction.js';
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
        <div className="auth_page top-10 flex flex-col justify-items-center gap-5 text">

            <div className='flex flex-row gap-3'>
                <img src={smlogo} alt='logo' className='w-25 h-30'/>
                <p className='text-6xl font-extrabold font-mono tracking-widest mt-3'>LOKIGRAM</p>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <label htmlFor="exampleInputEmail1">Email address</label>

                    <input type="email" className="form-control text-indigo-200" id="exampleInputEmail1" name="email"
                    aria-describedby="emailHelp" onChange={handleChangeInput} value={email} />

                    <small id="emailHelp" className="form-text text-muted text-light-emphasis">
                        We'll never share your email with anyone else.
                    </small>
                </div>

                <div className="form-group">

                    <label htmlFor="exampleInputPassword1">Password</label>

                    <div className="pass">

                        <input type={ typePass ? "text" : "password" }
                        className="form-control " id="exampleInputPassword1"
                        onChange={handleChangeInput} value={password} name="password" />

                        <small onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                        </small>
                    </div>

                </div>

                <button type="submit" className="bg-[#b76e79] text-[#f7e7ce] p-2 w-100 border hover:bg-[#f7e7ce] hover:text-[#b76e79] hover:font-bold hover:border-3 hover:border-[#b76e79] hover:cursor-pointer"
                disabled={email && password ? false : true}>
                    Login
                </button>

                <p className="my-2">
                    You don't have an account? <Link to='/register' relative='path' style={{color: "crimson"}}>Register Now</Link>
                </p>

            </form>

            <div className='fixed flex bottom-0 w-full h-10 justify-center bg-[#f7e7ce] border-t-1 border-[#b76e79]'>
                <span className='text-lg text-indigo-400 p-1'>lokigram version 0.1.0</span>
            </div>

        </div>
    )

}

export default Login;
