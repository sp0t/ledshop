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

const Home = () => {

  return (
    <div>
        <LookingFor />
        <Leads />
        <Mechanisms />
        <TreatCoin />
        <MeetTreatCoin />
        <WhoAreWe />
        <Partners />
        {/* <AboutUs /> */}
        <TryYourself />
    </div>
  )
}

export default Home;