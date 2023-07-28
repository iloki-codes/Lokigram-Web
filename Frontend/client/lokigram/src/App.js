import React from 'react';
import Burger from './components/Burger.menu';

import smlogo from './assets/smlogo.png';

function App() {
  
  return (
    
    <div className="App">
      
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

      <Storytab />

      <main>

        <div className='mainbody'>
          <PostBody />
        </div>

        <div className=''>
          <button type='submit' className='createpost'>Create New Post<i class="fa fa-plus-square" aria-hidden="true"></i></button>
          <button type='submit' className='search'><i class="fa fa-search" aria-hidden="true"></i></button>
          <button type='submit' className='home'><i class="fa fa-home" aria-hidden="true"></i></button>
        </div>
      </main>
      
      <footer>
          <button type='submit' className='profile'><i class="fa fa-user-o" aria-hidden="true"><User /></i></button>
          <p className=''>Lokigram Version 0.1.0</p>
      </footer>
    
    </div>
  
  );

}

export default App;
