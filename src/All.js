import React from 'react'
import NavBar from './head/Head';
import ContentItems from './content/Content';
import AboutUs from './we/Team';
import HelpContent from './we/Help';
import Slider from './slider/Slider';

const App = () => {
    return (
        <div>
        <NavBar />
        <ContentItems />
        <AboutUs />
        <HelpContent />
        <Slider />            
        </div>
    )
}
export default App