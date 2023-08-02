// import React from "react";


// export const PostBody = () => {

//     return (
//         <>
//         {
//             <div className="">
//                 <div className="">
//                     <div className="">
//                         <img src={userprofile} alt="up" />
//                         <span className="">username</span>
//                     </div>
//                     <div className="">
//                         <img src={userposted} alt="userposted" />
//                     </div>
//                     <div className="">
//                         <ul className="">
//                             <li className=""><i class="fa fa-gratipay" aria-hidden="true"></i></li>
//                             <li className=""><i class="fa fa-comment-o" aria-hidden="true"></i></li>
//                             <li className=""><i class="fa fa-share-alt" aria-hidden="true"></i></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         }
//         </>
//     );
// }

// export default PostBody;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PostCard from '../PostCard.js';

import LoadIcon from '../../assets/loading.gif';
// import LoadMoreBtn from '../LoadMoreBtn.js';
import { getDataAPI } from '../../utils/fetchData.js';
import { POST_TYPES } from '../../redux/actions/postAction.js';


const Posts = () => {
    const { homePosts, auth, theme } = useSelector(state => state)
    const dispatch = useDispatch()

    const [load, setLoad] = useState(false)

    // const handleLoadMore = async () => {
    //     setLoad(true)
    //     const res = await getDataAPI(`posts?limit=${homePosts.page * 9}`, auth.token)

    //     dispatch({
    //         type: POST_TYPES.GET_POSTS, 
    //         payload: {...res.data, page: homePosts.page + 1}
    //     })

    //     setLoad(false)
    // }

    return (
        <div className="posts">
            {
                homePosts.posts.map(post => (
                    <PostCard key={post._id} post={post} theme={theme} />
                ))
            }

            {
                load && <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
            }

{/*             
            <LoadMoreBtn result={homePosts.result} page={homePosts.page}
            load={load} handleLoadMore={handleLoadMore} /> */}
        </div>
    )
}

export default Posts;