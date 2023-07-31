


const Header = () => {

    
    return(

        <>

        {

        <header className="App-header">
            <span className='burger'><Burger /><i class="fa fa-bars" aria-hidden="true"></i></span>
            <img className='' src={smlogo} alt='AppLogo' />
            <span className='title'>Lokigram</span>
            <nav>
            <div className='nav'>
                <ul className='ul'>
                    <li className=''><a href='' className='notification'><i class="fa fa-flag-o" aria-hidden="true"></i><Notifications /></a></li>
                    <li className=''><a href='' className='messages'><i class="fa fa-comments-o" aria-hidden="true"></i><Messages /></a></li>
                </ul>
            </div>
            </nav>  
        </header>
    
        }

        </>
    )

}