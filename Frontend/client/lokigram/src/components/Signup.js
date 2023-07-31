

import Home from './Home';
import Account from './Account.new';
import smlogo from './assets/smlogo.png';

const Signup = () => {
    return (

        <>
        {
            <div>
                
                <div className="">
                    <p className="">Lokigram</p>
                    <p className="">--- helps you connect and share with the people in your life.</p>
                    <img className='' src={smlogo} alt='AppLogo' />
                </div>

                <div className="">
                    <form className="">
                        <input type="text" placeholder="Enter your email address" className=""/>
                        <input type="text" placeholder="Password" className="" />
                        <button type="submit" className="" onClick={Home}>Log In</button>
                        <br/>
                        <span className=""><a href="">Forgotten Password?</a></span>
                        <br/>
                        <hr/>
                        <button type="submit" className="" onSubmit={Account}>Create a new account</button>
                    </form>
                </div>

            </div>
        }
        </>
    )
};

export default Signup;