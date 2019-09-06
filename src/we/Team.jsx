import React from 'react'
import './Team.css'

const AboutUs = () => {
    return(
        <div className='globalContent'>
            <div className='colek'>
             <div className='teamContent'>
                 <div className='textContent'>
                 <span className='blueText'>A World-Class</span>
                 <span className='otherText'> Customer Success </span><br />
                 <span className='otherText'>Team</span>
                 <hr />
                 <div className='about'>
                     <span>Our client success managers are there for you at every stage of your Joomag journey. They are fully dedicated to helping you succeed and are experienced in providing guidance on how to master the tools needed to reach your marketing & sales, training & development, publishing goals. </span>
                 </div>
                 </div>
             </div>
             <div className='picBlock'>
                 <div className='bckground'></div>
                 <img className='img' src={require('../content/a-world-class-customer-success-team.png')} />
             </div>
             </div>
        </div>
    )
}
export default AboutUs