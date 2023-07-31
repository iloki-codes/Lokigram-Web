import Header from './Header';
import Storytab from './Storytab';
import PostBody from './PostBody';
import User from './User';

const Home = () => {
    
    return(

        <>

      {
        <div className=''>

            <Header />

            <Storytab />

            <PostBody />
            
            <div className=''>
              <button type='submit' className='createpost'>Create New Post<i class="fa fa-plus-square" aria-hidden="true"></i></button>
              <button type='submit' className='search'><i class="fa fa-search" aria-hidden="true"></i></button>
              <button type='submit' className='home'><i class="fa fa-home" aria-hidden="true"></i></button>
              <button type='submit' className='profile'><i class="fa fa-user-o" aria-hidden="true"><User /></i></button>
            </div>

        </div>
    }

        </>
    )

};

export default Home;
