


function Messages() {


    return (
        <>
        {
            <div className="">
                <div className="">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input type="text" placeholder="...Search a friend" className=""></input>
                </div>
                <hr />
                <hr />
                <div className="grid">
                    <div className="" key={map}>
                        <div>
                            <img alt="userprofile"/>
                            {/* newmessgae */}
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default Messages;