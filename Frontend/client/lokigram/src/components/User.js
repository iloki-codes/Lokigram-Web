
import smlogo from './assets/smlogo.png';


function User() {


    return (
        <>
            {
                <div className="user">

                    <img className="" src={smlogo} alt="logo" /> 
                    
                    <div className="">
                        <div>
                            <img src={coverpic} alt="cover" />
                            <img src={profilepic} alt='profile' />
                        </div>

                        <div className=''>
                            {/* userdetails */}
                            {/* userposts */}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default User;