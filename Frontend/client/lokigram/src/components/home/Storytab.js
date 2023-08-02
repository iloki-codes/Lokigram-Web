



// const Storytab = () => {

//     return (
//         <>
//         {
//             <div className="">
//                 {/* story.map */}
//                 <div className="" key={5}></div>
//             </div>
//         }
//         </>
//     )
// } 

// export default Storytab;   

import React from 'react'
import Avatar from '../Avatar'
import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'

const Storytab = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="status my-3 d-flex">
            <Avatar src={auth.user.avatar} size="big-avatar" />
            
            <button className="statusBtn flex-fill"
            onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
                {auth.user.username}, what are you thinking?
            </button>
        </div>
    )
}

export default Storytab;
