import React, { useEffect } from 'react';


import LookingFor from './lookingFor';
import Leads from './leads';
import Mechanisms from './mechanisms';
import TreatCoin from './treatcoin';
import MeetTreatCoin from './meetTreatcoin';
import WhoAreWe from './who';
import Partners from './partners';
import AboutUs from './aboutUs';
import TryYourself from './tryYourself';
import Faq from './faq';


import { Link, Element } from 'react-scroll';

const Home = () => {

  return (
    <div>
        <Element id='home'>
          <LookingFor />
        </Element>
        <Element id='service'>
          <Leads />
          <Mechanisms />
        </Element>
        <Element id='product'>
          <TreatCoin />
          <MeetTreatCoin />
        </Element>
        <Element id='aboutus'>
          <WhoAreWe />
          <TryYourself />
        </Element>
        <Element id='faq'>
          <Faq />
        </Element>
        {/* <Partners /> */}
        {/* <AboutUs /> */}
    </div>
  )
}

export default Home;