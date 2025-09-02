import React from 'react'
import { useSelector } from 'react-redux'

const Carousel = ({images, id}) => {

    const isActive = index => {
        if(index === 0) return "active";
        else return "";
    }

    const { theme } = useSelector(state => state)

    return (

        <div id={`image${id}`} className="carousel slide" data-bs-ride="carousel">

            <ol className="carousel-indicators" style={{zIndex: 1}}>
                {
                    images?.map((img, index) => (
                        // <li>
                            <li
                            key={index}
                            role='button'
                            data-bs-target={`#image${id}`}
                            data-bs-slide-to={index}
                            aria-current={index === 0 ? "true" : undefined}
                            aria-label={`Slide ${index + 1}`}
                            className={isActive(index)}
                        ></li>
                        // </li>
                    ))
                }

            </ol>

            <div className="carousel-inner">
                {
                    images?.map((img, index) => (

                        <div key={index} className={`carousel-item ${isActive(index)}`}>

                            {
                                img?.url?.match(/video/i) ? (

                                    <video
                                        controls
                                        src={img?.url}
                                        className="d-block w-100"
                                        style={{filter: theme ? 'invert(1)' : 'invert(0)'}}
                                    />
                                ) : (

                                    <img
                                        src={img?.url}
                                        className="d-block w-100"
                                        alt={img?.url}
                                        style={{filter: theme ? 'invert(1)' : 'invert(0)'}}
                                    />
                                )
                            }

                        </div>
                    ))
                }

            </div>

            {
                images?.length > 1 &&

                <>
                    <button
                        className="carousel-control-prev"
                        type='button'
                        data-bs-target={`#image${id}`}
                        data-bs-slide="prev"
                        style={{width: '5%'}}
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>

                    <button
                        className="carousel-control-next"
                        data-bs-target={`#image${id}`}
                        data-bs-slide="next"
                        style={{width: '5%'}}
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                </>
            }

        </div>
    )
}

export default Carousel;



