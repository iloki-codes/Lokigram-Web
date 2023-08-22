import React from 'react';
import User from '../User.js';
import FollowBtn from '../FollowBtn.js';
import { useSelector } from 'react-redux';

const Following = ({users, setShowFollowing}) => {
    const { auth } = useSelector(state => state)
    return (
        <div className="follow">
            <div className="follow_box">
                <h5 className="text-center">Following</h5>
                <hr/>

                <div className="follow_content">
                    {
                        users.map(user => (
                            <User key={user._id} user={user} setShowFollowing={setShowFollowing} >
                                {
                                    auth.user._id !== user._id && <FollowBtn user={user} />
                                }
                            </User>
                        ))
                    }
                </div>

                <div className="close" onClick={() => setShowFollowing(false)}>
                    &times;
                </div>
                
            </div>
        </div>
    )
}

export default Following;