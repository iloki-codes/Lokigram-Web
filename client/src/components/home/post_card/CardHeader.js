import React from 'react';
import Avatar from '../../Avatar.js';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { GLOBALTYPES } from '../../../redux/actions/globalTypes.js';
import { deletePost } from '../../../redux/actions/postAction.js';
import { BASE_URL } from '../../../utils/fetchData.js';
import { useSocket } from '../../../socketContext.js';

const CardHeader = ({post}) => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch();
    const socket = useSocket();

    const navigate = useNavigate();

    const handleEditPost = () => {
        dispatch({
            type: GLOBALTYPES.STATUS,
            payload: {
                ...post,
                onEdit: true
            }
        })
    }

    const handleDeletePost = () => {
        if(window.confirm("Are you sure want to delete this post?")){
            dispatch(deletePost({post, auth, socket}))
            return navigate("/")
        }
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${BASE_URL}/post/${post._id}`)
    }

    return (

        <div className="card_header d-flex justify-content-between align-items-center">

            <div className="d-flex align-items-center">

                <Avatar src={post?.user?.avatar} size="big-avatar" />

                <div className="card_name ms-2">

                    <h6 className="m-0">
                        <Link to={`/profile/${post.user._id}`} className="text-dark text-decoration-none">
                            {post?.user?.username}
                        </Link>
                    </h6>
                    <small className="text-muted">
                        {moment(post?.createdAt).fromNow()}
                    </small>
                </div>
            </div>

            <div className="nav-item dropdown">

                <span
                    className="material-icons"
                    id="moreLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    more_horiz
                </span>

                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="moreLink">
                    {
                        auth?.user?._id === post?.user?._id &&
                        (<>
                            <div className="dropdown-item" onClick={handleEditPost}>
                                <span className="material-icons me-2">create</span> Edit Post
                            </div>
                            <div className="dropdown-item" onClick={handleDeletePost} >
                                <span className="material-icons me-2">delete_outline</span> Remove Post
                            </div>
                            <hr className="dropdown-divider" />
                        </>)
                    }

                    <div className="dropdown-item" onClick={handleCopyLink}>
                        <span className="material-icons me-2">content_copy</span> Copy Link
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHeader;
