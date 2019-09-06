import React from 'react'
import './Content.css'

const ContentItems = () => {
    return (
        <div className='globalDiv'>
            <div className='cinstructor'>
                <div className='textInfo'>
                    <h3>We Do What We Love and Love What We Do.</h3><br />
                    <strong>And That's Helping You</strong>
                    <hr className='line' />
                </div>
            </div>

            <div className='itemsInfo'>
                <div className='con'>
                    <div className='liveChat'>
                        <img src={require('./live-chat-support.png')} /><br />
                        <div className='chatItems'>
                            <strong>Live Chat Support</strong><br /><br />
                            <span>Our working hours are Mon-Fri, 7AM-7PM EST. Rest assured, we'll be there when you need us.</span>
                        </div>
                    </div>
                    <div className='time'>
                        <img src={require('./quick-response-times.png')} />
                        <div className='timeItems'>
                            <strong>Quick Response Times</strong><br /><br />
                            <span>3 minutes.That's the longest you'll ever have to wait before you hear back from us.</span>
                        </div>
                    </div>
                    <div className='talent'>
                        <img src={require('./a-team-full-of-talent.png')} />
                        <div className='teamItems'>
                            <strong>A Team Full of Talent</strong><br /><br />
                            <span>We only hire the best. Each team member has the technical skills and knowledge to help you make the most of Joomag.
</span>
                        </div>
                    </div>
                    <div className='continuous'>
                        <img src={require('./continuous-improvement.png')} />
                        <div className='continuousItems'>
                            <strong>Continuous Improvement</strong><br /><br />
                            <span>
                                We listen. Give us your feedback and we'll use it to make our product even better.
                        </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContentItems