import React from 'react'
import LeftSide from '../../components/message/LeftSide.js';
import loki from '../../assets/smlogo.png';

const Message = () => {
    return (
        <div className="message d-flex">
            <div className="col-md-4 border-right px-0">
                <LeftSide />
            </div>

            <div className="col-md-8 px-0 right_mess">
                <div className="d-flex justify-content-center
                align-items-center flex-column h-100">

                    < div className='flex flex-row gap-5'>
                    <img src={loki} alt={loki} className='h-40 w-20 !object-contain' />
                    <span className="material-icons text-[#b76e79] !text-[50px]">local_post_office</span>
                    </div>
                    <h4 className='!text-[#b76e79]'>Lokigram-ChatBox</h4>

                </div>
            </div>
        </div>
    )
}

export default Message;