import React, { useEffect, useState } from 'react';

import Info from '../../components/profile/Info.js';
import Post from '../../components/profile/Post.js';
import Saved from '../../components/profile/Saved.js';

import { useSelector, useDispatch } from 'react-redux'
import LoadIcon from '../../assets/loading.gif';
import { getProfileUsers } from '../../redux/actions/profileAction.js'
import { useParams } from 'react-router-dom';


const Profile = () => {
    const { profile, auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const { id } = useParams()
    const [saveTab, setSaveTab] = useState(false)

    useEffect(() => {
        if(profile?.ids?.every(item => item !== id)){
            dispatch(getProfileUsers({id, auth}))
        }
    },[id, auth, dispatch, profile.ids])

    return (
        <div className="profile">

            <div className='profile_bg'></div>

            <div className='profile_content'>

            <Info auth={auth} profile={profile} dispatch={dispatch} id={id} />

            {
                auth.user._id === id &&
                <div className="profile_tab">
                    <button className={saveTab ? '' : 'active'} onClick={() => setSaveTab(false)}>Posts</button>
                    <button className={saveTab ? 'active' : ''} onClick={() => setSaveTab(true)}>Saved</button>
                </div>
            }

            {
                profile?.loading
                ? <img className="d-block mx-auto" src={LoadIcon} alt="loading" />
                : <>
                    {
                        saveTab
                        ? <Saved auth={auth} dispatch={dispatch} />
                        : <Post auth={auth} profile={profile} dispatch={dispatch} id={id} />
                    }
                </>
            }

            </div>
        </div>
    )
}

export default Profile;
