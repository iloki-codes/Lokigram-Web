

import React from 'react'
import Avatar from '../Avatar.js';
import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes.js';

const Storytab = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="statuss flex flex-col gap-2 items-center">
            <Avatar src={auth.user.avatar} size="big-avatar" />

            <button className="hover:[&>span]:block hover:cursor-pointer"
                onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
                <i className='fa fa-plus bg-[#b76e79] p-2 text-[#f7e7ce] rounded-full'>
                </i>
                    <span className='hidden bg-none text-[#000]'>
                        {auth.user.username}, what are you thinking?
                    </span>
            </button>
        </div>
    )
}

export default Storytab;
