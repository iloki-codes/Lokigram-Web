


function PostBody() {



    return (
        <>
        {
            <div className="">
                <div className="">
                    <div className="">
                        <img src={userprofile} alt="up" />
                        <span className="">username</span>
                    </div>
                    <div className="">
                        <img src={userposted} alt="userposted" />
                    </div>
                    <div className="">
                        <ul className="">
                            <li className=""><i class="fa fa-gratipay" aria-hidden="true"></i></li>
                            <li className=""><i class="fa fa-comment-o" aria-hidden="true"></i></li>
                            <li className=""><i class="fa fa-share-alt" aria-hidden="true"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default PostBody;