import React from 'react';
import Slider from '../../common/Slider/Slider';
import Experts from '../Exparts/Experts';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
           <Slider></Slider>
          <Services></Services>
          <Experts></Experts>
        </div>
    );
};

export default Home;