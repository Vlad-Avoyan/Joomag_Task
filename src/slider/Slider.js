import React from 'react';
import { reviews } from '../config';
import Slide from './Slide';
import './Slider.css';

class Slider extends React.Component {
    constructor() {
        super();

        this.state = {
            activeSlide: 0,
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        this.handleChangePagination = this.handleChangePagination.bind(this);
    }

    nextSlide() {
        const activeSlide = this.state.activeSlide;
        let slide = activeSlide + 1 < reviews.length ? activeSlide + 1 : 0;
        this.setState({
            activeSlide: slide,
        })
    }

    previousSlide() {
        const activeSlide = this.state.activeSlide;
        let slide = activeSlide - 1 < 0 ? reviews.length - 1 : activeSlide - 1
        this.setState({
            activeSlide: slide
        })
    }

    handleChangePagination(index) {
        this.setState({
            activeSlide: index
        })
    }
    render() {
        return (
            <div className="mainDiv">
                <div className="customers">
                    <div className="customersSecondBlock">
                        <span className="nearToBlue">What Our <strong className="blueText">Amazing Customers Says</strong></span>
                        <hr />
                    </div>
                </div>
                <div className="slider">
                    <Slide reviewsItem={reviews[this.state.activeSlide]} />
                    <div className="pagination">
                        {reviews.map((item, index) => {
                            return (
                                <span
                                    onClick={() => this.handleChangePagination(index)}
                                    className={index === this.state.activeSlide ? "activePagination" : ""}
                                />
                            )
                        })}
                    </div>
                    <div className="buttonContainer">
                        <div
                            className="slider__next"
                            onClick={this.nextSlide}
                        >
                            &raquo;
                    </div>
                        <div
                            className="slider__previous"
                            onClick={this.previousSlide}
                        >
                            &laquo;
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Slider