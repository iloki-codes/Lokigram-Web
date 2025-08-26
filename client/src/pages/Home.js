import { useEffect } from 'react';

import Posts from '../components/home/Posts.js';
import Storytab from '../components/home/Storytab.js';

import { useSelector } from 'react-redux';
import LoadIcon from '../assets/loading.gif';
import Footer from '../components/Footer.js';

let scroll = 0;

const Home = () => {
    const { homePosts } = useSelector(state => state)

    window.addEventListener('scroll', () => {
        if(window.location.pathname === '/'){
            scroll = window.pageYOffset
            return scroll;
        }
    })

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({top: scroll, behavior: 'smooth'})
        }, 100)
    },[])

    return (
        <div className="home row mx-0">
            <div className="col-md-8">
                <Storytab />

                {
                    homePosts.loading
                    ? <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
                    : (homePosts.result === 0 && homePosts.posts.length === 0)
                        ? <h2 className="text-center">No Post</h2>
                        : <Posts />
                }

            </div>

            <Footer />


        </div>
    )
}

export default Home;
