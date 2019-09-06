import React from 'react'
import './Slider'

const Slider = (props) => {
    const data = props.reviewsItem;
    const { firstName, lastName, opinions } = data
    return (
        <div className="slider__slide">
            <div className="slider-div">
                <h4 className="opinions">{opinions}</h4>
                <div className="nameLastname">
                <p>
                    {firstName}
                    {lastName}
                </p>
                </div>
            </div>
        </div>
    )
}

export default Slider